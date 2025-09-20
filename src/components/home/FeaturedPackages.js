'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Star, MapPin, Calendar, Users, Heart, ArrowRight, Clock, Truck } from 'lucide-react'

export default function FeaturedPackages() {
  const [likedPackages, setLikedPackages] = useState(new Set())
  const [activeFilter, setActiveFilter] = useState('all')

  const toggleLike = (packageId) => {
    const newLiked = new Set(likedPackages)
    if (newLiked.has(packageId)) {
      newLiked.delete(packageId)
    } else {
      newLiked.add(packageId)
    }
    setLikedPackages(newLiked)
  }

  // Use the same mock data as your main packages page to ensure consistency
  const packages = [
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
    }
  ]

  const filters = [
    { key: 'all', label: 'All Packages' },
    { key: 'heritage', label: 'Heritage & Culture' },
    { key: 'nature', label: 'Nature & Hills' },
    { key: 'beach', label: 'Beach Destinations' },
    { key: 'adventure', label: 'Adventure' }
  ]

  // Show only featured packages for homepage, limit to 6
  const featuredPackages = packages.filter(pkg => pkg.featured).slice(0, 6)
  const filteredPackages = activeFilter === 'all' 
    ? featuredPackages 
    : featuredPackages.filter(pkg => pkg.category === activeFilter)

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Travel Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover India's most enchanting destinations with our carefully curated travel packages. 
            From royal palaces to serene backwaters, adventure awaits!
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeFilter === filter.key
                  ? 'bg-primary-600 text-black shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              {/* Image Section */}
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
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
                  className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      likedPackages.has(pkg.id)
                        ? 'text-red-500 fill-red-500'
                        : 'text-gray-600'
                    }`}
                  />
                </button>

                {/* Duration Badge */}
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {pkg.duration}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Title and Location */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {pkg.title}
                </h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{pkg.destination}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 font-semibold text-gray-900">{pkg.rating}</span>
                  </div>
                  <span className="text-gray-500 text-sm ml-2">({pkg.reviews} reviews)</span>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-1">
                    {pkg.highlights.slice(0, 3).map((highlight, index) => (
                      <span key={index} className="bg-primary-50 text-primary-700 px-2 py-1 rounded-md text-xs">
                        {highlight}
                      </span>
                    ))}
                    {pkg.highlights.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs">
                        +{pkg.highlights.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Includes */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Package Includes:</h4>
                  <div className="space-y-1">
                    {pkg.includes.slice(0, 2).map((item, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="flex items-center space-x-2">
                      {pkg.originalPrice && (
                        <span className="text-gray-400 line-through text-sm">
                          ₹{pkg.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                      <span className="text-2xl font-bold text-primary-600">
                        ₹{pkg.discountedPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">per person</span>
                  </div>
                  
                  {/* Updated button with proper Link */}
                  <Link href={`/packages/${pkg.id}`}>
                    <button className="bg-primary-600 hover:bg-primary-700 text-gray-800 px-4 py-2 rounded-lg font-semibold transition-all flex items-center text-sm">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/packages">
            <button className="bg-primary-600 hover:bg-primary-700 text-gray-800 px-8 py-3 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center mx-auto">
              View All Packages
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}