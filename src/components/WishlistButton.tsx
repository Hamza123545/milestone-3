'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'
import { useWishlist } from '../context/WishlistContext'
import { Product } from '../types'
import toast from 'react-hot-toast'

export default function WishlistButton({ product }: { product: Product }) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const [isWishlisted, setIsWishlisted] = useState(isInWishlist(product.id))

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id)
      toast.success(`${product.name} removed from wishlist!`)
    } else {
      addToWishlist({ id: product.id, name: product.name, price: product.price, image: product.image })
      toast.success(`${product.name} added to wishlist!`)
    }
    setIsWishlisted(!isWishlisted)
  }

  return (
    <button
      onClick={toggleWishlist}
      className={`flex items-center px-4 py-2 rounded-md transition-colors duration-300 ${
        isWishlisted ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'
      }`}
    >
      <Heart className={`w-5 h-5 mr-2 ${isWishlisted ? 'fill-current' : ''}`} />
      {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
    </button>
  )
}

