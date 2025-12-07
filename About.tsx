import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Award, BookOpen, Users, Heart } from 'lucide-react';

export default function About() {
  const achievements = [
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: '8+ Years Experience',
      description: 'Professional game mastering since 2016',
    },
    {
      icon: <BookOpen className="h-8 w-8 text-purple-600" />,
      title: '500+ Sessions',
      description: 'Countless adventures and memorable moments',
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: '200+ Players',
      description: 'Welcomed adventurers from all backgrounds',
    },
    {
      icon: <Heart className="h-8 w-8 text-purple-600" />,
      title: 'Passion-Driven',
      description: 'Dedicated to creating amazing experiences',
    },
  ];

  const gameSystemsExpertise = [
    'Dungeons & Dragons 5e',
    'Pathfinder 2e',
    'Call of Cthulhu',
    'Vampire: The Masquerade',
    'Cyberpunk Red',
    'World of Darkness',
    'Savage Worlds',
    'FATE Core',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
                  alt="Alex Thompson - Game Master"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Meet Your Game Master
                </h1>
                <h2 className="text-2xl text-purple-600 font-semibold mb-6">
                  Alex Thompson
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Welcome, fellow adventurers! I'm Alex, your dedicated Game Master and the heart behind TableTop Quest. 
                  For over eight years, I've been crafting immersive worlds and guiding players through unforgettable 
                  tabletop RPG experiences.
                </p>
                <p className="text-gray-700 mb-6">
                  My journey into tabletop gaming began in college when a friend introduced me to D&D. What started as 
                  casual weekend sessions quickly became a passion that would shape my life. I discovered that I had a 
                  natural talent for storytelling and creating engaging experiences that brought people together.
                </p>
                <p className="text-gray-700">
                  Whether you're a complete beginner curious about TTRPGs or a seasoned veteran looking for your next 
                  great campaign, I'm here to ensure you have an amazing time at our table.
                </p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>

          {/* Philosophy and Approach */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">My Philosophy</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong className="text-purple-600">Player-Centered Storytelling:</strong> Every story we tell together 
                  is shaped by your choices and actions. I believe the best adventures emerge from collaborative storytelling 
                  where everyone contributes to the narrative.
                </p>
                <p>
                  <strong className="text-purple-600">Inclusive Gaming:</strong> Our table welcomes everyone, regardless 
                  of experience level, background, or identity. I'm committed to creating a safe, respectful environment 
                  where all players can express themselves freely.
                </p>
                <p>
                  <strong className="text-purple-600">Memorable Moments:</strong> While rules provide structure, the goal 
                  is always to create moments that you'll remember and talk about long after the session ends.
                </p>
                <p>
                  <strong className="text-purple-600">Growth and Learning:</strong> Whether it's mastering new game mechanics 
                  or developing your roleplaying skills, I'm here to support your growth as a player.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">My Approach</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong className="text-purple-600">Preparation Meets Flexibility:</strong> I come to every session 
                  thoroughly prepared, but I'm always ready to adapt when players take the story in unexpected directions.
                </p>
                <p>
                  <strong className="text-purple-600">Visual Storytelling:</strong> I use digital maps, handouts, and 
                  visual aids to bring our shared world to life and help immerse you in the experience.
                </p>
                <p>
                  <strong className="text-purple-600">Safety First:</strong> I employ safety tools like X-Cards and Lines 
                  & Veils to ensure everyone feels comfortable with the content we explore together.
                </p>
                <p>
                  <strong className="text-purple-600">Continuous Improvement:</strong> I regularly seek feedback and stay 
                  current with new techniques and systems to provide the best possible experience.
                </p>
              </div>
            </div>
          </div>

          {/* Game Systems Expertise */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Game Systems I Run</h2>
            <p className="text-gray-700 mb-6">
              I have extensive experience with a wide variety of tabletop RPG systems. Here are some of my specialties:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {gameSystemsExpertise.map((system, index) => (
                <div key={index} className="bg-purple-50 rounded-lg p-3 text-center">
                  <span className="text-purple-700 font-medium">{system}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-6 text-sm">
              Don't see your favorite system? I'm always eager to learn new games and systems. 
              Feel free to reach out and we can discuss running something new!
            </p>
          </div>

          {/* Personal Touch */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg text-white p-8">
            <h2 className="text-3xl font-bold mb-6">Beyond the Table</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4">
                  When I'm not running games, you can find me reading fantasy novels, painting miniatures, 
                  or exploring new board games. I'm also an avid hiker and photographer, often drawing 
                  inspiration for my campaigns from the beautiful landscapes I encounter.
                </p>
                <p>
                  I hold a degree in Creative Writing and have completed several courses in game design 
                  and narrative structure. This background helps me craft compelling stories and memorable NPCs.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  I'm passionate about the positive impact that tabletop gaming can have on people's lives. 
                  I've seen shy players find their voice, strangers become lifelong friends, and creative 
                  minds flourish in the collaborative environment of a TTRPG session.
                </p>
                <p>
                  My goal is simple: to provide you with an experience that's not just fun, but meaningful 
                  and memorable. Let's create some epic stories together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}