import React from 'react';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import GrapeSlider from '../components/GrapeSlider';
import WineCard from '../components/WineCard';
import { wines, countries } from '../data/wines';

export default function HomePage({ setActiveSection, onSelectWine, onAddToCart }) {
  const featuredWines = wines.filter(wine => wine.featured);
  
  return (
    <div>
      <Hero onExplore={() => setActiveSection('events')} onShop={() => setActiveSection('collection')} />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[{ num: '37', label: 'Wine Labels' }, { num: '3', label: 'Continents' }, { num: '80+', label: 'Cases/Mission' }, { num: '500+', label: 'Happy Clients' }].map((s, i) => (
              <div key={i}><div className="text-3xl font-bold text-amber-600 mb-1">{s.num}</div><div className="text-stone-600 text-sm">{s.label}</div></div>
            ))}
          </div>
        </div>
      </section>
      
      <GrapeSlider />
      
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-amber-600 text-sm tracking-[0.3em] uppercase font-medium">Our Selection</span>
            <h2 className="text-3xl font-serif font-bold mt-3">Featured Wines</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredWines.map((wine) => <WineCard key={wine.id} wine={wine} onSelect={onSelectWine} onAddToCart={onAddToCart} />)}
          </div>
          <div className="text-center mt-8">
            <button onClick={() => setActiveSection('collection')} className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold group">
              View All {wines.length} Wines<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10"><h2 className="text-3xl font-serif font-bold">Wine Origins</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {countries.map((c) => (
              <div key={c.code} className="bg-stone-50 p-6 rounded-sm hover:bg-stone-100 transition-colors text-center">
                <span className="text-4xl mb-3 block">{c.flag}</span>
                <h3 className="text-lg font-semibold mb-2">{c.name}</h3>
                <p className="text-stone-600 text-sm mb-3">{c.description}</p>
                <div className="flex flex-wrap justify-center gap-1">{c.specialties.map((s, i) => <span key={i} className="text-xs bg-white px-2 py-1 text-stone-600">{s}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">Canada Trade Mission 2025</h2>
          <p className="text-stone-600 mb-6">In September 2025, NicotaWines led 10 Nigerian investors on a landmark trade mission to Canada, resulting in 80+ cases and strategic partnerships.</p>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-3 rounded-sm"><div className="text-xl font-bold text-amber-600">7</div><div className="text-xs text-stone-600">Days</div></div>
            <div className="bg-white p-3 rounded-sm"><div className="text-xl font-bold text-amber-600">80+</div><div className="text-xs text-stone-600">Cases</div></div>
            <div className="bg-white p-3 rounded-sm"><div className="text-xl font-bold text-amber-600">5</div><div className="text-xs text-stone-600">Wineries</div></div>
          </div>
          <button onClick={() => setActiveSection('gallery')} className="px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white font-semibold">View Tour Gallery</button>
        </div>
      </section>
    </div>
  );
}
