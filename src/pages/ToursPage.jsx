import React from 'react';
import { Globe, Star, Check } from 'lucide-react';
import { tours } from '../data/wines';

export default function ToursPage() {
  return (
    <div className="pt-20">
      <section className="bg-stone-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-amber-500 text-sm tracking-[0.3em] uppercase font-medium">Wine Tourism</span>
          <h1 className="text-4xl font-serif font-bold mt-3">Wine Tours</h1>
        </div>
      </section>
      
      <section className="py-10 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-4">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-sm shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-3">
                <div className="bg-gradient-to-br from-stone-900 to-stone-800 text-white p-5">
                  <div className="flex items-center space-x-2 mb-2">
                    <Globe className="h-4 w-4 text-amber-500" />
                    <span className="text-amber-500 text-sm">{tour.country}</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold mb-1">{tour.title}</h3>
                  <p className="text-stone-300 text-sm mb-3">{tour.duration}</p>
                  <span className="text-lg font-bold text-amber-500">{tour.price}</span>
                </div>
                <div className="md:col-span-2 p-5">
                  <p className="text-stone-600 text-sm mb-3">{tour.description}</p>
                  <div className="grid md:grid-cols-2 gap-3 mb-3">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wide mb-2">Highlights</h4>
                      <ul className="space-y-1">
                        {tour.highlights.map((h, i) => (
                          <li key={i} className="flex items-start text-xs text-stone-600">
                            <Star className="h-3 w-3 text-amber-500 mr-1 mt-0.5" />{h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wide mb-2">Includes</h4>
                      <ul className="space-y-1">
                        {tour.includes.map((item, i) => (
                          <li key={i} className="flex items-start text-xs text-stone-600">
                            <Check className="h-3 w-3 text-green-500 mr-1 mt-0.5" />{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t">
                    <span className="text-xs text-stone-500">Best: {tour.bestTime}</span>
                    <button className="px-4 py-2 bg-stone-900 hover:bg-amber-600 text-white text-xs font-medium">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
