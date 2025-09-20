'use client'
import Link from 'next/link'
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <Link href="/" className="text-2xl font-bold text-primary-400 mb-4 block">
                TravelBook
              </Link>
              <p className="text-gray-300 mb-4">
                Your trusted partner for unforgettable travel experiences. We create memories that last a lifetime.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-primary-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/packages" className="text-gray-300 hover:text-primary-400 transition-colors">
                    Travel Packages
                  </Link>
                </li>
                <li>
                  <Link href="/hotels" className="text-gray-300 hover:text-primary-400 transition-colors">
                    Hotels
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-primary-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-primary-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                    Flight Booking
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                    Hotel Reservations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                    Tour Packages
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                    Travel Insurance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                    Visa Assistance
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-0.5 text-primary-400 flex-shrink-0" />
                  <p className="text-gray-300">
                    3rd street, MG Road<br />
                    Bangalore, 782453<br />
                    India
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-primary-400" />
                  <p className="text-gray-300">+91 9876543310</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-primary-400" />
                  <p className="text-gray-300">info@travelbook.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 TravelBook. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}