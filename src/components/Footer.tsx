import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-900 via-gray-800 to-gray-700 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="text-2xl font-bold mb-5 text-yellow-400">Hamza</h3>
          <p className="text-sm leading-relaxed">
            Your premium shopping destination for quality products.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4 text-yellow-400">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <Link href="/">
                <div className="inline-block bg-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-500 transition-transform transform hover:scale-105">
                  Home
                </div>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <div className="inline-block bg-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-500 transition-transform transform hover:scale-105">
                  About Us
                </div>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <div className="inline-block bg-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-500 transition-transform transform hover:scale-105">
                  Contact
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4 text-yellow-400">Customer Support</h4>
          <ul className="space-y-3">
            <li>
              <Link href="/faq">
                <div className="inline-block bg-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-500 transition-transform transform hover:scale-105">
                  FAQ
                </div>
              </Link>
            </li>
            <li>
              <Link href="/shipping">
                <div className="inline-block bg-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-500 transition-transform transform hover:scale-105">
                  Shipping & Returns
                </div>
              </Link>
            </li>
            <li>
              <Link href="/terms">
                <div className="inline-block bg-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-500 transition-transform transform hover:scale-105">
                  Terms & Conditions
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4 text-yellow-400">Contact Us</h4>
          <p className="text-sm mb-2">123 Shopping Street, Retail City, 12345</p>
          <p className="text-sm mb-2">Email: hswati517@gmail.com</p>
          <p className="text-sm">Phone: (+92) 3188361229</p>
        </div>
      </div>
      <div className="mt-10 text-center border-t border-gray-700 pt-6">
        <p className="text-sm">&copy; 2025 Hamza All rights reserved.</p>
      </div>
    </footer>
  );
}
