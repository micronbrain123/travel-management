"use client"

import { useState } from 'react'
import { MapPin, Users, Award, Globe, Heart, Star, Shield, Clock, Plane, Camera, Mountain, Waves } from 'lucide-react'

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('story')

  const stats = [
    { icon: Users, number: '50,000+', label: 'Happy Travelers', color: 'text-blue-600' },
    { icon: Globe, number: '500+', label: 'Destinations', color: 'text-green-600' },
    { icon: Award, number: '15+', label: 'Years Experience', color: 'text-purple-600' },
    { icon: Star, number: '4.9', label: 'Average Rating', color: 'text-yellow-600' }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Passion for Travel',
      description: 'We are passionate travelers ourselves, understanding what makes a journey truly memorable and transformative.',
      color: 'bg-red-50 text-red-600'
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'Your safety and trust are paramount. We ensure all our partners meet the highest standards of quality and reliability.',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Globe,
      title: 'Authentic Experiences',
      description: 'We curate authentic local experiences that connect you with the true essence of each destination you visit.',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Users,
      title: 'Personalized Service',
      description: 'Every traveler is unique. We customize our services to match your preferences, budget, and travel style.',
      color: 'bg-purple-50 text-purple-600'
    }
  ]

  const team = [
    {
      name: 'Rajesh Kumar',
      position: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'A passionate traveler with 20+ years in the tourism industry, dedicated to making travel accessible to everyone.',
      expertise: 'Adventure Travel, Cultural Tourism'
    },
    {
      name: 'Priya Sharma',
      position: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Expert in hospitality management with a keen eye for detail, ensuring every trip exceeds expectations.',
      expertise: 'Luxury Travel, Customer Experience'
    },
    {
      name: 'Arjun Patel',
      position: 'Travel Experience Designer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Creative mind behind our unique itineraries, specializing in off-the-beaten-path discoveries.',
      expertise: 'Eco-Tourism, Photography Tours'
    },
    {
      name: 'Meera Singh',
      position: 'Customer Success Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Dedicated to ensuring every customer has a seamless and memorable travel experience from start to finish.',
      expertise: 'Customer Relations, Travel Support'
    }
  ]

  const milestones = [
    {
      year: '2009',
      title: 'Company Founded',
      description: 'Started with a dream to make travel accessible and memorable for everyone.',
      icon: Plane
    },
    {
      year: '2012',
      title: 'First 1000 Customers',
      description: 'Reached our first milestone of serving 1000 happy travelers across India.',
      icon: Users
    },
    {
      year: '2015',
      title: 'Digital Transformation',
      description: 'Launched our digital platform making booking and planning easier than ever.',
      icon: Globe
    },
    {
      year: '2018',
      title: 'Award Recognition',
      description: 'Received "Best Travel Company" award from India Tourism Board.',
      icon: Award
    },
    {
      year: '2020',
      title: 'Safe Travel Initiative',
      description: 'Pioneered COVID-safe travel protocols ensuring traveler safety and confidence.',
      icon: Shield
    },
    {
      year: '2024',
      title: '50,000+ Happy Travelers',
      description: 'Celebrated serving over 50,000 travelers with unforgettable experiences.',
      icon: Heart
    }
  ]

  const tabs = [
    { key: 'story', label: 'Our Story', icon: Heart },
    { key: 'mission', label: 'Mission & Vision', icon: Globe },
    { key: 'team', label: 'Meet Our Team', icon: Users },
    { key: 'milestones', label: 'Our Journey', icon: Clock }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-blue-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
          }}
        ></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Crafting Dreams Into
              <span className="text-yellow-400"> Journeys</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              For over 15 years, we've been turning wanderlust into unforgettable adventures, 
              one destination at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center px-6 py-4 font-medium transition-all ${
                  activeTab === tab.key
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Our Story */}
          {activeTab === 'story' && (
            <div className="space-y-12 animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Every great journey begins with a single step. Here's how ours started.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Where It All Began</h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      It all started in 2009 when our founder, Rajesh Kumar, realized that travel in India was 
                      often complicated, overpriced, and impersonal. Having traveled extensively across the country, 
                      he witnessed the incredible diversity and beauty that India offers, but also saw how difficult 
                      it was for travelers to experience it authentically.
                    </p>
                    <p>
                      With a background in hospitality and a passion for showcasing India's rich heritage, 
                      Rajesh founded our company with a simple mission: to make travel accessible, affordable, 
                      and unforgettable for everyone.
                    </p>
                    <p>
                      What started as a small local travel agency has now grown into one of India's most trusted 
                      travel companies, serving thousands of travelers every year while maintaining our core values 
                      of authenticity, quality, and personalized service.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Our founding story"
                    className="rounded-lg shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>
          )}

          {/* Mission & Vision */}
          {activeTab === 'mission' && (
            <div className="space-y-12 animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mission & Vision</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our guiding principles that drive everything we do.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="bg-blue-50 p-8 rounded-xl">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
                      <Globe className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    To provide exceptional travel experiences that connect people with the diverse cultures, 
                    landscapes, and heritage of India, while promoting sustainable and responsible tourism 
                    that benefits local communities.
                  </p>
                </div>

                <div className="bg-purple-50 p-8 rounded-xl">
                  <div className="flex items-center mb-6">
                    <div className="bg-purple-600 text-white p-3 rounded-full mr-4">
                      <Mountain className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    To become the most trusted and preferred travel companion for explorers worldwide, 
                    known for creating transformative journeys that inspire, educate, and create 
                    lasting memories while preserving the beauty of our destinations.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${value.color} mb-4`}>
                      <value.icon className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Team */}
          {activeTab === 'team' && (
            <div className="space-y-12 animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  The passionate individuals behind your unforgettable travel experiences.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                      <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">{member.bio}</p>
                      <div className="border-t pt-3">
                        <p className="text-xs text-gray-500 font-medium">Expertise:</p>
                        <p className="text-xs text-gray-700">{member.expertise}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Milestones */}
          {activeTab === 'milestones' && (
            <div className="space-y-12 animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Key milestones that shaped our company and define our commitment to excellence.
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                          <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h4>
                          <p className="text-gray-600">{milestone.description}</p>
                        </div>
                      </div>
                      
                      <div className="relative flex items-center justify-center">
                        <div className="bg-white border-4 border-blue-500 rounded-full p-3 shadow-lg">
                          <milestone.icon className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                      
                      <div className="w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let us help you create memories that will last a lifetime. Your adventure begins with a single click.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explore Packages
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  )
}