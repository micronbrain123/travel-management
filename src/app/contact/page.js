"use client"

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Headphones, Globe, Facebook, Instagram, Twitter, Linkedin, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Office',
      details: ['Connaught Place, Block A-36', 'New Delhi - 110001', 'India'],
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+91 98765 43210', '+91 11 4567 8900', 'Toll Free: 1800-123-TRAVEL'],
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@dreamjourneys.in', 'bookings@dreamjourneys.in', 'support@dreamjourneys.in'],
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Sat: 9:00 AM - 8:00 PM', 'Sunday: 10:00 AM - 6:00 PM', 'Emergency: 24/7 Support'],
      color: 'bg-yellow-50 text-yellow-600'
    }
  ]

  const offices = [
    {
      city: 'Mumbai',
      address: 'Bandra Kurla Complex, Mumbai - 400051',
      phone: '+91 22 6789 1234',
      manager: 'Amit Verma'
    },
    {
      city: 'Bangalore',
      address: 'MG Road, Bangalore - 560001',
      phone: '+91 80 9876 5432',
      manager: 'Deepika Reddy'
    },
    {
      city: 'Jaipur',
      address: 'Pink City Plaza, Jaipur - 302001',
      phone: '+91 141 555 7890',
      manager: 'Vikram Singh'
    },
    {
      city: 'Kerala (Kochi)',
      address: 'Marine Drive, Kochi - 682031',
      phone: '+91 484 333 2211',
      manager: 'Sanya Nair'
    }
  ]

  const socialMedia = [
    { icon: Facebook, name: 'Facebook', handle: '@DreamJourneysIndia', color: 'text-blue-600' },
    { icon: Instagram, name: 'Instagram', handle: '@dreamjourneys_in', color: 'text-pink-600' },
    { icon: Twitter, name: 'Twitter', handle: '@DreamJourneysIN', color: 'text-blue-400' },
    { icon: Linkedin, name: 'LinkedIn', handle: '/company/dream-journeys', color: 'text-blue-700' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-blue-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
          }}
        ></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let's Plan Your
              <span className="text-yellow-400"> Dream Journey</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Ready to explore incredible India? Get in touch with our travel experts today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50 -mt-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${info.color} mb-4`}>
                  <info.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                <p className="text-gray-600">
                  Tell us about your travel plans and we'll get back to you within 24 hours with a customized itinerary.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">Your message has been sent successfully. We'll get back to you soon!</p>
                </div>
              ) : (
                <div onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Preferred Destination</label>
                      <select
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a destination</option>
                        <option value="rajasthan">Rajasthan</option>
                        <option value="kerala">Kerala</option>
                        <option value="goa">Goa</option>
                        <option value="himachal">Himachal Pradesh</option>
                        <option value="kashmir">Kashmir</option>
                        <option value="uttarakhand">Uttarakhand</option>
                        <option value="golden-triangle">Golden Triangle</option>
                        <option value="south-india">South India</option>
                        <option value="northeast">Northeast India</option>
                        <option value="custom">Custom Package</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Preferred Travel Date</label>
                    <input
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Tell us about your travel plans *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your group size, interests, budget range, and any special requirements..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </div>
              )}
            </div>

            {/* Additional Contact Info */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Need Immediate Assistance?</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-blue-500 text-white p-3 rounded-full mr-4">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Call Us Now</p>
                      <p className="text-blue-600 font-medium">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-500 text-white p-3 rounded-full mr-4">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">WhatsApp</p>
                      <p className="text-green-600 font-medium">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-purple-500 text-white p-3 rounded-full mr-4">
                      <Headphones className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">24/7 Support</p>
                      <p className="text-purple-600 font-medium">1800-123-TRAVEL</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Branch Offices */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Branch Offices</h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-bold text-gray-900">{office.city}</h4>
                      <p className="text-gray-600 text-sm">{office.address}</p>
                      <p className="text-blue-600 font-medium">{office.phone}</p>
                      <p className="text-gray-500 text-xs">Manager: {office.manager}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialMedia.map((social, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                      <social.icon className={`w-6 h-6 ${social.color} mr-3`} />
                      <div>
                        <p className="font-medium text-gray-900">{social.name}</p>
                        <p className="text-xs text-gray-500">{social.handle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Main Office</h2>
            <p className="text-gray-600">Located in the heart of New Delhi, easily accessible by metro and bus</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600">Interactive Map</h3>
                <p className="text-gray-500">Connaught Place, Block A-36, New Delhi - 110001</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your Adventure Awaits
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't just dream about traveling. Let's make it happen together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Packages
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Request Callback
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}