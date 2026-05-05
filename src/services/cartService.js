const CART_KEY = 'cart'

export const getCart = () => {
  try {
    const cart = JSON.parse(localStorage.getItem(CART_KEY))
    return Array.isArray(cart) ? cart : []
  } catch {
    return []
  }
}

export const saveCart = (cart) =>
  localStorage.setItem(CART_KEY, JSON.stringify(cart))

export const addCartItem = (product, quantity) => {
  const cart = getCart()
  const found = cart.find((item) => item.id === String(product.id))
  if (found) {
    found.quantity += quantity
  } else {
    cart.push({
      id: String(product.id),
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    })
  }
  saveCart(cart)
  return cart
}

