import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import schemas from './schemas/index.js';

export default defineConfig({
  name:      'herrlim',
  title:     'Herr Lim – Speiseverwaltung',

  // ← Hier Ihre Project ID eintragen (von sanity.io/manage)
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '8rs32vbt',
  dataset:   'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Verwaltung')
          .items([
            S.listItem()
              .title('🍜 Gerichte')
              .child(S.documentTypeList('menuItem').title('Alle Gerichte')),

            S.listItem()
              .title('📋 Menü-Kategorien')
              .child(S.documentTypeList('menuCategory').title('Kategorien')),

            S.divider(),

            S.listItem()
              .title('⚙️ Website-Einstellungen')
              .child(
                S.document()
                  .title('Einstellungen')
                  .schemaType('siteSettings')
                  .documentId('siteSettings'),
              ),
          ]),
    }),
  ],

  schema: { types: schemas },
});
