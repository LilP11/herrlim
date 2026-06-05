export default {
  name: 'menuItem',
  title: 'Gericht',
  type: 'document',
  fields: [
    {
      name: 'available',
      title: 'Auf der Website anzeigen',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'code',
      title: 'Nummer',
      description: 'Zum Beispiel C.1, B.4 oder R.2.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Preis',
      description: 'Preis in Euro, z. B. 11.5.',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: 'description',
      title: 'Beschreibung',
      type: 'localizedText',
    },
    {
      name: 'category',
      title: 'Kategorie',
      type: 'reference',
      to: [{ type: 'menuCategory' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tags',
      title: 'Markierungen',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'Vegetarisch', value: 'vegetarisch' },
              { title: 'Scharf', value: 'scharf' },
              { title: 'Sehr scharf', value: 'sehr scharf' },
            ],
          },
        },
      ],
      options: { layout: 'tags' },
    },
    {
      name: 'image',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'sortOrder',
      title: 'Reihenfolge',
      description: 'Kleinere Zahlen erscheinen weiter oben.',
      type: 'number',
      initialValue: 100,
    },
  ],
  preview: {
    select: {
      title: 'name.de',
      subtitle: 'code',
      media: 'image',
    },
  },
}
