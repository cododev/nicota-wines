import React, { useState, useEffect } from 'react';
import { grapeSlides } from '../data/wines';

export default function GrapeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(c => (c + 1) % grapeSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = grapeSlides[currentSlide];

  return (
    <section className="py-20 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-amber-500 text-sm tracking-[0.3em] uppercase font-medium">
            Discover Our Grapes
          </span>
          <h2 className="text-4xl font-serif font-bold mt-4">The Noble Varieties</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[300px]">
          <div className="text-center lg:text-left">
            <div className="text-6xl mb-4">🍇</div>
            <h3 className="text-3xl font-serif font-bold mb-2">{slide.grape}</h3>
            <p className="text-amber-500 mb-4">{slide.region}</p>
            <p className="text-stone-300 mb-6">{slide.description}</p>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {slide.characteristics.map((char, i) => (
                <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                  {char}
                </span>
              ))}
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center">
            <div className="relative h-64 w-64 bg-gradient-to-br from-amber-900/30 to-stone-900 rounded-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm text-stone-400 mb-2">Color Profile</div>
                <div className="text-xl font-semibold text-amber-500">{slide.color}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {grapeSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-colors ${i === currentSlide ? 'bg-amber-500' : 'bg-white/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
