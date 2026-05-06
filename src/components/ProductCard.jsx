import { Link } from 'react-router-dom'

function ProductCard({ product, detailPath }) {
  return (
    <div className="product-container">
      <Link to={`${detailPath}/${product.id}`} style={{ textDecoration: 'none' }}>
        <div
          className="product-card"
          data-type={product.type}
          data-price={product.price}
        >
          <div className="product-img">
            <img src={product.image} alt={product.name} />
            {product.new && <div className="label-tag">Mới</div>}
            {product.discount && !product.new && <div className="label-tag">Giảm giá</div>}
            <div className="quick-view">
              <span>Xem chi tiết</span>
            </div>
          </div>
          <div className="product-info">
            <h3>{product.name}</h3>
            {product.discount && product.originalPrice ? (
              <p>
                <s style={{ color: 'gray', fontWeight: 'normal' }}>
                  {product.originalPrice.toLocaleString('vi-VN')}₫
                </s>{' '}
                {product.price.toLocaleString('vi-VN')}₫
              </p>
            ) : (
              <p>{product.price.toLocaleString('vi-VN')}₫</p>
            )}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
