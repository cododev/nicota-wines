import React, { useState } from 'react';
import WineCard from '../components/WineCard';
import { wines } from '../data/wines';

export default function CollectionPage({ onSelectWine, onAddToCart }) {
  const [filter, setFilter] = useState('all');
  const [country, setCountry] = useState('all');
  
  const categories = [{ id: 'all', label: 'All' }, { id: 'red', label: 'Red' }, { id: 'white', label: 'White' }, { id: 'sparkling', label: 'Sparkling' }, { id: 'rose', label: 'Rosé' }, { id: 'dessert', label: 'Dessert' }, { id: 'spirits', label: 'Spirits' }];
  const countryOpts = [{ id: 'all', label: 'All' }, { id: 'Italy', label: 'Italy' }, { id: 'France', label: 'France' }, { id: 'Canada', label: 'Canada' }];
  
  const filtered = wines.filter(w => (filter === 'all' || w.category === filter) && (country === 'all' || w.country === country));

  return (
    <div className="pt-20">
      <section className="bg-stone-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-amber-500 text-sm tracking-[0.3em] uppercase font-medium">Complete Collection</span>
          <h1 className="text-4xl font-serif font-bold mt-3 mb-2">Our Wines</h1>
          <p className="text-stone-400">{wines.length} premium labels from three continents</p>
        </div>
      </section>
      
      <section className="bg-white border-b sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex items-center space-x-1 overflow-x-auto pb-2 md:pb-0">
              {categories.map((c) => (
                <button key={c.id} onClick={() => setFilter(c.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-sm whitespace-nowrap ${filter === c.id ? 'bg-stone-900 text-white' : 'text-stone-600 hover:bg-stone-100'}`}>
                  {c.label}
                </button>
              ))}
            </div>
            <select value={country} onChange={(e) => setCountry(e.target.value)} className="text-sm border rounded-sm px-3 py-1.5 bg-white">
              {countryOpts.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
            </select>
          </div>
        </div>
      </section>
      
      <section className="py-10 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm text-stone-500 mb-4">{filtered.length} wines</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {filtered.map((wine) => <WineCard key={wine.id} wine={wine} onSelect={onSelectWine} onAddToCart={onAddToCart} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
