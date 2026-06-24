export const products = [
  {
    id: 'emerald-kadwa',
    name: 'Emerald Kadwa Boota Saree',
    price: '₹18,500',
    colour: 'Emerald Green',
    fabric: 'Pure Katan Silk',
    weaveType: 'Kadwa',
    workType: 'Gold Zari Boota',
    occasion: 'Wedding',
    image: '/images/saree-emerald.svg',
    description:
      'A deep emerald Banarasi weave with hand-finished kadwa bootas and a luminous gold border for heirloom occasions.',
  },
  {
    id: 'rani-jangla',
    name: 'Rani Pink Jangla Saree',
    price: '₹22,800',
    colour: 'Rani Pink',
    fabric: 'Silk Brocade',
    weaveType: 'Jangla',
    workType: 'Meenakari Zari',
    occasion: 'Festive',
    image: '/images/saree-rani.svg',
    description:
      'A festive jangla saree with floral meenakari accents woven across a rich rani pink silk base.',
  },
  {
    id: 'ivory-tissue',
    name: 'Ivory Tissue Zari Saree',
    price: '₹19,750',
    colour: 'Ivory',
    fabric: 'Tissue Silk',
    weaveType: 'Cutwork',
    workType: 'Antique Zari',
    occasion: 'Reception',
    image: '/images/saree-ivory.svg',
    description:
      'A soft ivory tissue saree with subtle antique zari shimmer, made for elegant evening ceremonies.',
  },
  {
    id: 'marigold-katan',
    name: 'Marigold Katan Silk Saree',
    price: '₹12,900',
    colour: 'Marigold',
    fabric: 'Katan Silk',
    weaveType: 'Butidar',
    workType: 'Resham Zari',
    occasion: 'New Arrivals',
    image: '/images/saree-marigold.svg',
    description:
      'A cheerful marigold katan saree with refined butidar detailing and a balanced festive drape.',
  },
  {
    id: 'wine-rangkat',
    name: 'Wine Rangkat Banarasi Saree',
    price: '₹28,900',
    colour: 'Wine',
    fabric: 'Pure Silk',
    weaveType: 'Rangkat',
    workType: 'Gold Silver Zari',
    occasion: 'Wedding',
    image: '/images/saree-wine.svg',
    description:
      'A statement rangkat weave in wine tones, combining traditional Banarasi craft with a ceremonial finish.',
  },
  {
    id: 'pearl-organza',
    name: 'Pearl Organza Banarasi Saree',
    price: '₹9,800',
    colour: 'Pearl Grey',
    fabric: 'Organza',
    weaveType: 'Cutwork',
    workType: 'Silver Zari',
    occasion: 'Cocktail',
    image: '/images/saree-pearl.svg',
    description:
      'An airy organza saree in pearl grey with silver zari highlights for refined contemporary styling.',
  },
  {
    id: 'midnight-tanchoi',
    name: 'Midnight Tanchoi Saree',
    price: '₹15,400',
    colour: 'Midnight Blue',
    fabric: 'Tanchoi Silk',
    weaveType: 'Tanchoi',
    workType: 'Self Weave',
    occasion: 'Festive',
    image: '/images/saree-midnight.svg',
    description:
      'A sophisticated midnight tanchoi saree with dense self-woven patterns and a soft hand feel.',
  },
  {
    id: 'rose-brocade',
    name: 'Rose Gold Brocade Saree',
    price: '₹13,950',
    colour: 'Rose Gold',
    fabric: 'Brocade Silk',
    weaveType: 'Brocade',
    workType: 'Floral Zari',
    occasion: 'Reception',
    image: '/images/saree-rose.svg',
    description:
      'A rose gold brocade saree with floral zari motifs and a polished boutique finish.',
  },
  {
    id: 'lotus-kora',
    name: 'Lotus Kora Silk Saree',
    price: '₹8,750',
    colour: 'Lotus Pink',
    fabric: 'Kora Silk',
    weaveType: 'Butidar',
    workType: 'Light Zari',
    occasion: 'Under ₹10,000',
    image: '/images/saree-lotus.svg',
    description:
      'A graceful kora silk saree with light zari butis, easy to wear across intimate celebrations.',
  },
  {
    id: 'sage-georgette',
    name: 'Sage Georgette Banarasi Saree',
    price: '₹4,850',
    colour: 'Sage Green',
    fabric: 'Georgette',
    weaveType: 'Cutwork',
    workType: 'Thread Zari',
    occasion: 'Under ₹5,000',
    image: '/images/saree-sage.svg',
    description:
      'A fluid sage georgette saree with Banarasi-inspired cutwork for light festive dressing.',
  },
  {
    id: 'sindoor-bridal',
    name: 'Sindoor Bridal Banarasi Saree',
    price: '₹36,500',
    colour: 'Sindoor Red',
    fabric: 'Heavy Brocade Silk',
    weaveType: 'Shikargah',
    workType: 'Heavy Gold Zari',
    occasion: 'Wedding',
    image: '/images/saree-sindoor.svg',
    description:
      'A bridal Banarasi saree in sindoor red with ornate shikargah-inspired zari work and a grand border.',
  },
  {
    id: 'copper-organza',
    name: 'Copper Organza Silk Saree',
    price: '₹10,500',
    colour: 'Copper',
    fabric: 'Organza Silk',
    weaveType: 'Butidar',
    workType: 'Antique Zari',
    occasion: 'New Arrivals',
    image: '/images/saree-copper.svg',
    description:
      'A copper-toned organza silk saree with antique zari butis and a light, luxurious drape.',
  },
]

export const getProductById = (id) => products.find((product) => product.id === id)

export const getRelatedProducts = (product, limit = 4) => {
  const related = products.filter(
    (item) =>
      item.id !== product.id &&
      (item.fabric === product.fabric ||
        item.weaveType === product.weaveType ||
        item.occasion === product.occasion),
  )
  const fallback = products.filter(
    (item) => item.id !== product.id && !related.includes(item),
  )

  return [...related, ...fallback].slice(0, limit)
}
