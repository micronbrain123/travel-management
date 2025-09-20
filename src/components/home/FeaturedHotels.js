'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Star, MapPin, Wifi, Car, Coffee, Utensils, Waves, Dumbbell, Heart, ArrowRight, Users, Bed } from 'lucide-react'

export default function FeaturedHotels() {
  const [likedHotels, setLikedHotels] = useState(new Set())
  const [activeFilter, setActiveFilter] = useState('all')

  const toggleLike = (hotelId) => {
    const newLiked = new Set(likedHotels)
    if (newLiked.has(hotelId)) {
      newLiked.delete(hotelId)
    } else {
      newLiked.add(hotelId)
    }
    setLikedHotels(newLiked)
  }

  // Use the same mock data as your main hotels page to ensure consistency
  const hotels = [
    {
      id: 1,
      name: "The Oberoi Udaivilas",
      location: "Udaipur, Rajasthan",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      originalPrice: 45000,
      discountedPrice: 32000,
      rating: 4.9,
      reviews: 1247,
      category: "luxury",
      type: "Palace Hotel",
      amenities: ["Pool", "Spa", "Restaurant", "WiFi", "Parking", "Gym"],
      highlights: ["Lake View", "Heritage Architecture", "World-class Spa", "Fine Dining"],
      discount: 29,
      featured: true
    },
    {
      id: 2,
      name: "Backwater Ripples Resort",
      location: "Alleppey, Kerala",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      originalPrice: 18000,
      discountedPrice: 12500,
      rating: 4.7,
      reviews: 892,
      category: "resort",
      type: "Backwater Resort",
      amenities: ["Pool", "Restaurant", "WiFi", "Parking", "Boating"],
      highlights: ["Backwater View", "Traditional Kerala Architecture", "Ayurvedic Treatments", "Canoe Rides"],
      discount: 31,
      featured: true
    },
    {
      id: 3,
      name: "Taj Fort Aguada Resort & Spa",
      location: "Goa",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      originalPrice: 25000,
      discountedPrice: 18750,
      rating: 4.8,
      reviews: 1156,
      category: "beach",
      type: "Beach Resort",
      amenities: ["Beach Access", "Pool", "Spa", "Restaurant", "WiFi", "Water Sports"],
      highlights: ["Private Beach", "Portuguese Architecture", "Multiple Pools", "Water Activities"],
      discount: 25,
      featured: true
    },
    {
      id: 4,
      name: "The Himalayan Village Resort",
      location: "Manali, Himachal Pradesh",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      originalPrice: 15000,
      discountedPrice: 10500,
      rating: 4.6,
      reviews: 634,
      category: "mountain",
      type: "Mountain Resort",
      amenities: ["Restaurant", "WiFi", "Parking", "Bonfire", "Trekking"],
      highlights: ["Mountain Views", "Adventure Activities", "Local Cuisine", "Bonfire Nights"],
      discount: 30,
      featured: false
    },
    {
      id: 5,
      name: "ITC Grand Chola",
      location: "Chennai, Tamil Nadu",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      originalPrice: 22000,
      discountedPrice: 16500,
      rating: 4.8,
      reviews: 978,
      category: "business",
      type: "Business Hotel",
      amenities: ["Pool", "Spa", "Restaurant", "WiFi", "Gym", "Conference"],
      highlights: ["Business Center", "Multiple Restaurants", "Luxury Spa", "Airport Proximity"],
      discount: 25,
      featured: false
    },
    {
      id: 6,
      name: "Wildflower Hall Shimla",
      location: "Shimla, Himachal Pradesh",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      originalPrice: 35000,
      discountedPrice: 24500,
      rating: 4.9,
      reviews: 567,
      category: "luxury",
      type: "Luxury Resort",
      amenities: ["Spa", "Restaurant", "WiFi", "Gym", "Parking", "Activities"],
      highlights: ["Himalayan Views", "Colonial Architecture", "Adventure Sports", "Luxury Spa"],
      discount: 30,
      featured: false
    }
  ]

  const filters = [
    { key: 'all', label: 'All Hotels' },
    { key: 'luxury', label: 'Luxury' },
    { key: 'beach', label: 'Beach Hotels' },
    { key: 'resort', label: 'Resort Hotels' }
  ]

  const amenityIcons = {
    'Pool': Waves,
    'Spa': Star,
    'Restaurant': Utensils,
    'WiFi': Wifi,
    'Parking': Car,
    'Gym': Dumbbell,
    'Beach Access': Waves,
    'Water Sports': Waves,
    'Boating': Waves,
    'Conference': Users
  }

  // Show only featured hotels for homepage, limit to 3
  const featuredHotels = hotels.filter(hotel => hotel.featured).slice(0, 3)
  const filteredHotels = activeFilter === 'all' 
    ? featuredHotels 
    : featuredHotels.filter(hotel => hotel.category === activeFilter)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Hotels & Resorts
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience luxury and comfort at India's finest hotels and resorts. From heritage palaces 
            to beachfront retreats, find your perfect stay.
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
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              {/* Image Section */}
              <div className="relative">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Discount Badge */}
                {hotel.discount && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {hotel.discount}% OFF
                  </div>
                )}

                {/* Like Button */}
                <button
                  onClick={() => toggleLike(hotel.id)}
                  className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      likedHotels.has(hotel.id)
                        ? 'text-red-500 fill-red-500'
                        : 'text-gray-600'
                    }`}
                  />
                </button>

                {/* Hotel Type Badge */}
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center">
                  <Bed className="w-4 h-4 mr-1" />
                  {hotel.type}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Name and Location */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {hotel.name}
                </h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{hotel.location}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 font-semibold text-gray-900">{hotel.rating}</span>
                  </div>
                  <span className="text-gray-500 text-sm ml-2">({hotel.reviews} reviews)</span>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-1">
                    {hotel.highlights.slice(0, 3).map((highlight, index) => (
                      <span key={index} className="bg-primary-50 text-primary-700 px-2 py-1 rounded-md text-xs">
                        {highlight}
                      </span>
                    ))}
                    {hotel.highlights.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs">
                        +{hotel.highlights.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Popular Amenities:</h4>
                  <div className="space-y-1">
                    {hotel.amenities.slice(0, 2).map((amenity, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="flex items-center space-x-2">
                      {hotel.originalPrice && (
                        <span className="text-gray-400 line-through text-sm">
                          ₹{hotel.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                      <span className="text-2xl font-bold text-primary-600">
                        ₹{hotel.discountedPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">per night</span>
                  </div>
                  
                  {/* Updated button with proper Link */}
                  <Link href={`/hotels/${hotel.id}`}>
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
          <Link href="/hotels">
            <button className="bg-primary-600 hover:bg-primary-700 text-gray-800 px-8 py-3 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center mx-auto">
              View All Hotels
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}