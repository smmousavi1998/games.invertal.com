import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Dice6, Users, Calendar, Star, ArrowRight } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <Dice6 className="h-8 w-8 text-purple-600" />,
      title: 'Expert Game Master',
      description: 'Professional GM with years of experience crafting memorable adventures.',
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: 'All Experience Levels',
      description: 'From complete beginners to seasoned veterans, everyone is welcome.',
    },
    {
      icon: <Calendar className="h-8 w-8 text-purple-600" />,
      title: 'Flexible Scheduling',
      description: 'One-shots, campaigns, and mini-campaigns to fit your schedule.',
    },
    {
      icon: <Star className="h-8 w-8 text-purple-600" />,
      title: 'Premium Experience',
      description: 'High-quality materials, immersive storytelling, and unforgettable moments.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      text: 'Amazing experience! The GM really brought the world to life.',
      rating: 5,
    },
    {
      name: 'Mike R.',
      text: 'Perfect for beginners. Very patient and helpful throughout.',
      rating: 5,
    },
    {
      name: 'Jessica L.',
      text: 'Best TTRPG sessions I\'ve ever played. Highly recommend!',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-600 to-purple-800 text-white">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Epic Adventures Await
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
                Join our table for unforgettable tabletop RPG experiences. From thrilling one-shots to epic campaigns, your next adventure starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/reservations"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>Book Your Adventure</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Meet Your GM
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose TableTop Quest?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We provide premium tabletop gaming experiences with professional game mastering and immersive storytelling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Game Systems Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Game Systems We Play
              </h2>
              <p className="text-lg text-gray-600">
                Explore different worlds and systems with our experienced game master.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Dungeons & Dragons 5e',
                  description: 'The classic fantasy adventure experience.',
                  image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop',
                },
                {
                  name: 'Pathfinder 2e',
                  description: 'Deep character customization and tactical combat.',
                  image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=250&fit=crop',
                },
                {
                  name: 'Call of Cthulhu',
                  description: 'Horror and mystery in the Lovecraftian universe.',
                  image: 'https://placehold.co/400x250',
                },
                {
                  name: 'Vampire: The Masquerade',
                  description: 'Gothic horror and political intrigue.',
                  image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop',
                },
                {
                  name: 'Cyberpunk Red',
                  description: 'High-tech, low-life dystopian adventures.',
                  image: 'https://placehold.co/400x250',
                },
                {
                  name: 'Custom Systems',
                  description: 'Have a favorite system? Let\'s discuss it!',
                  image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=250&fit=crop',
                },
              ].map((system, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={system.image}
                    alt={system.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {system.name}
                    </h3>
                    <p className="text-gray-600">
                      {system.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Players Say
              </h2>
              <p className="text-lg text-gray-600">
                Don't just take our word for it - hear from our adventurers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Begin Your Quest?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Book your spot at our table and embark on an unforgettable adventure.
            </p>
            <Link
              to="/reservations"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Make a Reservation</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}