import ProductGrid from '../components/ProductGrid'
import TrustStrip from '../components/TrustStrip'

const filterGroups = [
  ['Category', 'Banarasi Sarees', 'Wedding Edit', 'New Arrivals'],
  ['Colour', 'Emerald', 'Rani Pink', 'Ivory', 'Sindoor Red'],
  ['Fabric', 'Katan Silk', 'Organza', 'Brocade Silk', 'Kora Silk'],
  ['Occasion', 'Wedding', 'Festive', 'Reception', 'Cocktail'],
]

const quickFilters = [
  'Wedding',
  'Banarasi Silk',
  'Katan',
  'Organza',
  'Under ₹5,000',
  'Under ₹10,000',
  'New Arrivals',
]

function Home({ products, searchTerm }) {
  return (
    <>
      <TrustStrip />
      <div className="home-page">
        <aside className="filter-sidebar" aria-label="Product filters">
          <div className="filter-heading">
            <h2>Filters</h2>
            <button type="button">Clear</button>
          </div>
          {filterGroups.map(([title, ...items]) => (
            <section className="filter-block" key={title}>
              <h3>{title}</h3>
              {items.map((item) => (
                <label key={item}>
                  <input type="checkbox" />
                  <span>{item}</span>
                </label>
              ))}
            </section>
          ))}
        </aside>

        <section className="catalogue-panel" aria-label="Products">
          <div className="catalogue-intro">
            <div>
              <p>Banarasi Sarees</p>
              <span>
                {products.length} products
                {searchTerm ? ` matching “${searchTerm}”` : ' in the PaaN edit'}
              </span>
            </div>
            <div className="catalogue-tools" aria-label="Catalogue controls">
              <select aria-label="Sort products" defaultValue="featured">
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <button type="button" aria-label="Grid view">▦</button>
              <button type="button" aria-label="List view">☰</button>
            </div>
          </div>

          <div className="quick-filters" aria-label="Quick filters">
            {quickFilters.map((filter) => (
              <button type="button" key={filter}>
                {filter}
              </button>
            ))}
          </div>

          <ProductGrid products={products} />
        </section>
      </div>
    </>
  )
}

export default Home
