import { useState, useCallback } from 'react'

/**
 * Hook để lọc sản phẩm theo danh mục và giá
 */
export function useProductFilter(products) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [maxPrice, setMaxPrice] = useState(1000000)
  const [filterOpen, setFilterOpen] = useState({ category: false, price: false })

  const toggleFilter = useCallback((id) => {
    setFilterOpen(prev => ({ ...prev, [id]: !prev[id] }))
  }, [])

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.type === selectedCategory
    const priceMatch = product.price <= maxPrice
    return categoryMatch && priceMatch
  })

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN').format(price) + ' ₫'
  }

  return {
    selectedCategory,
    setSelectedCategory,
    maxPrice,
    setMaxPrice,
    filterOpen,
    toggleFilter,
    filteredProducts,
    formatPrice,
  }
}
