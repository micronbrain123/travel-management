'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Star, MapPin, Heart, ArrowRight, Clock, Search, Filter, Grid, List } from 'lucide-react'

export default function PackagesPage() {
  const [packages, setPackages] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState('grid')
  const [likedPackages, setLikedPackages] = useState(new Set())

  // Mock data - replace with your API call
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        // Replace with: const response = await fetch('/api/packages')
        const mockPackages = [
          {
            id: 1,
            title: "Golden Triangle Tour",
            destination: "Delhi - Agra - Jaipur",
            image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            originalPrice: 25000,
            discountedPrice: 18500,
            duration: "6 Days 5 Nights",
            rating: 4.8,
            reviews: 245,
            category: "heritage",
            highlights: ["Taj Mahal Visit", "Red Fort", "Amber Palace", "Cultural Shows"],
            includes: ["AC Transportation", "3-Star Hotels", "Breakfast", "Sightseeing"],
            discount: 26,
            featured: true
          },
          {
            id: 2,
            title: "Kerala Backwaters Experience",
            destination: "Cochin - Munnar - Alleppey",
            image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            originalPrice: 32000,
            discountedPrice: 24000,
            duration: "7 Days 6 Nights",
            rating: 4.9,
            reviews: 189,
            category: "nature",
            highlights: ["Houseboat Stay", "Tea Plantation", "Ayurvedic Spa", "Kathakali Show"],
            includes: ["Houseboat", "Hill Station Stay", "All Meals", "Airport Transfer"],
            discount: 25,
            featured: true
          },
          {
            id: 3,
            title: "Goa Beach Paradise",
            destination: "North & South Goa",
            image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            originalPrice: 22000,
            discountedPrice: 16500,
            duration: "5 Days 4 Nights",
            rating: 4.7,
            reviews: 312,
            category: "beach",
            highlights: ["Beach Resorts", "Water Sports", "Sunset Cruise", "Portuguese Heritage"],
            includes: ["Beach Resort", "Water Activities", "Breakfast & Dinner", "Sightseeing"],
            discount: 25,
            featured: false
          },
          {
            id: 4,
            title: "Himachal Adventure Trek",
            destination: "Manali - Kasol - Tosh",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            originalPrice: 28000,
            discountedPrice: 21000,
            duration: "8 Days 7 Nights",
            rating: 4.6,
            reviews: 156,
            category: "adventure",
            highlights: ["Trekking Expedition", "River Rafting", "Camping", "Mountain Views"],
            includes: ["Trekking Gear", "Camping Setup", "All Meals", "Professional Guide"],
            discount: 25,
            featured: true
          }
        ]
        setPackages(mockPackages)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching packages:', error)
        setLoading(false)
      }
    }

    fetchPackages()
  }, [])

  const toggleLike = (packageId) => {
    const newLiked = new Set(likedPackages)
    if (newLiked.has(packageId)) {
      newLiked.delete(packageId)
    } else {
      newLiked.add(packageId)
    }
    setLikedPackages(newLiked)
  }

  // Dynamic filters based on available categories
  const filters = [
    { key: 'all', label: 'All Packages' },
    ...Array.from(new Set(packages.map(pkg => pkg.category)))
      .map(category => ({
        key: category,
        label: category.charAt(0).toUpperCase() + category.slice(1)
      }))
  ]

  // Filter and search logic
  const filteredPackages = packages
    .filter(pkg => activeFilter === 'all' || pkg.category === activeFilter)
    .filter(pkg => 
      pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.destination.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.discountedPrice - b.discountedPrice
        case 'price-high':
          return b.discountedPrice - a.discountedPrice
        case 'rating':
          return b.rating - a.rating
        case 'duration':
          return parseInt(a.duration) - parseInt(b.duration)
        default:
          return b.featured - a.featured
      }
    })

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading packages...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Amazing Travel Packages
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Explore our curated collection of travel experiences across India. 
            From heritage tours to adventure expeditions, find your perfect getaway.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search destinations, packages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Controls */}
        <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  activeFilter === filter.key
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Sort and View Controls */}
          <div className="flex items-center gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="duration">Duration</option>
            </select>

            <div className="flex border border-gray-200 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredPackages.length} packages
            {searchQuery && ` for "${searchQuery}"`}
            {activeFilter !== 'all' && ` in ${activeFilter}`}
          </p>
        </div>

        {/* Packages Grid/List */}
        <div className={`${
          viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
            : 'space-y-6'
        }`}>
          {filteredPackages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group ${
                viewMode === 'list' ? 'flex flex-row' : ''
              }`}
            >
              {/* Image Section */}
              <div className={`relative ${viewMode === 'list' ? 'w-1/3' : ''}`}>
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                    viewMode === 'list' ? 'w-full h-full' : 'w-full h-64'
                  }`}
                />
                
                {/* Discount Badge */}
                {pkg.discount && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {pkg.discount}% OFF
                  </div>
                )}

                {/* Like Button */}
                <button
                  onClick={() => toggleLike(pkg.id)}
                  className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      likedPackages.has(pkg.id)
                        ? 'text-red-500 fill-red-500'
                        : 'text-gray-600'
                    }`}
                  />
                </button>

                {viewMode === 'grid' && (
                  <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {pkg.duration}
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className={`p-6 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-between' : ''}`}>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {pkg.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{pkg.destination}</span>
                    {viewMode === 'list' && (
                      <>
                        <Clock className="w-4 h-4 ml-4 mr-1" />
                        <span className="text-sm">{pkg.duration}</span>
                      </>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 font-semibold text-gray-900">{pkg.rating}</span>
                    <span className="text-gray-500 text-sm ml-2">({pkg.reviews} reviews)</span>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {pkg.highlights.slice(0, 3).map((highlight, index) => (
                        <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400 line-through text-sm">
                        ₹{pkg.originalPrice?.toLocaleString('en-IN')}
                      </span>
                      <span className="text-2xl font-bold text-blue-600">
                        ₹{pkg.discountedPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">per person</span>
                  </div>
                  
                  <Link href={`/packages/${pkg.id}`}>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all flex items-center text-sm">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredPackages.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No packages found</h3>
            <p className="text-gray-600">Try adjusting your search or filters to find what you're looking for.</p>
          </div>
        )}
      </div>
    </div>
  )
}