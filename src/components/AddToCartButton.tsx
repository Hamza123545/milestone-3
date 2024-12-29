'use client'

import { ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { Product } from '../types'
import toast from 'react-hot-toast'

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })
    toast.success(`${product.name} added to cart!`)
  }

  return (
    <button
      onClick={handleAddToCart}
      className="flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-md hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-700 transition-colors duration-300"
    >
      <ShoppingCart className="w-5 h-5 mr-2" />
      Add to Cart
    </button>
  )
}
