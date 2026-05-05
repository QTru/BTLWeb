import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/format'
import '../styles/product-card.css'

export default function ProductCard({ product, detailPath }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow">
      <div className="relative aspect-[4/3] bg-[#f9f9f9]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-[#e2e2e2] p-3 text-center">
        <h3 className="product-card-title line-clamp-2 text-sm font-semibold text-[#1a355c]">
          {product.name}
        </h3>
        <p className="mt-2 font-bold text-black">
          {formatPrice(product.price)}
        </p>
        <Link
          to={`${detailPath}/${product.id}`}
          className="mt-3 rounded-tr-xl rounded-bl-none bg-[#e74c3c] px-3 py-2 text-white"
        >
          Xem chi tiet
        </Link>
      </div>
    </article>
  )
}