"use client"

import { Shield, Mail, Phone, MapPin } from 'lucide-react'

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-16 h-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            We are committed to protecting your privacy and ensuring your personal data is handled responsibly.
          </p>
          <p className="text-sm text-blue-200 mt-4">Last updated: September 18, 2025</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                At TravelBook, we value your privacy and are committed to protecting your personal information. 
                With over 15 years of experience serving 50,000+ travelers across 500+ destinations, we understand 
                that trust is the foundation of every great journey. This Privacy Policy explains how we collect, 
                use, and safeguard your data when you use our travel booking services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Name, email address, and phone number</li>
                    <li>• Passport details and travel documents</li>
                    <li>• Payment information and billing address</li>
                    <li>• Emergency contact details</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Usage Information</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Travel preferences and booking history</li>
                    <li>• Website usage and search patterns</li>
                    <li>• Device information and IP address</li>
                    <li>• Cookies and tracking data</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use your personal information to provide exceptional travel experiences:
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Process and manage your travel bookings</li>
                <li>• Facilitate secure payments and prevent fraud</li>
                <li>• Provide 24/7 customer support and travel assistance</li>
                <li>• Send booking confirmations and travel updates</li>
                <li>• Create personalized travel recommendations</li>
                <li>• Comply with legal and regulatory requirements</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We share your information only when necessary to provide our services or as required by law:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">We Share With:</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Travel Partners:</strong> Airlines, hotels, and service providers to complete your bookings</li>
                  <li>• <strong>Payment Processors:</strong> Secure payment gateways for transaction processing</li>
                  <li>• <strong>Government Authorities:</strong> When required by Indian law or court orders</li>
                  <li>• <strong>Service Providers:</strong> Third-party vendors who assist in our operations</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <p className="text-gray-700">
                  <strong>We never sell</strong> your personal information to third parties for marketing purposes.
                </p>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your information:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="text-gray-700 space-y-2">
                  <li>• SSL encryption for all data transmission</li>
                  <li>• Secure servers with 24/7 monitoring</li>
                  <li>• Regular security audits and assessments</li>
                </ul>
                <ul className="text-gray-700 space-y-2">
                  <li>• PCI DSS compliance for payment processing</li>
                  <li>• Strict employee access controls</li>
                  <li>• Data backup and recovery systems</li>
                </ul>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Under Indian data protection laws, you have the following rights:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="text-gray-700 space-y-2">
                  <li>• Access your personal information</li>
                  <li>• Correct inaccurate data</li>
                  <li>• Request deletion of your data</li>
                </ul>
                <ul className="text-gray-700 space-y-2">
                  <li>• Withdraw consent for marketing</li>
                  <li>• Data portability</li>
                  <li>• File complaints with authorities</li>
                </ul>
              </div>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Travel Records</h4>
                    <p className="text-sm text-gray-600">Until travel completion + 3 years</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Payment Records</h4>
                    <p className="text-sm text-gray-600">7 years (as required by Indian tax laws)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Marketing Preferences</h4>
                    <p className="text-sm text-gray-600">Until you withdraw consent</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Website Analytics</h4>
                    <p className="text-sm text-gray-600">Anonymized after 26 months</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies to enhance your browsing experience, remember your preferences, and analyze website traffic. 
                You can control cookie settings through your browser preferences.
              </p>
            </div>

            {/* International Transfers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed">
                If we transfer your data outside India, we ensure adequate protection through standard contractual 
                clauses, adequacy decisions by Indian authorities, or your explicit consent where required.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not intended for children under 18. We do not knowingly collect personal 
                information from minors without parental consent.
              </p>
            </div>

            {/* Policy Updates */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy periodically. Material changes will be notified through email 
                notifications to registered users and prominent notices on our website.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                For privacy-related queries or concerns, our dedicated team is here to help:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Privacy Team</h3>
                  <p className="text-blue-600 font-medium">privacy@travelbook.com</p>
                  <p className="text-xs text-gray-500 mt-1">Response: 24-48 hours</p>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg text-center">
                  <Phone className="w-8 h-8 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Grievance Officer</h3>
                  <p className="text-red-600 font-medium">grievance@travelbook.com</p>
                  <p className="text-xs text-gray-500 mt-1">Response: Within 72 hours</p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <MapPin className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Office Address</h3>
                  <p className="text-gray-700 text-sm">
                    3rd street, MG Road<br/>
                    Bangalore, 782453<br/>
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Governing Law */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This Privacy Policy is governed by the laws of India and subject to the jurisdiction of Indian courts.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700 text-sm">
                  By using our services, you acknowledge that you have read and understood this Privacy Policy 
                  and agree to the collection and use of your information as described herein.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}