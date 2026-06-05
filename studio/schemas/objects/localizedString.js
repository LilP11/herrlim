export default {
  name: 'localizedString',
  title: 'Text auf Deutsch und Englisch',
  type: 'object',
  fields: [
    {
      name: 'de',
      title: 'Deutsch',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'en',
      title: 'Englisch',
      type: 'string',
    },
  ],
}
