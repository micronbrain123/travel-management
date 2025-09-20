'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Star, MapPin, Heart, ArrowRight, Search, Filter, Grid, List, Wifi, Car, Coffee, Utensils, Waves, Dumbbell, Users, Bed } from 'lucide-react'

export default function HotelsPage() {
  const [hotels, setHotels] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState('grid')
  const [likedHotels, setLikedHotels] = useState(new Set())

  // Mock data - replace with your API call
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        // Replace with: const response = await fetch('/api/hotels')
        const mockHotels = [
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
            featured: false
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
            featured: true
          },
          {
            id: 7,
            name: "The LaLiT Golf & Spa Resort",
            location: "Goa",
            image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            originalPrice: 20000,
            discountedPrice: 14000,
            rating: 4.7,
            reviews: 743,
            category: "beach",
            type: "Golf Resort",
            amenities: ["Golf Course", "Beach Access", "Pool", "Spa", "Restaurant", "WiFi"],
            highlights: ["18-hole Golf Course", "Beach Front", "Multiple Dining", "Spa Treatments"],
            discount: 30,
            featured: false
          },
          {
            id: 8,
            name: "Neemrana Fort Palace",
            location: "Neemrana, Rajasthan",
            image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            originalPrice: 12000,
            discountedPrice: 8500,
            rating: 4.5,
            reviews: 456,
            category: "heritage",
            type: "Heritage Hotel",
            amenities: ["Restaurant", "WiFi", "Parking", "Cultural Shows", "Pool"],
            highlights: ["15th Century Fort", "Heritage Rooms", "Cultural Performances", "Zip Lining"],
            discount: 29,
            featured: false
          }
        ]
        setHotels(mockHotels)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching hotels:', error)
        setLoading(false)
      }
    }

    fetchHotels()
  }, [])

  const toggleLike = (hotelId) => {
    const newLiked = new Set(likedHotels)
    if (newLiked.has(hotelId)) {
      newLiked.delete(hotelId)
    } else {
      newLiked.add(hotelId)
    }
    setLikedHotels(newLiked)
  }

  // Dynamic filters based on available categories
  const filters = [
    { key: 'all', label: 'All Hotels' },
    { key: 'luxury', label: 'Luxury' },
    { key: 'beach', label: 'Beach Hotels' },
    { key: 'mountain', label: 'Mountain Resorts' },
    { key: 'heritage', label: 'Heritage Hotels' },
    { key: 'business', label: 'Business Hotels' },
    { key: 'resort', label: 'Resorts' }
  ]

  const amenityIcons = {
    'Pool': Waves,
    'Spa': Star,
    'Restaurant': Utensils,
    'WiFi': Wifi,
    'Parking': Car,
    'Gym': Dumbbell,
    'Beach Access': Waves,
    'Golf Course': Star,
    'Conference': Users,
    'Water Sports': Waves,
    'Boating': Waves,
    'Bonfire': Star,
    'Trekking': Star,
    'Activities': Star,
    'Cultural Shows': Star
  }

  // Filter and search logic
  const filteredHotels = hotels
    .filter(hotel => activeFilter === 'all' || hotel.category === activeFilter)
    .filter(hotel => 
      hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hotel.location.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.discountedPrice - b.discountedPrice
        case 'price-high':
          return b.discountedPrice - a.discountedPrice
        case 'rating':
          return b.rating - a.rating
        case 'name':
          return a.name.localeCompare(b.name)
        default:
          return b.featured - a.featured
      }
    })

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading hotels...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Amazing Hotels & Resorts
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience luxury and comfort at India's finest hotels and resorts. 
            From heritage palaces to beachfront retreats, find your perfect stay.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search hotels, locations..."
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
              <option value="name">Name A-Z</option>
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
            Showing {filteredHotels.length} hotels
            {searchQuery && ` for "${searchQuery}"`}
            {activeFilter !== 'all' && ` in ${activeFilter}`}
          </p>
        </div>

        {/* Hotels Grid/List */}
        <div className={`${
          viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
            : 'space-y-6'
        }`}>
          {filteredHotels.map((hotel) => (
            <div 
              key={hotel.id} 
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group ${
                viewMode === 'list' ? 'flex flex-row' : ''
              }`}
            >
              {/* Image Section */}
              <div className={`relative ${viewMode === 'list' ? 'w-1/3' : ''}`}>
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                    viewMode === 'list' ? 'w-full h-full' : 'w-full h-64'
                  }`}
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {hotel.discount && (
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {hotel.discount}% OFF
                    </div>
                  )}
                  {hotel.featured && (
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>

                {/* Like Button */}
                <button
                  onClick={() => toggleLike(hotel.id)}
                  className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      likedHotels.has(hotel.id)
                        ? 'text-red-500 fill-red-500'
                        : 'text-gray-600'
                    }`}
                  />
                </button>

                {viewMode === 'grid' && (
                  <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    {hotel.type}
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className={`p-6 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-between' : ''}`}>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {hotel.name}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{hotel.location}</span>
                    {viewMode === 'list' && (
                      <>
                        <Bed className="w-4 h-4 ml-4 mr-1" />
                        <span className="text-sm">{hotel.type}</span>
                      </>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 font-semibold text-gray-900">{hotel.rating}</span>
                    <span className="text-gray-500 text-sm ml-2">({hotel.reviews} reviews)</span>
                  </div>

                  {/* Amenities */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {hotel.amenities.slice(0, 4).map((amenity, index) => {
                        const IconComponent = amenityIcons[amenity] || Star
                        return (
                          <div key={index} className="flex items-center bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs">
                            <IconComponent className="w-3 h-3 mr-1" />
                            {amenity}
                          </div>
                        )
                      })}
                      {hotel.amenities.length > 4 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs">
                          +{hotel.amenities.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <div className="space-y-1">
                      {hotel.highlights.slice(0, 2).map((highlight, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400 line-through text-sm">
                        ₹{hotel.originalPrice?.toLocaleString('en-IN')}
                      </span>
                      <span className="text-2xl font-bold text-blue-600">
                        ₹{hotel.discountedPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">per night</span>
                  </div>
                  
                  <Link href={`/hotels/${hotel.id}`}>
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
        {filteredHotels.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🏨</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No hotels found</h3>
            <p className="text-gray-600">Try adjusting your search or filters to find what you're looking for.</p>
          </div>
        )}
      </div>
    </div>
  )
}