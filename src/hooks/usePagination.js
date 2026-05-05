import { useMemo, useState } from 'react'

export const usePagination = (items, size = 8) => {
  const [page, setPage] = useState(1)
  const totalPages = Math.max(1, Math.ceil(items.length / size))
  const currentItems = useMemo(
    () => items.slice((page - 1) * size, page * size),
    [items, page, size]
  )
  return { page, setPage, totalPages, currentItems }
}

