// src/components/WineModal.jsx
import React from 'react';
import { X, Award } from 'lucide-react';
import { flags } from '../utils/flags';

export default function WineModal({ wine, onClose, onAddToCart }) {
  if (!wine) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-md">
          <X className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-2">
          <div className="relative h-56 md:h-full min-h-[300px] bg-gradient-to-br from-stone-100 to-stone-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-48 bg-gradient-to-b from-stone-700 to-stone-900 rounded-t-full" />
            </div>
            <div className="absolute top-4 left-4 flex items-center space-x-2 bg-white/90 px-3 py-1.5 rounded-sm">
              <span className="text-2xl">{flags[wine.country] || '🏳️'}</span>
              <span className="text-sm font-semibold">{wine.country}</span>
            </div>
          </div>

          <div className="p-6">
            <span className="text-sm font-medium text-amber-600 tracking-wide uppercase">
              {wine.type}
            </span>
            <h2 className="font-serif text-xl font-bold text-stone-900 mt-2 mb-2">
              {wine.name}
            </h2>
            <p className="text-stone-500 text-sm mb-4">{wine.region}</p>

            {wine.awards?.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-4">
                {wine.awards.map((award, i) => (
                  <span key={i} className="inline-flex items-center text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-sm">
                    <Award className="h-3 w-3 mr-1" />{award}
                  </span>
                ))}
              </div>
            )}

            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              {wine.description}
            </p>

            <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
              <div className="bg-stone-50 p-2 rounded-sm">
                <span className="text-stone-400 block">Grape</span>
                <span className="font-medium">{wine.grape}</span>
              </div>
              <div className="bg-stone-50 p-2 rounded-sm">
                <span className="text-stone-400 block">Alcohol</span>
                <span className="font-medium">{wine.alcohol}</span>
              </div>
              <div className="bg-stone-50 p-2 rounded-sm">
                <span className="text-stone-400 block">Serving</span>
                <span className="font-medium">{wine.serving}</span>
              </div>
              <div className="bg-stone-50 p-2 rounded-sm">
                <span className="text-stone-400 block">Pairing</span>
                <span className="font-medium line-clamp-2">{wine.pairing}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <div>
                <span className="text-xs text-stone-400 block">Per Case</span>
                <span className="text-xl font-bold">{wine.pricePerCase}</span>
              </div>
              <button
                onClick={() => { onAddToCart(wine); onClose(); }}
                className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
