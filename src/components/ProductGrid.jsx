import ProductCard from './ProductCard'

function ProductGrid({ products }) {
  if (products.length === 0) {
    return <p className="empty-state">No products found</p>
  }

  return (
    <section className="product-grid" aria-label="Banarasi saree catalogue">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  )
}

export default ProductGrid
