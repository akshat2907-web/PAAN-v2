import { Heart, MessageCircle, ShieldCheck, Sparkles, Truck } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid'
import { getProductById, getRelatedProducts } from '../data/products'

function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)

  if (!product) {
    return (
      <section className="not-found">
        <h1>Product not found</h1>
        <Link to="/">Back to catalogue</Link>
      </section>
    )
  }

  const relatedProducts = getRelatedProducts(product)

  return (
    <div className="detail-page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>{product.name}</span>
      </nav>

      <section className="product-detail">
        <aside className="thumb-column" aria-label="Product thumbnails">
          <button type="button" aria-label={`${product.name} thumbnail`}>
            <img src={product.image} alt="" />
          </button>
          <button type="button" aria-label="Saree border thumbnail">
            <img src={product.image} alt="" />
          </button>
          <button type="button" aria-label="Saree drape thumbnail">
            <img src={product.image} alt="" />
          </button>
        </aside>

        <div className="detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <section className="detail-info" aria-label="Product information">
          <p className="detail-kicker">{product.occasion} Edit</p>
          <h1>{product.name}</h1>
          <strong>{product.price}</strong>

          <div className="colour-options" aria-label="Colour options">
            <span>Colour</span>
            <div>
              {[product.colour, 'Ivory Gold', 'Deep Green'].map((colour) => (
                <button type="button" key={colour}>
                  {colour}
                </button>
              ))}
            </div>
          </div>

          <dl className="product-specs">
            <div>
              <dt>Fabric</dt>
              <dd>{product.fabric}</dd>
            </div>
            <div>
              <dt>Weave Type</dt>
              <dd>{product.weaveType}</dd>
            </div>
            <div>
              <dt>Work Type</dt>
              <dd>{product.workType}</dd>
            </div>
            <div>
              <dt>Occasion</dt>
              <dd>{product.occasion}</dd>
            </div>
          </dl>

          <p className="detail-description">{product.description}</p>

          <div className="detail-trust">
            <span><Sparkles size={17} aria-hidden="true" /> Handpicked</span>
            <span><ShieldCheck size={17} aria-hidden="true" /> Quality checked</span>
            <span><Truck size={17} aria-hidden="true" /> Delivery support</span>
          </div>

          <div className="detail-actions">
            <a
              className="primary-cta"
              href={`https://wa.me/919999999999?text=${encodeURIComponent(
                `Hello, I would like to enquire about ${product.name}.`,
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={19} aria-hidden="true" />
              Enquire on WhatsApp
            </a>
            <button className="secondary-cta" type="button">
              <Heart size={19} aria-hidden="true" />
              Add to Wishlist
            </button>
          </div>
        </section>
      </section>

      <section className="related-section">
        <div className="section-heading">
          <h2>Related Products</h2>
          <Link to="/">View all</Link>
        </div>
        <ProductGrid products={relatedProducts} />
      </section>
    </div>
  )
}

export default ProductDetail
