'use client'
import { useState } from 'react'
import { Search, MapPin, Calendar, Users, Star, ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const [searchType, setSearchType] = useState('packages')

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2835&q=80"
          alt="Beautiful travel destination"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Discover Your Next
            <span className="block text-primary-400">Adventure</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Explore breathtaking destinations and luxurious accommodations. 
            Your perfect getaway is just a click away.
          </p>

          {/* Search Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-8">
            {/* Search Type Toggle */}
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 rounded-full p-1">
                <button
                  onClick={() => setSearchType('packages')}
                  className={`px-6 py-2 rounded-full transition-all ${
                    searchType === 'packages'
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  Travel Packages
                </button>
                <button
                  onClick={() => setSearchType('hotels')}
                  className={`px-6 py-2 rounded-full transition-all ${
                    searchType === 'hotels'
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  Hotels
                </button>
              </div>
            </div>

            {/* Search Form */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Where to?"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none">
                  <option>2 Adults</option>
                  <option>1 Adult</option>
                  <option>3 Adults</option>
                  <option>4+ Adults</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div className="mt-6 text-center">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center mx-auto">
                <Search className="w-5 h-5 mr-2" />
                Search {searchType === 'packages' ? 'Packages' : 'Hotels'}
              </button>
            </div>
          </div>

          {/* Stats or Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary-400 mb-1">500+</div>
              <div className="text-sm text-gray-300">Destinations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary-400 mb-1">50K+</div>
              <div className="text-sm text-gray-300">Happy Travelers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="flex items-center justify-center mb-1">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-2xl font-bold text-primary-400 ml-1">4.9</span>
              </div>
              <div className="text-sm text-gray-300">Average Rating</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="my-8">
            <button className="text-white border-2 border-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all flex items-center mx-auto">
              Explore All Destinations
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}