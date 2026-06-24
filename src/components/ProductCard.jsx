import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link className="product-card-link" to={`/product/${product.id}`}>
        <div className="product-media">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info">
          <div>
            <h2>{product.name}</h2>
            <p>{product.fabric}</p>
          </div>
          <strong>{product.price}</strong>
        </div>
      </Link>
      <button className="wishlist-button" type="button" aria-label={`Add ${product.name} to wishlist`}>
        <Heart size={19} aria-hidden="true" />
      </button>
    </article>
  )
}

export default ProductCard
