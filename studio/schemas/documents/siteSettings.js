export default {
  name: 'siteSettings',
  title: 'Website-Einstellungen',
  type: 'document',
  fields: [
    {
      name: 'restaurantName',
      title: 'Restaurantname',
      type: 'string',
      initialValue: 'Herr Lim',
    },
    {
      name: 'phone',
      title: 'Telefon',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Adresse',
      type: 'text',
      rows: 3,
    },
    {
      name: 'uberEatsUrl',
      title: 'Uber Eats Link',
      type: 'url',
    },
    {
      name: 'googleMapsUrl',
      title: 'Google Maps Link',
      type: 'url',
    },
    {
      name: 'tripadvisorUrl',
      title: 'Tripadvisor Link',
      type: 'url',
    },
    {
      name: 'heroImage',
      title: 'Startseitenbild',
      type: 'image',
      options: { hotspot: true },
    },
  ],
}
