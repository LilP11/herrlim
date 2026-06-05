import { menuCategories as fallbackMenuCategories } from '../data/menu.js'

const projectId =
  import.meta.env.SANITY_PROJECT_ID ||
  import.meta.env.PUBLIC_SANITY_PROJECT_ID

const dataset =
  import.meta.env.SANITY_DATASET ||
  import.meta.env.PUBLIC_SANITY_DATASET ||
  'production'

const apiVersion = import.meta.env.SANITY_API_VERSION || '2025-01-01'

const menuQuery = `*[_type == "menuCategory"] | order(sortOrder asc, title asc) {
  "id": id.current,
  name,
  korean,
  subtitle,
  description,
  "items": *[
    _type == "menuItem" &&
    references(^._id) &&
    available != false
  ] | order(sortOrder asc, code asc) {
    code,
    name,
    price,
    description,
    tags
  }
}`

function hasCmsConfig() {
  return projectId && projectId !== 'IHRE_PROJECT_ID'
}

function normalizeLocalized(value) {
  if (!value || typeof value !== 'object') return value

  return {
    de: value.de || value.en || '',
    en: value.en || value.de || '',
  }
}

function normalizeCategory(category) {
  return {
    id: category.id,
    name: normalizeLocalized(category.name),
    korean: category.korean || '',
    subtitle: normalizeLocalized(category.subtitle) || { de: '', en: '' },
    description: normalizeLocalized(category.description),
    items: (category.items || []).map((item) => ({
      code: item.code,
      name: normalizeLocalized(item.name),
      price: Number(item.price || 0),
      description: normalizeLocalized(item.description),
      tags: item.tags || [],
    })),
  }
}

export async function getMenuCategories() {
  if (!hasCmsConfig()) return fallbackMenuCategories

  const url = new URL(
    `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`,
  )
  url.searchParams.set('query', menuQuery)

  try {
    const response = await fetch(url)
    if (!response.ok) return fallbackMenuCategories

    const data = await response.json()
    const categories = (data.result || [])
      .map(normalizeCategory)
      .filter((category) => category.id && category.items.length > 0)

    return categories.length > 0 ? categories : fallbackMenuCategories
  } catch {
    return fallbackMenuCategories
  }
}
