'use client'
import { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      review: "Our Golden Triangle tour was absolutely magical! From the majestic Taj Mahal to the vibrant markets of Jaipur, every moment was perfectly planned. The hotels were luxurious and the guide was incredibly knowledgeable about Indian history.",
      packageBooked: "Golden Triangle Tour",
      travelDate: "March 2024",
      verified: true
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      review: "Kerala backwaters exceeded all our expectations! The houseboat experience was serene and the Ayurvedic spa treatments were rejuvenating. TravelBook's attention to detail and customer service is outstanding.",
      packageBooked: "Kerala Backwaters Experience",
      travelDate: "February 2024",
      verified: true
    },
    {
      id: 3,
      name: "Sneha Patel",
      location: "Ahmedabad, Gujarat",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      review: "Goa was the perfect beach getaway! The resort was beautiful, water sports were thrilling, and the Portuguese heritage tour was fascinating. Great value for money and seamless booking experience.",
      packageBooked: "Goa Beach Paradise",
      travelDate: "January 2024",
      verified: true
    },
    {
      id: 4,
      name: "Amit Singh",
      location: "Bangalore, Karnataka",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      review: "The Himachal adventure trek was life-changing! Professional guides, quality equipment, and breathtaking mountain views. The camping under stars in Kasol will remain etched in my memory forever.",
      packageBooked: "Himachal Adventure Trek",
      travelDate: "April 2024",
      verified: true
    },
    {
      id: 5,
      name: "Meera Reddy",
      location: "Hyderabad, Telangana",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 4,
      review: "Rajasthan's royal heritage tour was absolutely spectacular! The palace hotels, desert safari, and cultural performances were incredible. Highly recommend TravelBook for authentic Indian experiences.",
      packageBooked: "Rajasthan Royal Heritage",
      travelDate: "December 2023",
      verified: true
    },
    {
      id: 6,
      name: "Vikram Joshi",
      location: "Pune, Maharashtra",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      review: "Kashmir valley tour was like a dream come true! Dal Lake shikara rides, snow-capped mountains, and the warmth of Kashmiri hospitality. Everything was perfectly organized by TravelBook team.",
      packageBooked: "Kashmir Valley Tour",
      travelDate: "May 2024",
      verified: true
    }
  ]

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-blue-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover why thousands of travelers trust TravelBook for their perfect Indian getaway. 
            Read genuine reviews from our satisfied customers.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12 text-center">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <Quote className="w-12 h-12 text-primary-400 opacity-50" />
              </div>

              {/* Review Text */}
              <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                "{testimonials[currentIndex].review}"
              </blockquote>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {renderStars(testimonials[currentIndex].rating)}
              </div>

              {/* Customer Info */}
              <div className="flex items-center justify-center space-x-6">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-primary-100"
                />
                <div className="text-left">
                  <h4 className="font-bold text-gray-900 text-lg flex items-center">
                    {testimonials[currentIndex].name}
                    {testimonials[currentIndex].verified && (
                      <div className="ml-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                        Verified
                      </div>
                    )}
                  </h4>
                  <div className="flex items-center text-gray-600 text-sm mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {testimonials[currentIndex].location}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mt-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    {testimonials[currentIndex].travelDate}
                  </div>
                </div>
              </div>

              {/* Package Info */}
              <div className="mt-6 bg-primary-50 rounded-xl p-4 inline-block">
                <span className="text-primary-700 font-semibold text-sm">
                  Package: {testimonials[currentIndex].packageBooked}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all text-gray-600 hover:text-primary-600"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all text-gray-600 hover:text-primary-600"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-primary-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-primary-600 mb-2">50K+</div>
            <div className="text-gray-600">Happy Travelers</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-primary-600 mb-2">4.8</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-gray-600">Destinations</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-primary-600 mb-2">99%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Create Your Own Story?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied travelers who have experienced the magic of India with TravelBook. 
            Your perfect journey awaits!
          </p>
          <button className="bg-primary-600 hover:bg-primary-700 text-gray-700 px-8 py-3 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
            Start Planning Your Trip
          </button>
        </div>
      </div>
    </section>
  )
}