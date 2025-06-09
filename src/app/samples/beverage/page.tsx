'use client';

import { useState, useEffect } from 'react';
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
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

      {/* Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isSticky ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Image 
            src="/isla-blu-logo.png" 
            alt="Isla Blū" 
            width={120} 
            height={60}
            className="h-12 w-auto"
          />
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#flavors" className="hover:text-[#20C4B8] transition-colors" style={{ color: beverageData.colors.text }}>Flavors</a>
            <a href="#story" className="hover:text-[#20C4B8] transition-colors" style={{ color: beverageData.colors.text }}>Our Story</a>
            <a href="#find" className="hover:text-[#20C4B8] transition-colors" style={{ color: beverageData.colors.text }}>Find Us</a>
            <button 
              className="px-6 py-2 rounded-full text-white transition-all hover:scale-105"
              style={{ backgroundColor: beverageData.colors.primary }}
            >
              Order Online
            </button>
          </nav>
        </div>
      </header>

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

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
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

      {/* Quiz Modal */}
      {showQuiz && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => { setShowQuiz(false); setQuizStep(0); }}>
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => { setShowQuiz(false); setQuizStep(0); }}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
            {quizStep < quizQuestions.length ? (
              <>
                <h3 className="text-2xl font-bold mb-6">
                  {quizQuestions[quizStep].question}
                </h3>
                <div className="space-y-3">
                  {quizQuestions[quizStep].answers.map((answer, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setSelectedFlavor(answer.flavor);
                        setQuizStep(quizStep + 1);
                      }}
                      className="w-full p-4 text-left rounded-xl hover:scale-102 transition-all"
                      style={{ 
                        backgroundColor: beverageData.colors.secondary + '20',
                        borderWidth: '2px',
                        borderColor: 'transparent'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = beverageData.colors.secondary}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
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
                    onClick={() => {
                      setShowQuiz(false);
                      setQuizStep(0);
                    }}
                    className="px-8 py-3 rounded-full text-white"
                    style={{ backgroundColor: beverageData.colors.primary }}
                  >
                    Order Now
                  </button>
                  <button
                    onClick={() => {
                      setShowQuiz(false);
                      setQuizStep(0);
                    }}
                    className="px-8 py-3 rounded-full border-2"
                    style={{ borderColor: beverageData.colors.primary, color: beverageData.colors.primary }}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

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