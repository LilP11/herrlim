import { menuCategories } from '../src/data/menu.js'

const projectId = process.env.SANITY_PROJECT_ID || '8rs32vbt'
const dataset = process.env.SANITY_DATASET || 'production'
const apiVersion = process.env.SANITY_API_VERSION || '2025-01-01'
const token = process.env.SANITY_WRITE_TOKEN

if (!token) {
  console.error('Missing SANITY_WRITE_TOKEN.')
  console.error('Create a Sanity API token with Editor permissions, then run:')
  console.error('$env:SANITY_WRITE_TOKEN="your_token"; npm.cmd run sanity:import-menu')
  process.exit(1)
}

const mutationUrl = new URL(
  `https://${projectId}.api.sanity.io/v${apiVersion}/data/mutate/${dataset}`,
)
mutationUrl.searchParams.set('visibility', 'sync')

function localizedString(value) {
  if (typeof value === 'object' && value !== null) {
    return {
      _type: 'localizedString',
      de: value.de || value.en || '',
      en: value.en || value.de || '',
    }
  }

  return {
    _type: 'localizedString',
    de: value || '',
    en: value || '',
  }
}

function localizedText(value) {
  if (!value) return undefined

  return {
    _type: 'localizedText',
    de: value.de || value.en || '',
    en: value.en || value.de || '',
  }
}

function categoryId(category) {
  return `menu-category-${category.id}`
}

function itemId(category, item) {
  const safeCode = item.code
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/^-|-$/g, '')

  return `menu-item-${category.id}-${safeCode}`
}

const mutations = []

menuCategories.forEach((category, categoryIndex) => {
  const categoryDocumentId = categoryId(category)

  mutations.push({
    createOrReplace: {
      _id: categoryDocumentId,
      _type: 'menuCategory',
      title: typeof category.name === 'object' ? category.name.de : category.name,
      id: {
        _type: 'slug',
        current: category.id,
      },
      name: localizedString(category.name),
      korean: category.korean || '',
      subtitle: localizedString(category.subtitle),
      description: localizedText(category.description),
      sortOrder: (categoryIndex + 1) * 10,
    },
  })

  category.items.forEach((item, itemIndex) => {
    mutations.push({
      createOrReplace: {
        _id: itemId(category, item),
        _type: 'menuItem',
        available: true,
        code: item.code,
        name: localizedString(item.name),
        price: item.price,
        description: localizedText(item.description),
        category: {
          _type: 'reference',
          _ref: categoryDocumentId,
        },
        tags: item.tags || [],
        sortOrder: (itemIndex + 1) * 10,
      },
    })
  })
})

const response = await fetch(mutationUrl, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ mutations }),
})

if (!response.ok) {
  const error = await response.text()
  console.error(error)
  process.exit(1)
}

const result = await response.json()
const categoryCount = menuCategories.length
const itemCount = menuCategories.reduce((total, category) => total + category.items.length, 0)
const mutationCount = result.results?.length || 0

console.log(`Imported ${categoryCount} categories and ${itemCount} dishes into Sanity.`)
console.log(`Sanity applied ${mutationCount} mutations.`)
console.log(`Transaction ID: ${result.transactionId}`)
