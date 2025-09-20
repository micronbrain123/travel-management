'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { 
  Star, MapPin, Users, Calendar, Phone, Mail, ArrowLeft, 
  Check, X, Camera, Wifi, Car, Utensils, Waves, Dumbbell, Heart,
  ChevronLeft, ChevronRight, Share, MessageCircle, Coffee, Shield,
  Bed, Clock, Activity
} from 'lucide-react'

export default function HotelDetail() {
  const params = useParams()
  const { id } = params
  const [hotelData, setHotelData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [checkInDate, setCheckInDate] = useState('')
  const [checkOutDate, setCheckOutDate] = useState('')
  const [guests, setGuests] = useState(2)
  const [rooms, setRooms] = useState(1)
  const [isLiked, setIsLiked] = useState(false)

  // Complete mock data for all hotels
  const mockHotels = {
    1: {
      id: 1,
      name: "The Oberoi Udaivilas",
      location: "Udaipur, Rajasthan",
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1578774204375-826dc5d996ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      originalPrice: 45000,
      discountedPrice: 32000,
      rating: 4.9,
      reviews: 1247,
      category: "luxury",
      type: "Palace Hotel",
      discount: 29,
      overview: "Experience royal luxury at The Oberoi Udaivilas, a magnificent palace hotel overlooking Lake Pichola in Udaipur. This architectural marvel combines traditional Rajasthani design with contemporary luxury, offering guests an unforgettable experience in the City of Lakes.",
      amenities: [
        { name: "Outdoor Pool", included: true },
        { name: "Luxury Spa", included: true },
        { name: "Multiple Restaurants", included: true },
        { name: "Free WiFi", included: true },
        { name: "Free Parking", included: true },
        { name: "Fitness Center", included: true },
        { name: "24/7 Room Service", included: true },
        { name: "Concierge Service", included: true }
      ],
      highlights: [
        "Stunning views of Lake Pichola",
        "Traditional Rajasthani architecture",
        "World-class Oberoi Spa",
        "Fine dining restaurants",
        "Private courtyards and gardens",
        "Luxury boat transfers",
        "Cultural performances",
        "Butler service available"
      ],
      roomTypes: [
        {
          name: "Premier Room with Garden View",
          size: "65 sqm",
          occupancy: "2 adults",
          price: 28000,
          features: ["Garden view", "Marble bathroom", "Private courtyard"]
        },
        {
          name: "Luxury Suite with Lake View",
          size: "85 sqm",
          occupancy: "2 adults + 1 child",
          price: 35000,
          features: ["Lake view", "Separate living area", "Premium amenities"]
        },
        {
          name: "Kohinoor Suite",
          size: "125 sqm",
          occupancy: "4 adults",
          price: 55000,
          features: ["Panoramic lake view", "Private pool", "Butler service"]
        }
      ],
      facilities: [
        "Outdoor swimming pool with lake views",
        "The Oberoi Spa with traditional treatments",
        "Udaimahal restaurant for Indian cuisine",
        "Chandni bar overlooking the lake",
        "24-hour fitness center",
        "Business center",
        "Library and cigar lounge",
        "Gift shop with local handicrafts"
      ],
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 24 hours before arrival",
      pets: "Pets not allowed",
      smoking: "Non-smoking property",
      address: "Haridas Ji Ki Magri, Udaipur, Rajasthan 313001",
      nearby: [
        "City Palace - 2 km",
        "Jagdish Temple - 2.5 km",
        "Saheliyon Ki Bari - 3 km",
        "Udaipur Airport - 25 km"
      ]
    },
    2: {
      id: 2,
      name: "Backwater Ripples Resort",
      location: "Alleppey, Kerala",
      images: [
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      originalPrice: 18000,
      discountedPrice: 12500,
      rating: 4.7,
      reviews: 892,
      category: "resort",
      type: "Backwater Resort",
      discount: 31,
      overview: "Immerse yourself in the tranquil beauty of Kerala's backwaters at Backwater Ripples Resort. This eco-friendly resort offers authentic Kerala hospitality with traditional architecture, surrounded by lush greenery and serene waterways.",
      amenities: [
        { name: "Infinity Pool", included: true },
        { name: "Multi-cuisine Restaurant", included: true },
        { name: "Free WiFi", included: true },
        { name: "Free Parking", included: true },
        { name: "Ayurvedic Spa", included: true },
        { name: "Boat Rides", included: true },
        { name: "Room Service", included: true },
        { name: "Travel Desk", included: true }
      ],
      highlights: [
        "Panoramic backwater views",
        "Traditional Kerala architecture",
        "Authentic Ayurvedic treatments",
        "Canoe and kayak rides",
        "Local fishing experiences",
        "Sunset boat cruises",
        "Kerala cooking classes",
        "Bird watching tours"
      ],
      roomTypes: [
        {
          name: "Deluxe Backwater View",
          size: "45 sqm",
          occupancy: "2 adults",
          price: 10500,
          features: ["Backwater view", "Traditional decor", "Private balcony"]
        },
        {
          name: "Premium Villa",
          size: "65 sqm",
          occupancy: "2 adults + 2 children",
          price: 15000,
          features: ["Lake view", "Separate living area", "Private garden"]
        },
        {
          name: "Honeymoon Suite",
          size: "75 sqm",
          occupancy: "2 adults",
          price: 18000,
          features: ["Panoramic view", "Jacuzzi", "Private deck"]
        }
      ],
      facilities: [
        "Infinity pool overlooking backwaters",
        "Ayurvedic spa and wellness center",
        "Multi-cuisine restaurant",
        "Traditional Kerala cooking classes",
        "Boat rides and canoe trips",
        "Fishing experiences",
        "Bird watching tours",
        "Cultural performance venue"
      ],
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Free cancellation up to 48 hours before arrival",
      pets: "Pets allowed with prior notice",
      smoking: "Designated smoking areas available",
      address: "Backwater Road, Alleppey, Kerala 688001",
      nearby: [
        "Alleppey Beach - 5 km",
        "Kumarakom Bird Sanctuary - 15 km",
        "Marari Beach - 12 km",
        "Cochin Airport - 65 km"
      ]
    },
    3: {
      id: 3,
      name: "Taj Fort Aguada Resort & Spa",
      location: "Goa",
      images: [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1559628376-f4aea58421b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1605538883669-825200433431?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1538623013607-6efcc43b7c1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      originalPrice: 25000,
      discountedPrice: 18750,
      rating: 4.8,
      reviews: 1156,
      category: "beach",
      type: "Beach Resort",
      discount: 25,
      overview: "Experience the ultimate beachfront luxury at Taj Fort Aguada Resort & Spa. Located on the pristine Sinquerim Beach, this iconic resort offers Portuguese-inspired architecture, world-class amenities, and breathtaking views of the Arabian Sea.",
      amenities: [
        { name: "Private Beach", included: true },
        { name: "Multiple Pools", included: true },
        { name: "Jiva Spa", included: true },
        { name: "Multiple Restaurants", included: true },
        { name: "Free WiFi", included: true },
        { name: "Water Sports", included: true },
        { name: "Fitness Center", included: true },
        { name: "Kids Club", included: true }
      ],
      highlights: [
        "Private beach access",
        "Portuguese colonial architecture",
        "Multiple swimming pools",
        "Water sports activities",
        "Jiva Grande Spa",
        "Fine dining restaurants",
        "Kids play area",
        "Evening entertainment"
      ],
      roomTypes: [
        {
          name: "Superior Room",
          size: "40 sqm",
          occupancy: "2 adults",
          price: 16000,
          features: ["Garden view", "Marble bathroom", "Private balcony"]
        },
        {
          name: "Deluxe Sea View",
          size: "45 sqm",
          occupancy: "2 adults + 1 child",
          price: 22000,
          features: ["Sea view", "Premium amenities", "Spacious layout"]
        },
        {
          name: "Villa with Private Pool",
          size: "85 sqm",
          occupancy: "4 adults",
          price: 45000,
          features: ["Private pool", "Sea view", "Butler service"]
        }
      ],
      facilities: [
        "Private beach with water sports",
        "Three temperature-controlled pools",
        "Jiva Grande Spa with Ayurvedic treatments",
        "Five restaurants and bars",
        "Kids club with activities",
        "Fitness center and tennis court",
        "Business center",
        "Shopping arcade"
      ],
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 24 hours before arrival",
      pets: "Pets not allowed",
      smoking: "Designated smoking areas only",
      address: "Sinquerim Beach, Bardez, Goa 403519",
      nearby: [
        "Fort Aguada - 1 km",
        "Baga Beach - 8 km",
        "Calangute Beach - 10 km",
        "Goa Airport - 45 km"
      ]
    },
    4: {
      id: 4,
      name: "The Himalayan Village Resort",
      location: "Manali, Himachal Pradesh",
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1464822759844-d150baec4328?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      originalPrice: 15000,
      discountedPrice: 10500,
      rating: 4.6,
      reviews: 634,
      category: "mountain",
      type: "Mountain Resort",
      discount: 30,
      overview: "Nestled in the majestic Himalayas, The Himalayan Village Resort offers a perfect blend of adventure and tranquility. Experience breathtaking mountain views, adventure activities, and warm Himachali hospitality in this eco-friendly mountain retreat.",
      amenities: [
        { name: "Multi-cuisine Restaurant", included: true },
        { name: "Free WiFi", included: true },
        { name: "Free Parking", included: true },
        { name: "Adventure Activities", included: true },
        { name: "Bonfire Area", included: true },
        { name: "Trekking Guides", included: true },
        { name: "Travel Assistance", included: true },
        { name: "Outdoor Gym", included: false }
      ],
      highlights: [
        "Panoramic mountain views",
        "Adventure activity center",
        "Local Himachali cuisine",
        "Bonfire nights with music",
        "Guided trekking tours",
        "River rafting nearby",
        "Apple orchard visits",
        "Cultural village tours"
      ],
      roomTypes: [
        {
          name: "Standard Mountain View",
          size: "35 sqm",
          occupancy: "2 adults",
          price: 8500,
          features: ["Mountain view", "Wooden interiors", "Balcony"]
        },
        {
          name: "Deluxe Valley View",
          size: "45 sqm",
          occupancy: "2 adults + 2 children",
          price: 12000,
          features: ["Valley view", "Fireplace", "Sitting area"]
        },
        {
          name: "Family Suite",
          size: "65 sqm",
          occupancy: "6 adults",
          price: 18000,
          features: ["Two bedrooms", "Living area", "Panoramic views"]
        }
      ],
      facilities: [
        "Multi-cuisine restaurant with local specialties",
        "Adventure sports center",
        "Bonfire area with seating",
        "Trekking and hiking guides",
        "Mountain biking trails",
        "Indoor games room",
        "Library and reading area",
        "Souvenir shop"
      ],
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Free cancellation up to 72 hours before arrival",
      pets: "Pets allowed with restrictions",
      smoking: "Smoking allowed in designated areas",
      address: "Village Kanyal, Manali, Himachal Pradesh 175131",
      nearby: [
        "Hadimba Temple - 8 km",
        "Solang Valley - 12 km",
        "Rohtang Pass - 25 km",
        "Manali Bus Stand - 10 km"
      ]
    }
  }

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        setLoading(true)
        await new Promise(resolve => setTimeout(resolve, 500))
        
        const hotelId = parseInt(id)
        const selectedHotel = mockHotels[hotelId]
        
        if (selectedHotel) {
          setHotelData(selectedHotel)
        } else {
          setHotelData(null)
        }
        
        setLoading(false)
      } catch (error) {
        console.error('Error fetching hotel:', error)
        setLoading(false)
      }
    }

    if (id) {
      fetchHotel()
    }
  }, [id])

  const nextImage = () => {
    if (hotelData) {
      setActiveImageIndex((prev) => 
        prev === hotelData.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (hotelData) {
      setActiveImageIndex((prev) => 
        prev === 0 ? hotelData.images.length - 1 : prev - 1
      )
    }
  }

  const getAmenityIcon = (amenityName) => {
    const iconMap = {
      'Pool': Waves,
      'Spa': Star,
      'Restaurant': Utensils,
      'WiFi': Wifi,
      'Parking': Car,
      'Gym': Dumbbell,
      'Beach Access': Waves,
      'Water Sports': Waves,
      'Fitness Center': Dumbbell,
      'Room Service': Coffee,
      'Concierge Service': Shield,
      'Kids Club': Users,
      'Multiple Restaurants': Utensils,
      'Free WiFi': Wifi,
      'Free Parking': Car,
      'Multiple Pools': Waves,
      'Private Beach': Waves,
      'Adventure Activities': Activity,
      'Bonfire Area': Coffee,
      'Trekking Guides': Star,
      'Travel Assistance': Shield
    }
    return iconMap[amenityName] || Star
  }

  const totalPrice = hotelData && checkInDate && checkOutDate ? 
    hotelData.discountedPrice * rooms * Math.ceil((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24)) : 0

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading hotel details...</p>
        </div>
      </div>
    )
  }

  if (!hotelData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Hotel Not Found</h1>
          <p className="text-gray-600 mb-4">The hotel you're looking for doesn't exist.</p>
          <Link href="/hotels">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">Back to Hotels</button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Button */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/hotels" className="flex items-center text-gray-600 hover:text-blue-600">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Hotels
            </Link>
            <div className="flex items-center space-x-4">
              <button onClick={() => setIsLiked(!isLiked)} className="p-2 rounded-full hover:bg-gray-100">
                <Heart className={`w-6 h-6 ${isLiked ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Share className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img 
                  src={hotelData.images[activeImageIndex]} 
                  alt={hotelData.name}
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              
              {/* Thumbnail Strip */}
              <div className="flex space-x-2 mt-4">
                {hotelData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`flex-1 aspect-video rounded-lg overflow-hidden border-2 ${
                      index === activeImageIndex ? 'border-blue-600' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Hotel Info */}
            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{hotelData.name}</h1>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{hotelData.location}</span>
                    <Bed className="w-5 h-5 ml-4 mr-2" />
                    <span>{hotelData.type}</span>
                  </div>
                </div>
                {hotelData.discount && (
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {hotelData.discount}% OFF
                  </div>
                )}
              </div>

              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-semibold text-lg">{hotelData.rating}</span>
                  <span className="text-gray-500 ml-2">({hotelData.reviews} reviews)</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">{hotelData.overview}</p>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hotel Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {hotelData.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Room Types */}
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Available Room Types</h3>
              <div className="space-y-4">
                {hotelData.roomTypes.map((room, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{room.name}</h4>
                        <p className="text-sm text-gray-600">{room.size} • Up to {room.occupancy}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-blue-600">
                          ₹{room.price.toLocaleString('en-IN')}
                        </span>
                        <p className="text-sm text-gray-500">per night</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {room.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Amenities & Services</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {hotelData.amenities.map((amenity, index) => {
                  const IconComponent = getAmenityIcon(amenity.name)
                  return (
                    <div key={index} className={`flex items-center p-3 rounded-lg border ${
                      amenity.included ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                    }`}>
                      <IconComponent className={`w-5 h-5 mr-3 ${
                        amenity.included ? 'text-green-600' : 'text-gray-400'
                      }`} />
                      <span className={`text-sm ${
                        amenity.included ? 'text-green-800' : 'text-gray-600'
                      }`}>
                        {amenity.name}
                      </span>
                      {amenity.included && <Check className="w-4 h-4 text-green-600 ml-auto" />}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Facilities */}
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Facilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {hotelData.facilities.map((facility, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Policies & Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hotel Policies</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <span className="font-medium">Check-in:</span> {hotelData.checkIn}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <span className="font-medium">Check-out:</span> {hotelData.checkOut}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p><strong>Cancellation:</strong> {hotelData.cancellation}</p>
                    <p><strong>Pets:</strong> {hotelData.pets}</p>
                    <p><strong>Smoking:</strong> {hotelData.smoking}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Location</h3>
                <p className="text-gray-700 mb-4">{hotelData.address}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Nearby Attractions:</h4>
                  {hotelData.nearby.map((place, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{place}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    {hotelData.originalPrice && (
                      <span className="text-gray-400 line-through text-lg">
                        ₹{hotelData.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                    <span className="text-3xl font-bold text-blue-600">
                      ₹{hotelData.discountedPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <span className="text-gray-500">per night</span>
                </div>

                {/* Date Selection */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Check-in
                    </label>
                    <input
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Check-out
                    </label>
                    <input
                      type="date"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      min={checkInDate || new Date().toISOString().split('T')[0]}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                {/* Guests & Rooms Selection */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Guests
                    </label>
                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <Users className="w-5 h-5 text-gray-400" />
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => setGuests(Math.max(1, guests - 1))}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                        >
                          -
                        </button>
                        <span className="font-semibold">{guests}</span>
                        <button
                          onClick={() => setGuests(guests + 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Rooms
                    </label>
                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <Bed className="w-5 h-5 text-gray-400" />
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => setRooms(Math.max(1, rooms - 1))}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                        >
                          -
                        </button>
                        <span className="font-semibold">{rooms}</span>
                        <button
                          onClick={() => setRooms(rooms + 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Total Price */}
                {totalPrice > 0 && (
                  <div className="border-t border-gray-200 pt-4 mb-6">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total Price</span>
                      <span className="text-blue-600">₹{totalPrice.toLocaleString('en-IN')}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {Math.ceil((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24))} nights • {rooms} room(s)
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all">
                    Book Now
                  </button>
                  <button className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-3 px-6 rounded-lg font-semibold transition-all">
                    Add to Wishlist
                  </button>
                </div>

                {/* Contact Info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Need Help?</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">+91 98765 43210</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">help@hotelcompany.com</span>
                    </div>
                    <button className="flex items-center text-blue-600 hover:text-blue-700 text-sm">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Live Chat Support
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Info Card */}
              <div className="bg-blue-50 rounded-2xl p-6 mt-6">
                <h4 className="font-semibold text-blue-900 mb-3">Why Choose This Hotel?</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-blue-800">
                    <Check className="w-4 h-4 text-blue-600 mr-2" />
                    Instant confirmation
                  </div>
                  <div className="flex items-center text-sm text-blue-800">
                    <Check className="w-4 h-4 text-blue-600 mr-2" />
                    Free cancellation available
                  </div>
                  <div className="flex items-center text-sm text-blue-800">
                    <Check className="w-4 h-4 text-blue-600 mr-2" />
                    24/7 customer support
                  </div>
                  <div className="flex items-center text-sm text-blue-800">
                    <Check className="w-4 h-4 text-blue-600 mr-2" />
                    Best price guarantee
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}