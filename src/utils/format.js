export const formatPrice = (price) => `${price.toLocaleString('vi-VN')}?`

export const normalizeVietnamese = (value) =>
  value.toLowerCase().replace(/\s/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')

