import ProductCard from './ProductCard'

export default function ProductGrid({ products, detailPath }) {
  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((p) => (
        <ProductCard
          key={`${detailPath}-${p.id}`}
          product={p}
          detailPath={detailPath}
        />
      ))}
    </section>
  )
}

