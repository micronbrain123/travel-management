"use client"

import { FileText, Mail, Phone, MapPin, AlertTriangle, Shield, CreditCard } from 'lucide-react'

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <FileText className="w-16 h-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms and Conditions</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Please read these terms carefully before using our travel booking services.
          </p>
          <p className="text-sm text-blue-200 mt-4">Last updated: September 18, 2025</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            {/* Acceptance of Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using TravelBook's website and services, you accept and agree to be bound by 
                these Terms and Conditions. If you do not agree to abide by these terms, please do not use 
                our services. These terms apply to all visitors, users, and others who access or use our services.
              </p>
            </div>

            {/* About Our Services */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About Our Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TravelBook is a travel booking platform with over 15 years of experience, serving 50,000+ travelers 
                across 500+ destinations. We provide:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="text-gray-700 space-y-2">
                  <li>• Flight booking services</li>
                  <li>• Hotel reservations</li>
                  <li>• Travel package arrangements</li>
                  <li>• Travel insurance assistance</li>
                </ul>
                <ul className="text-gray-700 space-y-2">
                  <li>• Visa processing support</li>
                  <li>• Tour and activity bookings</li>
                  <li>• 24/7 customer support</li>
                  <li>• Travel consultation services</li>
                </ul>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">You are responsible for:</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Providing accurate and complete information during booking</li>
                  <li>• Ensuring valid travel documents (passport, visa, etc.)</li>
                  <li>• Making payments on time as per booking terms</li>
                  <li>• Complying with travel regulations and destination requirements</li>
                  <li>• Informing us of any special requirements or medical conditions</li>
                  <li>• Maintaining the security of your account credentials</li>
                </ul>
              </div>
            </div>

            {/* Booking and Payment Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking and Payment Terms</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <CreditCard className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Policy</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• All prices are in Indian Rupees (INR) unless stated otherwise</li>
                    <li>• Payment must be made at the time of booking</li>
                    <li>• We accept major credit cards, debit cards, and online banking</li>
                    <li>• All transactions are processed securely through encrypted gateways</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <AlertTriangle className="w-8 h-8 text-orange-600 mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Notes</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Prices are subject to change until payment is confirmed</li>
                    <li>• Additional taxes and fees may apply</li>
                    <li>• Currency fluctuations may affect final pricing</li>
                    <li>• Promotional offers have specific terms and validity</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cancellation and Refund Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation and Refund Policy</h2>
              
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cancellation Rules</h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Flight Bookings</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 24+ hours before departure: Airline terms apply</li>
                      <li>• Less than 24 hours: No refund typically</li>
                      <li>• Cancellation charges as per airline policy</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Hotel Bookings</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 48+ hours before check-in: Full refund possible</li>
                      <li>• 24-48 hours: Partial refund</li>
                      <li>• Less than 24 hours: No refund</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-sm">
                Refund processing time: 7-10 business days after approval. Refunds will be credited to the 
                original payment method. Service charges and processing fees are non-refundable.
              </p>
            </div>

            {/* Travel Insurance */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Travel Insurance</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We strongly recommend purchasing travel insurance to protect your trip investment. 
                  Travel insurance can cover:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Trip cancellation and interruption</li>
                    <li>• Medical emergencies abroad</li>
                    <li>• Lost or delayed baggage</li>
                  </ul>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Flight delays and missed connections</li>
                    <li>• Emergency evacuation</li>
                    <li>• Personal liability coverage</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Limitations of Liability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitations of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TravelBook acts as an intermediary between you and travel service providers. Our liability is limited as follows:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="text-gray-700 space-y-3">
                  <li>• We are not responsible for acts, errors, or omissions of third-party service providers</li>
                  <li>• Weather-related delays, cancellations, or changes are beyond our control</li>
                  <li>• We are not liable for personal injury, loss, or damage during travel</li>
                  <li>• Maximum liability is limited to the total amount paid for the specific booking</li>
                  <li>• We do not guarantee the accuracy of third-party information or services</li>
                </ul>
              </div>
            </div>

            {/* Force Majeure */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Force Majeure</h2>
              <p className="text-gray-700 leading-relaxed">
                We are not liable for any failure to perform our obligations due to circumstances beyond our reasonable 
                control, including but not limited to: natural disasters, pandemics, government actions, war, terrorism, 
                strikes, or other unforeseeable events. In such cases, we will work with you to find alternative solutions 
                or provide credits for future travel.
              </p>
            </div>

            {/* Privacy and Data Protection */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy and Data Protection</h2>
              <p className="text-gray-700 leading-relaxed">
                Your privacy is important to us. Our collection, use, and protection of your personal information 
                is governed by our Privacy Policy. By using our services, you also agree to our Privacy Policy, 
                which is incorporated into these Terms and Conditions by reference.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content on our website, including text, graphics, logos, images, and software, is protected by copyright 
                and other intellectual property laws. You may not:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Copy, modify, or distribute our content without permission</li>
                <li>• Use our trademarks or branding without authorization</li>
                <li>• Reverse engineer or attempt to extract source code</li>
                <li>• Create derivative works based on our platform</li>
              </ul>
            </div>

            {/* Prohibited Uses */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Prohibited Uses</h2>
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                <p className="text-gray-700 leading-relaxed mb-4">You may not use our services to:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Make false or fraudulent bookings</li>
                    <li>• Violate any applicable laws or regulations</li>
                    <li>• Infringe on intellectual property rights</li>
                    <li>• Transmit harmful or malicious code</li>
                  </ul>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Harass or harm other users</li>
                    <li>• Attempt unauthorized access to our systems</li>
                    <li>• Engage in commercial activities without permission</li>
                    <li>• Collect user information without consent</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Account Termination */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Account Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to suspend or terminate your account at any time if you violate these Terms and Conditions 
                or engage in fraudulent or harmful activities. You may also terminate your account by contacting our customer 
                support team. Upon termination, your access to our services will be discontinued.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Resolution Process</h3>
                <div className="text-gray-700 space-y-3 text-sm">
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                    <p><strong>Direct Contact:</strong> Contact our customer support team first</p>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                    <p><strong>Escalation:</strong> Formal complaint to our grievance officer</p>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                    <p><strong>Legal Resolution:</strong> Subject to jurisdiction of Indian courts</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to These Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective 
                immediately upon posting on our website. We will notify registered users of material changes via 
                email. Your continued use of our services after changes are posted constitutes acceptance of the 
                updated terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Customer Support</h3>
                  <p className="text-blue-600 font-medium">info@travelbook.com</p>
                  <p className="text-xs text-gray-500 mt-1">Response: 24-48 hours</p>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg text-center">
                  <Shield className="w-8 h-8 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Legal Department</h3>
                  <p className="text-red-600 font-medium">legal@travelbook.com</p>
                  <p className="text-xs text-gray-500 mt-1">For legal matters</p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <Phone className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
                  <p className="text-green-600 font-medium">+91 9876543310</p>
                  <p className="text-xs text-gray-500 mt-1">24/7 Available</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mt-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-gray-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Office Address</h3>
                    <p className="text-gray-700 text-sm">
                      TravelBook<br/>
                      3rd street, MG Road<br/>
                      Bangalore, 782453<br/>
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Governing Law */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms and Conditions are governed by and construed in accordance with the laws of India. 
                Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the 
                courts in Bangalore, India.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700 text-sm">
                  By using our services, you acknowledge that you have read, understood, and agree to be bound 
                  by these Terms and Conditions and our Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}