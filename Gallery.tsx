import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      alt: 'Players gathered around a D&D table with dice and character sheets',
      category: 'Sessions',
    },
    {
      src: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop',
      alt: 'Colorful polyhedral dice set on a wooden table',
      category: 'Equipment',
    },
    {
      src: 'https://placehold.co/600x400',
      alt: 'Fantasy miniatures and terrain setup for combat encounter',
      category: 'Miniatures',
    },
    {
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      alt: 'Character sheets and rulebooks spread across gaming table',
      category: 'Materials',
    },
    {
      src: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=600&h=400&fit=crop',
      alt: 'Group of friends laughing during an intense gaming moment',
      category: 'Sessions',
    },
    {
      src: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop',
      alt: 'Detailed fantasy map with tokens and markers',
      category: 'Maps',
    },
    {
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      alt: 'Player rolling dice during crucial moment in campaign',
      category: 'Sessions',
    },
    {
      src: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop',
      alt: 'Collection of painted miniatures representing party members',
      category: 'Miniatures',
    },
    {
      src: 'https://placehold.co/600x400',
      alt: 'Digital tablet showing interactive dungeon map',
      category: 'Technology',
    },
    {
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      alt: 'Atmospheric lighting setup for horror campaign session',
      category: 'Atmosphere',
    },
    {
      src: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=600&h=400&fit=crop',
      alt: 'Players in costume for special themed session',
      category: 'Events',
    },
    {
      src: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop',
      alt: 'Handcrafted props and artifacts for immersive gameplay',
      category: 'Props',
    },
  ];

  const categories = ['All', 'Sessions', 'Equipment', 'Miniatures', 'Materials', 'Maps', 'Technology', 'Atmosphere', 'Events', 'Props'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Gallery
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look behind the scenes at our gaming sessions, equipment, and the magical moments 
              that happen around our table.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
              <div className="relative max-w-4xl max-h-full">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                  aria-label="Close image"
                >
                  <X className="h-8 w-8" />
                </button>
                <img
                  src={selectedImage}
                  alt="Gallery image"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-16 bg-purple-600 rounded-lg text-white p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Create Your Own Memories?
            </h2>
            <p className="text-xl mb-6 text-purple-100">
              Join us at the table and become part of our growing collection of epic adventures.
            </p>
            <a
              href="/reservations"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Book Your Session
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}