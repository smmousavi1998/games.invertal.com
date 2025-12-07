import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReservationForm from '../components/ReservationForm';
import { Clock, Users, Calendar, DollarSign } from 'lucide-react';

export default function Reservations() {
  const sessionTypes = [
    {
      type: 'One-Shot',
      duration: '3-4 hours',
      players: '3-6 players',
      price: '$25 per player',
      description: 'Perfect for trying out new systems or enjoying a complete adventure in a single session.',
      features: ['Complete story arc', 'Pre-generated characters available', 'All materials provided'],
    },
    {
      type: 'Mini-Campaign',
      duration: '3-5 sessions',
      players: '3-6 players',
      price: '$20 per player/session',
      description: 'A short campaign that tells a focused story over multiple sessions.',
      features: ['Character development', 'Ongoing storyline', 'Player choice consequences'],
    },
    {
      type: 'Full Campaign',
      duration: 'Ongoing',
      players: '3-6 players',
      price: '$18 per player/session',
      description: 'Long-term adventures with deep character development and epic storylines.',
      features: ['Character progression', 'Rich world-building', 'Player-driven narratives'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Reserve Your Adventure
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your preferred session type and book your spot at our table. All experience levels welcome!
            </p>
          </div>

          {/* Session Types */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {sessionTypes.map((session, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-purple-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{session.type}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2 text-purple-500" />
                    <span>{session.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2 text-purple-500" />
                    <span>{session.players}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="h-5 w-5 mr-2 text-purple-500" />
                    <span className="font-semibold text-purple-600">{session.price}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{session.description}</p>

                <ul className="space-y-2">
                  {session.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Important Information */}
          <div className="bg-purple-50 rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What's Included</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• Professional game mastering</li>
                  <li>• All dice and gaming materials</li>
                  <li>• Character sheets and handouts</li>
                  <li>• Snacks and beverages</li>
                  <li>• Digital maps and visual aids</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Policies</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• 24-hour cancellation policy</li>
                  <li>• Payment due at time of session</li>
                  <li>• Ages 13+ (under 18 requires guardian consent)</li>
                  <li>• Inclusive and respectful environment</li>
                  <li>• Safety tools and content warnings provided</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="max-w-4xl mx-auto">
            <ReservationForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}