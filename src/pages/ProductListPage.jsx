import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  SWIMWEAR_PRODUCTS,
  ACCESSORY_PRODUCTS,
  SALE_PRODUCTS,
} from '../data/products'
import { usePagination } from '../hooks/usePagination'
import Filter from '../components/Filter'
import ProductGrid from '../components/ProductGrid'
import Pagination from '../components/Pagination'
import '../styles/pages.css'

const map = {
  'do-boi': SWIMWEAR_PRODUCTS,
  'phu-kien-boi': ACCESSORY_PRODUCTS,
  'giam-gia': SALE_PRODUCTS,
}

export default function ProductListPage() {
  const { type } = useParams()
  const source = map[type] || []
  const [selectedCategory, setSelectedCategory] = useState('tatca')
  const [maxPrice, setMaxPrice] = useState(
    type === 'giam-gia' ? 700000 : 1000000
  )

  const filtered = useMemo(
    () =>
      source.filter(
        (p) =>
          (selectedCategory === 'tatca' || p.type === selectedCategory) &&
          p.price <= maxPrice
      ),
    [source, selectedCategory, maxPrice]
  )

  const { page, setPage, totalPages, currentItems } = usePagination(
    filtered,
    8
  )

  const categories = [
    { value: 'tatca', label: 'Tất cả' },
    ...Array.from(new Set(source.map((p) => p.type))).map((value) => ({
      value,
      label: value,
    })),
  ]

  return (
    <div>
      <h1 className="page-title mb-8 text-center text-5xl font-bold">
        {type?.replaceAll('-', ' ').toUpperCase()}
      </h1>
      <div className="flex gap-8">
        <Filter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          range={{
            min: 150000,
            max: type === 'giam-gia' ? 700000 : 1000000,
          }}
        />
        <div className="flex-1">
          <ProductGrid products={currentItems} detailPath={`/chi-tiet/${type}`} />
          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </div>
      </div>
    </div>
  )
}

