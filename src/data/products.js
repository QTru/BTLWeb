import swimwearRaw from '../data/data_Doboi.json'
import accessoriesRaw from '../data/data_PhuKien.json'
import saleRaw from '../data/data_GiamGia.json'

const normalizeImage = (path) => path.replace('../../imgs/imgs_SanPham/', '/src/assets/products/')

const normalize = (items) =>
  items.map((item) => ({
    ...item,
    image: normalizeImage(item.image),
  }))

export const SWIMWEAR_PRODUCTS = normalize(swimwearRaw.products)
export const ACCESSORY_PRODUCTS = normalize(accessoriesRaw.products)
export const SALE_PRODUCTS = normalize(saleRaw.products)
export const ALL_PRODUCTS = [...SWIMWEAR_PRODUCTS, ...ACCESSORY_PRODUCTS]

