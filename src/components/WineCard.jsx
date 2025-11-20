// src/components/WineCard.jsx
import React from 'react';
import { Award } from 'lucide-react';
import { flags } from '../utils/flags';

export default function WineCard({ wine, onSelect, onAddToCart }) {
  return (
    <div className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
      <div className="relative h-56 bg-gradient-to-br from-stone-100 to-stone-200 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-36 bg-gradient-to-b from-stone-700 to-stone-900 rounded-t-full relative">
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-stone-600 rounded-full" />
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-8 h-18 bg-stone-50" />
          </div>
        </div>

        <div className="absolute top-2 left-2 flex items-center space-x-1 bg-white/90 px-2 py-1 rounded-sm">
          <span className="text-lg">{flags[wine.country] || '🏳️'}</span>
          <span className="text-[9px] font-semibold text-stone-700">{wine.country}</span>
        </div>

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button
            onClick={() => onSelect(wine)}
            className="px-4 py-2 bg-white text-stone-900 font-semibold text-xs hover:bg-amber-500 hover:text-white transition-colors"
          >
            Details
          </button>
        </div>
      </div>

      <div className="p-3">
        <span className="text-[9px] font-medium text-amber-600 tracking-wide uppercase">
          {wine.type}
        </span>
        <h3 className="font-serif text-xs font-semibold text-stone-900 mt-1 mb-1 leading-snug line-clamp-2">
          {wine.name}
        </h3>
        <p className="text-[10px] text-stone-500 mb-2">{wine.region}</p>

        <div className="flex items-center justify-between pt-2 border-t border-stone-100">
          <span className="text-xs font-bold text-stone-900">{wine.pricePerCase}</span>
          <button
            onClick={() => onAddToCart(wine)}
            className="px-2 py-1 bg-stone-900 hover:bg-amber-600 text-white text-[10px] font-medium transition-colors"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
