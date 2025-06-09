'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import beverageData from '../../../../content/demos/beverage.json';

// Fun animated bubbles component
function BubbleAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/10 animate-float"
          style={{
            width: `${Math.random() * 40 + 20}px`,
            height: `${Math.random() * 40 + 20}px`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 10}s`
          }}
        />
      ))}
    </div>
  );
}

type FlavorKey = 'mango' | 'pineapple' | 'hibiscus' | 'lime';

export default function BeverageDemoPage() {
  const [selectedFlavor, setSelectedFlavor] = useState<FlavorKey>('mango');
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizStep, setQuizStep] = useState(0);

  const flavorProfiles: Record<FlavorKey, { name: string; color: string; description: string; vibe: string }> = {
    mango: {
      name: 'Mango Calypso',
      color: '#FF8B73',
      description: 'Sweet, tropical, with a spicy kick',
      vibe: 'Beach bonfire at sunset'
    },
    pineapple: {
      name: 'Pineapple Punch', 
      color: '#FFD93D',
      description: 'Bright, tangy, pure sunshine',
      vibe: 'Pool party with friends'
    },
    hibiscus: {
      name: 'Hibiscus Chill',
      color: '#FF6B9D',
      description: 'Floral, refreshing, sophisticated',
      vibe: 'Rooftop garden party'
    },
    lime: {
      name: 'Lime Breeze',
      color: '#95E1A8',
      description: 'Zesty, effervescent, energizing',
      vibe: 'Morning beach yoga'
    }
  };

  const quizQuestions = [
    {
      question: "What's your ideal beach day?",
      answers: [
        { text: "Sunset bonfire with music", flavor: "mango" as FlavorKey },
        { text: "Pool floaties and friends", flavor: "pineapple" as FlavorKey },
        { text: "Reading under an umbrella", flavor: "hibiscus" as FlavorKey },
        { text: "Morning surf session", flavor: "lime" as FlavorKey }
      ]
    },
    {
      question: "Pick a vacation spot:",
      answers: [
        { text: "Jamaica", flavor: "mango" as FlavorKey },
        { text: "Hawaii", flavor: "pineapple" as FlavorKey },
        { text: "Bermuda", flavor: "hibiscus" as FlavorKey },
        { text: "Costa Rica", flavor: "lime" as FlavorKey }
      ]
    },
    {
      question: "Your go-to summer playlist is:",
      answers: [
        { text: "Reggae & dancehall", flavor: "mango" as FlavorKey },
        { text: "Pop hits & party anthems", flavor: "pineapple" as FlavorKey },
        { text: "Indie & acoustic", flavor: "hibiscus" as FlavorKey },
        { text: "Latin & salsa", flavor: "lime" as FlavorKey }
      ]
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: beverageData.colors.background }}>
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-30px) rotate(120deg); }
          66% { transform: translateY(-20px) rotate(240deg); }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>

      {/* Demo Banner */}
      <div className="bg-gray-900 text-white py-3 text-center relative z-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-medium">
            🎨 This is a sample beverage website showing what I could build for your business
          </p>
        </div>
      </div>


      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${beverageData.hero.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)'
          }}
        />
        <BubbleAnimation />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <Image 
            src="/isla-blu-logo.png" 
            alt="Isla Blū" 
            width={200} 
            height={100}
            className="mx-auto mb-8 drop-shadow-2xl"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            {beverageData.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl mb-12 animate-fade-in-delay">
            {beverageData.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowQuiz(true)}
              className="px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 text-white"
              style={{ backgroundColor: beverageData.colors.secondary }}
            >
              Find Your Flavor
            </button>
            <button 
              className="px-8 py-4 rounded-full text-lg font-semibold bg-white transition-all hover:scale-105"
              style={{ color: beverageData.colors.primary }}
            >
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Flavors Section */}
      <section id="flavors" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: beverageData.colors.text }}>
            Taste Paradise
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {(Object.entries(flavorProfiles) as [FlavorKey, typeof flavorProfiles[FlavorKey]][]).map(([key, flavor]) => (
                <button
                  key={key}
                  onClick={() => setSelectedFlavor(key)}
                  className={`w-full text-left p-6 rounded-2xl transition-all ${
                    selectedFlavor === key ? 'scale-105 shadow-xl' : 'hover:scale-102'
                  }`}
                  style={{
                    backgroundColor: selectedFlavor === key ? flavor.color + '20' : 'white',
                    borderWidth: '2px',
                    borderColor: selectedFlavor === key ? flavor.color : 'transparent'
                  }}
                >
                  <h3 className="text-2xl font-bold mb-2">{flavor.name}</h3>
                  <p className="text-gray-600 mb-2">{flavor.description}</p>
                  <p className="text-sm italic" style={{ color: flavor.color }}>
                    Vibe: {flavor.vibe}
                  </p>
                </button>
              ))}
            </div>
            
            <div className="relative">
              <div 
                className="absolute inset-0 rounded-full blur-3xl opacity-30"
                style={{ backgroundColor: flavorProfiles[selectedFlavor].color }}
              />
              <Image 
                src="/isla-blu-product-lineup.webp"
                alt="Isla Blū Bottles"
                width={600}
                height={600}
                className="relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quiz Section */}
      <section className="py-20" style={{ backgroundColor: beverageData.colors.secondary + '10' }}>
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: beverageData.colors.text }}>
            Which Flavor Are You?
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Take our 30-second quiz and get a personalized flavor recommendation
          </p>
          
          {!showQuiz ? (
            <div className="text-center">
              <button
                onClick={() => setShowQuiz(true)}
                className="px-12 py-6 rounded-full text-white text-xl font-semibold transition-all hover:scale-105 shadow-2xl"
                style={{ backgroundColor: beverageData.colors.primary }}
              >
                Start the Quiz →
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              {quizStep < quizQuestions.length ? (
                <>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-500">Question {quizStep + 1} of {quizQuestions.length}</span>
                      <button
                        onClick={() => { setShowQuiz(false); setQuizStep(0); }}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full transition-all"
                        style={{ 
                          width: `${((quizStep + 1) / quizQuestions.length) * 100}%`,
                          backgroundColor: beverageData.colors.secondary
                        }}
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-6">
                    {quizQuestions[quizStep].question}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {quizQuestions[quizStep].answers.map((answer, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setSelectedFlavor(answer.flavor);
                          setQuizStep(quizStep + 1);
                        }}
                        className="p-4 text-left rounded-xl hover:scale-102 transition-all border-2"
                        style={{ 
                          borderColor: beverageData.colors.secondary + '30',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = beverageData.colors.secondary;
                          e.currentTarget.style.backgroundColor = beverageData.colors.secondary + '10';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = beverageData.colors.secondary + '30';
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        {answer.text}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-4">Your Perfect Match!</h3>
                  <div 
                    className="text-6xl font-bold mb-4"
                    style={{ color: flavorProfiles[selectedFlavor].color }}
                  >
                    {flavorProfiles[selectedFlavor].name}
                  </div>
                  <p className="text-gray-600 mb-6">
                    {flavorProfiles[selectedFlavor].description}
                  </p>
                  <div className="flex gap-4 justify-center">
                    <button
                      className="px-8 py-3 rounded-full text-white"
                      style={{ backgroundColor: beverageData.colors.primary }}
                    >
                      Order This Flavor
                    </button>
                    <button
                      onClick={() => {
                        setShowQuiz(false);
                        setQuizStep(0);
                      }}
                      className="px-8 py-3 rounded-full border-2"
                      style={{ borderColor: beverageData.colors.primary, color: beverageData.colors.primary }}
                    >
                      Take Again
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Flavor Contest Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFD93D] to-[#FF8B73] text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Create Our Next Flavor!
            </h2>
            <p className="text-xl opacity-90">
              Vote for your dream combination and see it come to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Passion Paradise', votes: 342, ingredients: 'Passion Fruit + Vanilla + Coconut' },
              { name: 'Citrus Sunset', votes: 298, ingredients: 'Blood Orange + Grapefruit + Mint' },
              { name: 'Berry Blast', votes: 256, ingredients: 'Açai + Blueberry + Lemon' }
            ].map((flavor, i) => (
              <div key={i} className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-2">{flavor.name}</h3>
                <p className="mb-4 opacity-90">{flavor.ingredients}</p>
                <div className="mb-4">
                  <div className="bg-white/30 rounded-full h-4 overflow-hidden">
                    <div 
                      className="bg-white h-full transition-all"
                      style={{ width: `${(flavor.votes / 342) * 100}%` }}
                    />
                  </div>
                  <p className="text-sm mt-2">{flavor.votes} votes</p>
                </div>
                <button className="w-full py-3 bg-white text-gray-800 rounded-full font-semibold hover:scale-105 transition-all">
                  Vote for This
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: beverageData.colors.text }}>
            Why Isla Blū?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {beverageData.features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl transition-all hover:scale-105"
                style={{ backgroundColor: beverageData.colors.background }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: beverageData.colors.text }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: 'url(/isla-blu-lifestyle.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto max-w-4xl px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: beverageData.colors.text }}>
            Born on the Beach
          </h2>
          <div className="prose prose-lg mx-auto text-center">
            <p className="text-gray-700 mb-6 text-lg">
              Isla Blū started with a simple question: Why can't soda feel like vacation?
            </p>
            <p className="text-gray-600 mb-6">
              After countless summers mixing fresh fruit juices on Caribbean beaches, we decided to bottle that feeling. 
              Each flavor is inspired by a different island memory - from sunset bonfires in Jamaica to morning 
              surf sessions in Costa Rica.
            </p>
            <p className="text-gray-600 mb-8">
              We use real fruit, natural cane sugar, and a splash of sparkling water. No artificial anything. 
              Just pure, fizzy sunshine in a bottle.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold" style={{ color: beverageData.colors.primary }}>12</div>
                <p className="text-sm text-gray-600">Small Batches Monthly</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold" style={{ color: beverageData.colors.secondary }}>100%</div>
                <p className="text-sm text-gray-600">Natural Ingredients</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold" style={{ color: beverageData.colors.accent }}>4</div>
                <p className="text-sm text-gray-600">Caribbean Islands Visited</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-20" style={{ backgroundColor: beverageData.colors.background }}>
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: beverageData.colors.text }}>
            #IslaBlūMoments
          </h2>
          <p className="text-center text-gray-600 mb-12">Follow us @islablusoda for daily sunshine</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div 
                key={i} 
                className="aspect-square rounded-2xl overflow-hidden hover:scale-105 transition-all cursor-pointer"
                style={{ 
                  backgroundColor: i % 2 === 0 ? beverageData.colors.primary : beverageData.colors.secondary,
                  opacity: 0.3 + (i * 0.1)
                }}
              >
                {/* Instagram image placeholder */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find Us Section */}
      <section id="find" className="py-20 bg-gradient-to-br" style={{ backgroundColor: beverageData.colors.secondary + '20' }}>
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: beverageData.colors.text }}>
            Where to Find Us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: beverageData.colors.text }}>
                Online Store
              </h3>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <p className="text-gray-600 mb-6">
                  Get Isla Blū delivered straight to your door. Free shipping on orders over $30!
                </p>
                <button 
                  className="w-full py-4 rounded-full text-white font-semibold"
                  style={{ backgroundColor: beverageData.colors.primary }}
                >
                  Shop Online →
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: beverageData.colors.text }}>
                Local Retailers
              </h3>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <p className="text-gray-600 mb-6">
                  Find us at these Connecticut locations:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Whole Foods (New Haven, Westport)</li>
                  <li>• Village Markets (Greenwich)</li>
                  <li>• Shore Line Grocers (Madison)</li>
                  <li>• The Fresh Market (Hartford)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Demo Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4 z-40">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm opacity-90">This is a demo website by Built By Tom</p>
            <p className="text-xs opacity-70">Showcasing e-commerce & subscription features for beverage brands</p>
          </div>
          <Link 
            href="/samples"
            className="bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            View All Demos
          </Link>
        </div>
      </div>
    </div>
  );
}