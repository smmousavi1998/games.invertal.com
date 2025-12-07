import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-purple-600" />,
      title: 'Email',
      details: 'quest@tabletopquest.com',
      description: 'Best for detailed inquiries and booking questions',
    },
    {
      icon: <Phone className="h-6 w-6 text-purple-600" />,
      title: 'Phone',
      details: '(555) 123-4567',
      description: 'Available during business hours for urgent matters',
    },
    {
      icon: <MapPin className="h-6 w-6 text-purple-600" />,
      title: 'Location',
      details: '123 Adventure Lane, Gaming City, GC 12345',
      description: 'Private gaming space with parking available',
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-600" />,
      title: 'Hours',
      details: 'Flexible scheduling available',
      description: 'Sessions typically run evenings and weekends',
    },
  ];

  const faqs = [
    {
      question: 'Do I need experience to join a session?',
      answer: 'Not at all! I welcome players of all experience levels, from complete beginners to seasoned veterans. I\'ll help you learn the rules and get comfortable with the game.',
    },
    {
      question: 'What should I bring to a session?',
      answer: 'Just bring yourself and a positive attitude! I provide all dice, character sheets, rulebooks, and other materials needed. Snacks and drinks are also provided.',
    },
    {
      question: 'How far in advance should I book?',
      answer: 'I recommend booking at least 1-2 weeks in advance, especially for weekend sessions. However, I sometimes have last-minute availability, so don\'t hesitate to reach out.',
    },
    {
      question: 'What\'s your cancellation policy?',
      answer: 'I require 24 hours notice for cancellations. This helps me potentially fill the spot or adjust the session for other players.',
    },
    {
      question: 'Can you accommodate dietary restrictions or accessibility needs?',
      answer: 'Absolutely! Please let me know about any dietary restrictions, accessibility needs, or other accommodations when you book. I want everyone to feel comfortable and included.',
    },
    {
      question: 'Do you offer online sessions?',
      answer: 'Yes! I can run sessions online using platforms like Roll20 or Foundry VTT. This is perfect for players who can\'t make it in person or prefer remote gaming.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our sessions? Want to book an adventure? 
              I'd love to hear from you and help you start your tabletop journey.
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-purple-600 font-medium mb-2">
                  {info.details}
                </p>
                <p className="text-sm text-gray-600">
                  {info.description}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <ContactForm />
            </div>
            
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Interactive map would be displayed here</p>
                    <p className="text-sm text-gray-500">123 Adventure Lane, Gaming City</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Our Gaming Space
                  </h3>
                  <p className="text-gray-600">
                    Located in a comfortable, private gaming space with ample parking. 
                    The venue is fully accessible and designed specifically for tabletop gaming.
                  </p>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Quick Response Guarantee
                </h3>
                <p className="text-gray-700 mb-4">
                  I typically respond to all inquiries within 24 hours, often much sooner. 
                  For urgent matters or last-minute bookings, feel free to call directly.
                </p>
                <div className="flex items-center text-sm text-purple-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Average response time: 4 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Contact Options */}
          <div className="mt-12 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg text-white p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Still Have Questions?
              </h2>
              <p className="text-xl mb-6 text-purple-100">
                Don't hesitate to reach out! I'm here to help make your tabletop gaming experience amazing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:quest@tabletopquest.com"
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <Mail className="h-5 w-5" />
                  <span>Send Email</span>
                </a>
                <a
                  href="tel:+15551234567"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
