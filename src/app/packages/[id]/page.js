'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { 
  Star, MapPin, Clock, Users, Calendar, Phone, Mail, ArrowLeft, 
  Check, X, Camera, Wifi, Car, Utensils, Bed, Shield, Heart,
  ChevronLeft, ChevronRight, Share, MessageCircle
} from 'lucide-react'

export default function PackageDetail() {
  const params = useParams()
  const { id } = params
  const [packageData, setPackageData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [selectedDate, setSelectedDate] = useState('')
  const [travelers, setTravelers] = useState(2)
  const [isLiked, setIsLiked] = useState(false)

  // Complete mock data for all packages
  const mockPackages = {
    1: {
      id: 1,
      title: "Golden Triangle Tour",
      destination: "Delhi - Agra - Jaipur",
      images: [
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1598541582853-4ec8d4b25269?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1588939725896-e6b4f3c8c0ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      originalPrice: 25000,
      discountedPrice: 18500,
      duration: "6 Days 5 Nights",
      rating: 4.8,
      reviews: 245,
      category: "heritage",
      discount: 26,
      overview: "Experience the magnificence of India's Golden Triangle with our comprehensive 6-day tour covering Delhi, Agra, and Jaipur. This journey takes you through centuries of history, architectural marvels, and vibrant culture.",
      highlights: [
        "Visit the iconic Taj Mahal at sunrise",
        "Explore the magnificent Red Fort in Delhi",
        "Experience the grandeur of Amber Palace",
        "Enjoy traditional cultural shows",
        "Shop in vibrant local bazaars",
        "Professional English-speaking guide",
        "Comfortable AC transportation",
        "Heritage walk in Old Delhi"
      ],
      inclusions: [
        "5 nights accommodation in 3-star hotels",
        "Daily breakfast and select dinners",
        "AC transportation throughout the tour",
        "Professional tour guide",
        "All monument entry fees",
        "Airport transfers",
        "Cultural show tickets",
        "GST and service charges"
      ],
      exclusions: [
        "International/domestic flight tickets",
        "Lunch on most days",
        "Personal expenses and tips",
        "Travel insurance",
        "Camera fees at monuments",
        "Optional activities not mentioned"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Delhi",
          description: "Arrive in Delhi and check into your hotel. Evening at leisure to explore local markets.",
          activities: ["Airport pickup", "Hotel check-in", "Welcome dinner", "Briefing session"]
        },
        {
          day: 2,
          title: "Delhi Sightseeing",
          description: "Full day exploring Old and New Delhi including Red Fort, India Gate, and Qutub Minar.",
          activities: ["Red Fort visit", "Jama Masjid", "India Gate", "Qutub Minar", "Government buildings drive"]
        },
        {
          day: 3,
          title: "Delhi to Agra",
          description: "Drive to Agra (3-4 hours). Visit Agra Fort and local handicraft centers.",
          activities: ["Morning departure", "Agra Fort", "Local handicrafts", "Hotel check-in"]
        },
        {
          day: 4,
          title: "Taj Mahal & Agra to Jaipur",
          description: "Early morning Taj Mahal visit, then drive to Jaipur via Fatehpur Sikri.",
          activities: ["Sunrise at Taj Mahal", "Fatehpur Sikri", "Drive to Jaipur", "Evening arrival"]
        },
        {
          day: 5,
          title: "Jaipur Exploration",
          description: "Full day in the Pink City visiting Amber Fort, City Palace, and Hawa Mahal.",
          activities: ["Amber Fort", "City Palace", "Hawa Mahal", "Local bazaars", "Cultural show"]
        },
        {
          day: 6,
          title: "Departure",
          description: "Check out and transfer to airport/railway station for your onward journey.",
          activities: ["Hotel checkout", "Last-minute shopping", "Airport transfer", "Departure"]
        }
      ],
      amenities: [
        { icon: Car, name: "AC Transportation", included: true },
        { icon: Bed, name: "3-Star Hotels", included: true },
        { icon: Utensils, name: "Meals Included", included: true },
        { icon: Wifi, name: "Free WiFi", included: true },
        { icon: Shield, name: "Travel Insurance", included: false },
        { icon: Camera, name: "Photography", included: false }
      ]
    },
    2: {
      id: 2,
      title: "Kerala Backwaters Experience",
      destination: "Cochin - Munnar - Alleppey",
      images: [
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      originalPrice: 32000,
      discountedPrice: 24000,
      duration: "7 Days 6 Nights",
      rating: 4.9,
      reviews: 189,
      category: "nature",
      discount: 25,
      overview: "Immerse yourself in the serene beauty of Kerala's backwaters, lush tea plantations, and pristine beaches. This 7-day journey offers a perfect blend of nature, culture, and relaxation in God's Own Country.",
      highlights: [
        "Luxury houseboat stay in Alleppey",
        "Tea plantation tours in Munnar",
        "Traditional Ayurvedic spa treatments",
        "Kathakali cultural performance",
        "Spice plantation visits",
        "Elephant sanctuary experience",
        "Chinese fishing nets at Fort Kochi",
        "Backwater village walks"
      ],
      inclusions: [
        "6 nights accommodation (hotels + houseboat)",
        "All meals during houseboat stay",
        "Daily breakfast at hotels",
        "AC transportation",
        "English-speaking guide",
        "Boat rides and transfers",
        "Cultural show tickets",
        "Airport transfers"
      ],
      exclusions: [
        "Flight tickets",
        "Lunch at hotels (except houseboat)",
        "Ayurvedic treatments",
        "Personal expenses",
        "Tips and gratuities",
        "Travel insurance"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Cochin",
          description: "Arrive in Cochin and explore Fort Kochi area with Chinese fishing nets.",
          activities: ["Airport pickup", "Fort Kochi tour", "Chinese fishing nets", "Hotel check-in"]
        },
        {
          day: 2,
          title: "Cochin to Munnar",
          description: "Drive to Munnar through scenic mountain roads and spice plantations.",
          activities: ["Morning departure", "Spice plantation visit", "Scenic drive", "Evening arrival"]
        },
        {
          day: 3,
          title: "Munnar Exploration",
          description: "Visit tea museums, Echo Point, and enjoy the hill station atmosphere.",
          activities: ["Tea plantation tour", "Tea museum", "Echo Point", "Local markets"]
        },
        {
          day: 4,
          title: "Munnar to Alleppey",
          description: "Travel to Alleppey and board your luxury houseboat for backwater cruise.",
          activities: ["Check-out", "Drive to Alleppey", "Houseboat check-in", "Backwater cruise"]
        },
        {
          day: 5,
          title: "Backwater Experience",
          description: "Full day enjoying houseboat life, village visits, and backwater serenity.",
          activities: ["Village walks", "Bird watching", "Fishing", "Sunset cruise"]
        },
        {
          day: 6,
          title: "Alleppey to Cochin",
          description: "Return to Cochin for Kathakali show and last-minute shopping.",
          activities: ["Houseboat checkout", "Return to Cochin", "Kathakali show", "Shopping"]
        },
        {
          day: 7,
          title: "Departure",
          description: "Transfer to airport for departure with beautiful memories.",
          activities: ["Hotel checkout", "Last-minute sightseeing", "Airport transfer", "Departure"]
        }
      ],
      amenities: [
        { icon: Car, name: "AC Transportation", included: true },
        { icon: Bed, name: "Houseboat & Hotels", included: true },
        { icon: Utensils, name: "Most Meals Included", included: true },
        { icon: Wifi, name: "Free WiFi", included: true },
        { icon: Shield, name: "Travel Insurance", included: false },
        { icon: Camera, name: "Photography", included: true }
      ]
    },
    3: {
      id: 3,
      title: "Goa Beach Paradise",
      destination: "North & South Goa",
      images: [
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1559628376-f4aea58421b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1605538883669-825200433431?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1538623013607-6efcc43b7c1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      originalPrice: 22000,
      discountedPrice: 16500,
      duration: "5 Days 4 Nights",
      rating: 4.7,
      reviews: 312,
      category: "beach",
      discount: 25,
      overview: "Discover the tropical paradise of Goa with its pristine beaches, Portuguese architecture, vibrant nightlife, and delicious seafood. Perfect for both relaxation and adventure.",
      highlights: [
        "Stay at beachfront resort",
        "Water sports activities",
        "Sunset cruise with dinner",
        "Portuguese heritage tour",
        "Spice plantation visit",
        "Beach shacks and nightlife",
        "Dudhsagar waterfall trip",
        "Local market exploration"
      ],
      inclusions: [
        "4 nights beach resort accommodation",
        "Daily breakfast and dinner",
        "Airport transfers",
        "Sightseeing tours",
        "Water sports activities",
        "Sunset cruise",
        "Professional guide",
        "All taxes"
      ],
      exclusions: [
        "Flight tickets",
        "Lunch",
        "Alcoholic beverages",
        "Personal expenses",
        "Optional activities",
        "Tips"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Goa",
          description: "Arrive and check into beachfront resort. Evening at leisure on the beach.",
          activities: ["Airport pickup", "Resort check-in", "Beach walk", "Welcome dinner"]
        },
        {
          day: 2,
          title: "North Goa Tour",
          description: "Explore Calangute, Baga, and Anjuna beaches. Visit Fort Aguada.",
          activities: ["Calangute Beach", "Baga Beach", "Fort Aguada", "Anjuna Market"]
        },
        {
          day: 3,
          title: "Water Sports & Adventure",
          description: "Enjoy various water sports and visit spice plantation.",
          activities: ["Parasailing", "Jet skiing", "Banana boat", "Spice plantation tour"]
        },
        {
          day: 4,
          title: "South Goa & Sunset Cruise",
          description: "Explore South Goa beaches and enjoy sunset cruise with dinner.",
          activities: ["Colva Beach", "Old Goa churches", "Sunset cruise", "Seafood dinner"]
        },
        {
          day: 5,
          title: "Departure",
          description: "Last-minute shopping and departure.",
          activities: ["Beach relaxation", "Souvenir shopping", "Airport transfer", "Departure"]
        }
      ],
      amenities: [
        { icon: Car, name: "Airport Transfers", included: true },
        { icon: Bed, name: "Beach Resort", included: true },
        { icon: Utensils, name: "Breakfast & Dinner", included: true },
        { icon: Wifi, name: "Free WiFi", included: true },
        { icon: Shield, name: "Water Sports", included: true },
        { icon: Camera, name: "Photography", included: true }
      ]
    },
    4: {
      id: 4,
      title: "Himachal Adventure Trek",
      destination: "Manali - Kasol - Tosh",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1464822759844-d150baec4328?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      originalPrice: 28000,
      discountedPrice: 21000,
      duration: "8 Days 7 Nights",
      rating: 4.6,
      reviews: 156,
      category: "adventure",
      discount: 25,
      overview: "Embark on an thrilling adventure through the majestic Himalayas. Experience trekking, river rafting, camping under stars, and breathtaking mountain views in Himachal Pradesh.",
      highlights: [
        "Multi-day trekking expedition",
        "White water river rafting",
        "Camping under the stars",
        "Spectacular mountain views",
        "Local village experiences",
        "Photography opportunities",
        "Bonfire and music nights",
        "Professional trekking guide"
      ],
      inclusions: [
        "7 nights accommodation (hotels + camping)",
        "All meals during trek",
        "Professional trekking guide",
        "Trekking equipment and gear",
        "River rafting activity",
        "Transportation",
        "First aid kit",
        "Camping setup"
      ],
      exclusions: [
        "Personal trekking gear",
        "Travel insurance",
        "Personal expenses",
        "Tips for guide/porter",
        "Emergency evacuation",
        "Alcoholic beverages"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Manali",
          description: "Arrive in Manali and acclimatize to mountain altitude.",
          activities: ["Arrival", "Hotel check-in", "Local market visit", "Briefing session"]
        },
        {
          day: 2,
          title: "Manali Local Sightseeing",
          description: "Explore Manali attractions and prepare for trek.",
          activities: ["Hadimba Temple", "Manu Temple", "Old Manali", "Equipment check"]
        },
        {
          day: 3,
          title: "Manali to Base Camp",
          description: "Drive to trek base camp and start trekking preparation.",
          activities: ["Drive to base camp", "Camping setup", "Short acclimatization walk", "Dinner"]
        },
        {
          day: 4,
          title: "Trek Day 1",
          description: "Begin trekking through beautiful valleys and forests.",
          activities: ["Morning trek start", "Forest walking", "River crossing", "Camp setup"]
        },
        {
          day: 5,
          title: "Trek Day 2 - Kasol",
          description: "Trek to Kasol valley with stunning mountain views.",
          activities: ["High altitude trekking", "Panoramic views", "Reach Kasol", "Valley exploration"]
        },
        {
          day: 6,
          title: "Kasol to Tosh",
          description: "Continue trek to Tosh village and experience local culture.",
          activities: ["Village trekking", "Local culture", "Mountain photography", "Camping"]
        },
        {
          day: 7,
          title: "River Rafting & Return",
          description: "River rafting adventure and return to Manali.",
          activities: ["River rafting", "Adventure sports", "Return journey", "Celebration dinner"]
        },
        {
          day: 8,
          title: "Departure",
          description: "Last-minute shopping and departure from Manali.",
          activities: ["Hotel checkout", "Souvenir shopping", "Departure", "Journey back"]
        }
      ],
      amenities: [
        { icon: Car, name: "Transportation", included: true },
        { icon: Bed, name: "Hotels & Camping", included: true },
        { icon: Utensils, name: "All Meals", included: true },
        { icon: Shield, name: "Trekking Gear", included: true },
        { icon: Camera, name: "Photography Guide", included: true },
        { icon: Wifi, name: "WiFi (Limited)", included: false }
      ]
    }
  }

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        setLoading(true)
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500))
        
        const packageId = parseInt(id)
        const selectedPackage = mockPackages[packageId]
        
        if (selectedPackage) {
          setPackageData(selectedPackage)
        } else {
          setPackageData(null)
        }
        
        setLoading(false)
      } catch (error) {
        console.error('Error fetching package:', error)
        setLoading(false)
      }
    }

    if (id) {
      fetchPackage()
    }
  }, [id])

  const nextImage = () => {
    if (packageData) {
      setActiveImageIndex((prev) => 
        prev === packageData.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (packageData) {
      setActiveImageIndex((prev) => 
        prev === 0 ? packageData.images.length - 1 : prev - 1
      )
    }
  }

  const totalPrice = packageData ? packageData.discountedPrice * travelers : 0

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading package details...</p>
        </div>
      </div>
    )
  }

  if (!packageData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Package Not Found</h1>
          <p className="text-gray-600 mb-4">The package you're looking for doesn't exist.</p>
          <Link href="/packages">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">Back to Packages</button>
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
            <Link href="/packages" className="flex items-center text-gray-600 hover:text-blue-600">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Packages
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
                  src={packageData.images[activeImageIndex]} 
                  alt={packageData.title}
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
                {packageData.images.map((image, index) => (
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

            {/* Package Info */}
            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{packageData.title}</h1>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{packageData.destination}</span>
                    <Clock className="w-5 h-5 ml-4 mr-2" />
                    <span>{packageData.duration}</span>
                  </div>
                </div>
                {packageData.discount && (
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {packageData.discount}% OFF
                  </div>
                )}
              </div>

              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-semibold text-lg">{packageData.rating}</span>
                  <span className="text-gray-500 ml-2">({packageData.reviews} reviews)</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">{packageData.overview}</p>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tour Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {packageData.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Detailed Itinerary</h3>
              <div className="space-y-6">
                {packageData.itinerary.map((day, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">Day {day.day}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{day.title}</h4>
                      <p className="text-gray-600 mb-3">{day.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {day.activities.map((activity, actIndex) => (
                          <span key={actIndex} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
                <div className="space-y-3">
                  {packageData.inclusions.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What's Not Included</h3>
                <div className="space-y-3">
                  {packageData.exclusions.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Amenities & Services</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {packageData.amenities.map((amenity, index) => (
                  <div key={index} className={`flex items-center p-3 rounded-lg border ${
                    amenity.included ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                  }`}>
                    <amenity.icon className={`w-5 h-5 mr-3 ${
                      amenity.included ? 'text-green-600' : 'text-gray-400'
                    }`} />
                    <span className={`text-sm ${
                      amenity.included ? 'text-green-800' : 'text-gray-600'
                    }`}>
                      {amenity.name}
                    </span>
                    {amenity.included && <Check className="w-4 h-4 text-green-600 ml-auto" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    {packageData.originalPrice && (
                      <span className="text-gray-400 line-through text-lg">
                        ₹{packageData.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                    <span className="text-3xl font-bold text-blue-600">
                      ₹{packageData.discountedPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <span className="text-gray-500">per person</span>
                </div>

                {/* Date Selection */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                {/* Travelers Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Number of Travelers
                  </label>
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <Users className="w-5 h-5 text-gray-400" />
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => setTravelers(Math.max(1, travelers - 1))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                      >
                        -
                      </button>
                      <span className="font-semibold">{travelers}</span>
                      <button
                        onClick={() => setTravelers(travelers + 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Total Price */}
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total Price</span>
                    <span className="text-blue-600">₹{totalPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">For {travelers} travelers</p>
                </div>

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
                      <span className="text-sm text-gray-600">help@travelcompany.com</span>
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
                <h4 className="font-semibold text-blue-900 mb-3">Why Choose This Package?</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-blue-800">
                    <Check className="w-4 h-4 text-blue-600 mr-2" />
                    Instant confirmation
                  </div>
                  <div className="flex items-center text-sm text-blue-800">
                    <Check className="w-4 h-4 text-blue-600 mr-2" />
                    Free cancellation up to 24 hours
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