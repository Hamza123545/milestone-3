'use client';

import Link from 'next/link';
import { ShoppingCart, Heart, Menu } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  return (
    <nav className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 p-4 sticky top-0 z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold tracking-wide text-gray-900">Hamza</Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-gray-700 transition">Home</Link>
          <Link href="/about" className="hover:text-gray-700 transition">About</Link>
          <Link href="/contact" className="hover:text-gray-700 transition">Contact</Link>
          <Link href="/cart" className="hover:text-gray-700 relative transition">
            <ShoppingCart className="w-5 h-5" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.length}
              </span>
            )}
          </Link>
          <Link href="/wishlist" className="hover:text-gray-700 relative transition">
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {wishlist.length}
              </span>
            )}
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="hover:text-gray-700">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link href="/" className="block py-2 hover:text-gray-700">Home</Link>
          <Link href="/about" className="block py-2 hover:text-gray-700">About</Link>
          <Link href="/contact" className="block py-2 hover:text-gray-700">Contact</Link>
          <Link href="/cart" className="block py-2 hover:text-gray-700">Cart ({cart.length})</Link>
          <Link href="/wishlist" className="block py-2 hover:text-gray-700">Wishlist ({wishlist.length})</Link>
        </div>
      )}
    </nav>
  );
}
