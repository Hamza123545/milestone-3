'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Product } from '../types';
import toast from 'react-hot-toast';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [isWishlisted, setIsWishlisted] = useState(isInWishlist(product.id));

  const handleAddToCart = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, image: product.image });
    toast.success(`${product.name} added to cart!`);
  };

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
      toast.success(`${product.name} removed from wishlist!`);
    } else {
      addToWishlist({ id: product.id, name: product.name, price: product.price, image: product.image });
      toast.success(`${product.name} added to wishlist!`);
    }
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="border rounded-xl p-4 flex flex-col bg-white shadow-sm hover:shadow-md transition-shadow duration-200 bg-gradient-to-r from-yellow-50 to-yellow-100">
      <Link href={`/product/${product.id}`} className="relative w-full h-48 mb-4 overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
        <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="object-center transition-transform duration-300 transform hover:scale-110" />
      </Link>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
      <p className="text-base text-gray-600 mb-2">${product.price.toFixed(2)}</p>

      <div className="flex items-center mb-2">
        <Star className="w-4 h-4 text-yellow-500 fill-current" />
        <span className="ml-1 text-gray-700 text-sm">{product.reviews}</span>
      </div>

      <div className="flex justify-between items-center mt-auto">
        <button
          onClick={handleAddToCart}
          className="flex items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors duration-200 w-full sm:w-auto text-sm"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </button>

        <button
          onClick={toggleWishlist}
          className={`p-2 rounded-full ${isWishlisted ? 'text-red-500' : 'text-gray-500'} hover:bg-yellow-200 transition-colors duration-200 ml-4`}
        >
          <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>
      </div>
    </div>
  );
}
