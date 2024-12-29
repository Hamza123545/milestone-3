'use client';

import { useState } from 'react';
import { Send, Phone, Mail } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    toast.success('Message sent successfully!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container mx-auto py-16 px-6 md:px-12">
      <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
        Get in Touch
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:bg-yellow-600 transition duration-300 flex items-center justify-center"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8 text-gray-700">
          <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
          <p className="text-lg leading-relaxed">
            Have questions or need assistance? Reach out to us through the following contact details. We're here to help!
          </p>
          <div className="flex items-center">
            <Phone className="w-6 h-6 text-yellow-500 mr-4" />
            <div>
              <p className="text-sm font-medium">Phone</p>
              <p className="text-lg font-semibold">+923188361229</p>
            </div>
          </div>
          <div className="flex items-center">
            <Mail className="w-6 h-6 text-yellow-500 mr-4" />
            <div>
              <p className="text-sm font-medium">Email</p>
              <p className="text-lg font-semibold">hswati517@gmail.com</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium">Office Address</p>
            <p className="text-lg font-semibold">
              123 Main Street,
              <br />
             Karachi, Pakistan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
