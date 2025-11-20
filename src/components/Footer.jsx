import React from 'react';
import { Wine, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer({ setActiveSection }) {
  return (
    <footer className="bg-stone-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                <Wine className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-serif font-bold">NICOTA</span>
            </div>
            <p className="text-stone-400 text-sm mb-4">
              Nigeria's premier wine importer since 2015.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-stone-400 hover:text-amber-500">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-500">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-500">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Explore</h4>
            <ul className="space-y-2">
              {['collection', 'events', 'tours', 'gallery'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => setActiveSection(id)}
                    className="text-stone-400 hover:text-amber-500 text-sm capitalize"
                  >
                    {id}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Wines</h4>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li>Italian</li>
              <li>French</li>
              <li>Canadian</li>
              <li>Icewines</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li className="flex items-center">
                <MapPin className="h-3 w-3 text-amber-500 mr-2" />
                Victoria Island, Lagos
              </li>
              <li className="flex items-center">
                <Phone className="h-3 w-3 text-amber-500 mr-2" />
                +234 (0) 800 NICOTA
              </li>
              <li className="flex items-center">
                <Mail className="h-3 w-3 text-amber-500 mr-2" />
                info@nicotawines.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-stone-800 py-6">
        <div className="max-w-7xl mx-auto px-6 text-xs text-stone-500 flex justify-between">
          <p>© 2025 Nicota Wines</p>
          <p>Drink Responsibly • 18+</p>
        </div>
      </div>
    </footer>
  );
}
