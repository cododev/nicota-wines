import React, { useState } from 'react';
import { Wine, ShoppingCart, Menu, X } from 'lucide-react';

export default function Navigation({ activeSection, setActiveSection, cartCount, onCartClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'collection', label: 'Collection' },
    { id: 'events', label: 'Events' },
    { id: 'tours', label: 'Wine Tours' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button onClick={() => setActiveSection('home')} className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center group-hover:bg-amber-500 transition-colors">
              <Wine className="h-5 w-5 text-white" />
            </div>
            <div className="text-white">
              <span className="text-xl font-serif font-bold tracking-wide">NICOTA</span>
              <span className="block text-[10px] tracking-[0.3em] text-amber-500 uppercase">Wine Imports</span>
            </div>
          </button>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${activeSection === item.id ? 'text-amber-500' : 'text-white/80 hover:text-white'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={onCartClick} className="relative p-2 text-white/80 hover:text-white">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-white">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-sm transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="mt-20 flex flex-col px-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left py-3 px-4 rounded-lg text-lg font-medium transition-colors ${
                activeSection === item.id ? 'text-amber-500 bg-amber-500/10' : 'text-white/80 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
