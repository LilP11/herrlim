export const menuCategories = [
  {
    id: 'cupbap',
    name: 'Cupbap',
    korean: '컵밥',
    subtitle: 'Koreanische Reisschalen',
    description: 'Dampfender Reis mit Topping nach Wahl – alle Varianten zu je € 11,50',
    items: [
      { code: 'C.1', name: 'Tofu-Kimchi', price: 11.50, description: 'Mit hausgemachtem Kimchi', tags: ['vegetarisch'] },
      { code: 'C.2', name: 'Thunfisch-Kimchi', price: 11.50, description: 'Thunfisch & Kimchi' },
      { code: 'C.3', name: 'Gogi-Kimchi', price: 11.50, description: 'Schweinefleisch & Kimchi' },
      { code: 'C.4', name: 'Bulgogi', price: 11.50, description: 'Rindfleisch in Sojasoße' },
      { code: 'C.5', name: 'Jeyuk', price: 11.50, description: 'Würziges Schweinefleisch', tags: ['scharf'] },
      { code: 'C.6', name: 'Jjimdak', price: 11.50, description: 'Hähnchen in Sojasoße' },
      { code: 'C.7', name: 'Dakgalbi', price: 11.50, description: 'Würziges Hähnchen', tags: ['scharf'] },
      { code: 'C.9', name: 'Thunfisch-Mayo', price: 11.50, description: 'Thunfisch-Mayonnaise' },
    ]
  },
  {
    id: 'bibimbap',
    name: 'Bibimbap',
    korean: '비빔밥',
    subtitle: 'Gemischter Reistopf',
    items: [
      { code: 'C.10', name: 'Bibimbap', price: 13.00, description: 'Gemüse, Reis & Gochujang-Soße', tags: ['vegetarisch'] },
    ]
  },
  {
    id: 'tteokbokki',
    name: 'Tteokbokki',
    korean: '떡볶이',
    subtitle: 'Reiskuchen mit Ramen (Rabokki)',
    items: [
      { code: 'B.1', name: 'Original Rabokki', price: 17.00, description: 'Klassisch pikant', tags: ['sehr scharf'] },
      { code: 'B.2', name: 'Jjajang Tteokbokki', price: 17.00, description: 'Mit schwarzer Bohnensoße' },
      { code: 'B.3', name: 'Rosé Tteokbokki', price: 17.00, description: 'Cremig-würzige Soße', tags: ['scharf'] },
    ]
  },
  {
    id: 'chicken',
    name: 'K-Chicken',
    korean: '닭강정',
    subtitle: 'Dakgangjeong – Knuspriges Fried Chicken',
    items: [
      { code: 'B.4', name: 'K-Chicken Ganjang', price: 16.00, description: 'Knoblauch-Sojasoße' },
      { code: 'B.5', name: 'K-Chicken Chilli', price: 16.00, description: 'Süß-scharfe Soße', tags: ['scharf'] },
      { code: 'T.4', name: 'Tofu Gangjeong (Soja)', price: 16.00, description: 'Tofu in Sojasoße', tags: ['vegetarisch'] },
      { code: 'T.5', name: 'Tofu Gangjeong (Chilli)', price: 16.00, description: 'Tofu, süß-scharf', tags: ['vegetarisch', 'scharf'] },
      { code: 'S.2', name: 'XXL Dakgangjeong', price: 28.00, description: 'Große Portion für zwei Personen' },
    ]
  },
  {
    id: 'ramen',
    name: 'Ramen',
    korean: '라면',
    subtitle: 'Würzige koreanische Nudelsuppe',
    items: [
      { code: 'R.1', name: 'Ramen', price: 11.00, description: 'Klassische Nudelsuppe' },
      { code: 'R.2', name: 'Ramen mit Ei', price: 13.50, description: 'Mit weich gekochtem Ei' },
      { code: 'R.3', name: 'Ramen mit Mandu', price: 13.50, description: 'Mit koreanischen Teigtaschen' },
      { code: 'R.4', name: 'Ramen mit Kimchi', price: 13.50, description: 'Mit hausgemachtem Kimchi', tags: ['scharf'] },
      { code: 'R.5', name: 'Ramen mit Käse', price: 13.50, description: 'Mit geschmolzenem Käse' },
    ]
  },
  {
    id: 'hotdog',
    name: 'K-Hotdog',
    korean: '핫도그',
    subtitle: 'Koreanische Corndogs',
    items: [
      { code: 'H.1', name: 'Wurst Hotdog', price: 6.00, description: 'Klassischer Corndog' },
      { code: 'H.2', name: 'Mozza & Wurst', price: 6.50, description: 'Mozzarella & Wurst' },
      { code: 'H.3', name: 'Mozzarella Hotdog', price: 6.50, description: 'Nur Mozzarella', tags: ['vegetarisch'] },
    ]
  },
  {
    id: 'sides',
    name: 'Beilagen',
    korean: '사이드',
    subtitle: 'Kleine Snacks & Beilagen',
    items: [
      { code: 'B.6', name: 'Kimmali', price: 7.00, description: 'Glasnudelrollen in Nori-Algen' },
      { code: 'B.7', name: 'Gunmandu', price: 7.00, description: 'Gebratene Teigtaschen' },
      { code: 'B.8', name: 'Danmuji', price: 4.00, description: 'Eingelegter gelber Rettich' },
    ]
  },
];
