export default {
  name: 'menuCategory',
  title: 'Menu-Kategorie',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Interner Name',
      description: 'Nur fuer die Verwaltung, z. B. Cupbap oder Ramen.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'id',
      title: 'Website-ID',
      description: 'Kleinbuchstaben ohne Leerzeichen, z. B. cupbap.',
      type: 'slug',
      options: { source: 'title', maxLength: 40 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Anzeigename',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'korean',
      title: 'Koreanischer Name',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Untertitel',
      type: 'localizedString',
    },
    {
      name: 'description',
      title: 'Beschreibung / Hinweis',
      type: 'localizedText',
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
      title: 'title',
      subtitle: 'subtitle.de',
    },
  },
}
