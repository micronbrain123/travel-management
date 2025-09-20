'use client'
import { useState } from 'react'
import { Search, MapPin, Calendar, Users, DollarSign, Star, Filter, X } from 'lucide-react'

export default function SearchForm() {
  const [activeTab, setActiveTab] = useState('packages')
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([500, 5000])
  const [selectedRating, setSelectedRating] = useState(0)

  const popularDestinations = [
    'Paris, France',
    'Tokyo, Japan',
    'New York, USA',
    'London, UK',
    'Dubai, UAE',
    'Rome, Italy'
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect {activeTab === 'packages' ? 'Package' : 'Hotel'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing deals and create unforgettable memories with our curated selection of travel experiences.
          </p>
        </div>

        {/* Main Search Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-6xl mx-auto">
          {/* Tab Switcher */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setActiveTab('packages')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === 'packages'
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                Travel Packages
              </button>
              <button
                onClick={() => setActiveTab('hotels')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === 'hotels'
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                Hotels Only
              </button>
            </div>
          </div>

          {/* Search Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Destination */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Destination
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Check-in Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Check-in Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Check-out Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {activeTab === 'packages' ? 'Return Date' : 'Check-out Date'}
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Guests */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {activeTab === 'packages' ? 'Travelers' : 'Guests'}
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none">
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>3 Adults</option>
                  <option>4 Adults</option>
                  <option>5+ Adults</option>
                </select>
              </div>
            </div>

            {/* Budget Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none">
                  <option>$500 - $1,000</option>
                  <option>$1,000 - $2,500</option>
                  <option>$2,500 - $5,000</option>
                  <option>$5,000+</option>
                </select>
              </div>
            </div>

            {/* Category/Room Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {activeTab === 'packages' ? 'Package Type' : 'Room Type'}
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none">
                {activeTab === 'packages' ? (
                  <>
                    <option>Adventure</option>
                    <option>Luxury</option>
                    <option>Family</option>
                    <option>Romantic</option>
                    <option>Cultural</option>
                  </>
                ) : (
                  <>
                    <option>Standard Room</option>
                    <option>Deluxe Room</option>
                    <option>Suite</option>
                    <option>Presidential Suite</option>
                  </>
                )}
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Advanced Filters Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              <Filter className="w-5 h-5 mr-2" />
              Advanced Filters
            </button>

            {/* Search Button */}
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center">
              <Search className="w-5 h-5 mr-2" />
              Search {activeTab === 'packages' ? 'Packages' : 'Hotels'}
            </button>
          </div>

          {/* Advanced Filters Panel */}
          {showFilters && (
            <div className="mt-6 p-6 bg-gray-50 rounded-lg border-t">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Advanced Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Price Range Slider */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="10000"
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>

                {/* Star Rating */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Minimum Rating
                  </label>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        onClick={() => setSelectedRating(rating)}
                        className={`p-1 ${rating <= selectedRating ? 'text-yellow-400' : 'text-gray-300'}`}
                      >
                        <Star className="w-6 h-6 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Amenities/Features */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    {activeTab === 'packages' ? 'Includes' : 'Amenities'}
                  </label>
                  <div className="space-y-2">
                    {activeTab === 'packages' ? (
                      <>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Transportation Included</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Meals Included</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Sightseeing</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Adventure Activities</span>
                        </label>
                      </>
                    ) : (
                      <>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Free WiFi</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Swimming Pool</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Spa & Wellness</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Restaurant</span>
                        </label>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Popular Destinations */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Popular Destinations</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {popularDestinations.map((destination, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full hover:border-primary-500 hover:text-primary-600 transition-colors text-sm font-medium"
              >
                {destination}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}