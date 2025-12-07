import React from 'react';
import { Dice6, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Dice6 className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold">TableTop Quest</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your gateway to epic tabletop adventures and unforgettable TTRPG experiences.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-purple-400" />
                <span className="text-gray-400">quest@tabletopquest.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-purple-400" />
                <span className="text-gray-400">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-purple-400" />
                <span className="text-gray-400">123 Adventure Lane, Gaming City</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/privacy" className="block text-gray-400 hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="block text-gray-400 hover:text-purple-400 transition-colors">
                Terms of Service
              </a>
              <a href="/faq" className="block text-gray-400 hover:text-purple-400 transition-colors">
                FAQ
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 TableTop Quest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;