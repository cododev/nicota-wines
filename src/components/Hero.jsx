import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero({ onExplore, onShop }) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-900/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-stone-800/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <span className="inline-block text-amber-500 text-sm tracking-[0.4em] uppercase font-medium mb-8">
          Premium Wine Imports
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
          Exceptional Wines<br />
          <span className="text-amber-500">Three Continents</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-12">
          Nigeria's premier destination for curated wines from Canada, Italy, and France. 
          Over 35 labels, exclusive tastings, and unforgettable wine tours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={onShop} className="px-10 py-4 bg-amber-600 hover:bg-amber-500 text-white font-semibold transition-all transform hover:scale-105">
            Explore Collection
          </button>
          <button onClick={onExplore} className="px-10 py-4 border-2 border-white/30 hover:border-white text-white font-semibold hover:bg-white/10">
            Wine Events
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  );
}
