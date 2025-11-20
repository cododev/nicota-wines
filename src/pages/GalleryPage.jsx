import React, { useState } from 'react';
import { X, Camera } from 'lucide-react';
import { tourGallery } from '../data/wines';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="pt-20">
      <section className="bg-stone-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-amber-500 text-sm tracking-[0.3em] uppercase font-medium">Memories</span>
          <h1 className="text-4xl font-serif font-bold mt-3">Tour Gallery</h1>
          <p className="text-stone-400 mt-2">Canada Trade Mission • September 2025</p>
        </div>
      </section>
      
      <section className="py-10 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {tourGallery.map((item) => (
              <div key={item.id} onClick={() => setSelectedImage(item)} className="cursor-pointer group relative aspect-square bg-gradient-to-br from-stone-200 to-stone-300 rounded-sm overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="h-10 w-10 text-stone-400" />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-3 text-white">
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <p className="text-xs text-stone-300">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="absolute inset-0 bg-black/80" />
          <div className="relative bg-white max-w-xl w-full rounded-sm overflow-hidden" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedImage(null)} className="absolute top-3 right-3 p-2 bg-white/90 rounded-full z-10"><X className="h-4 w-4" /></button>
            <div className="aspect-video bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center">
              <Camera className="h-16 w-16 text-stone-400" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-serif font-bold mb-1">{selectedImage.title}</h3>
              <p className="text-amber-600 text-sm mb-2">{selectedImage.location} • {selectedImage.date}</p>
              <p className="text-stone-600 text-sm">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
      
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-serif font-bold mb-4 text-center">Mission Highlights</h2>
          <div className="text-stone-600 text-sm space-y-3">
            <p>The Canada Trade Mission 2025 was a landmark achievement for NicotaWines. Supported by the Canadian Trade Commission and the Deputy High Commissioner's office, we led ten Nigerian investors through an immersive exploration of Canadian wine country.</p>
            <p>At Lakeview Wine Co., the delegation experienced firsthand the scale and precision of Canadian winemaking, touring facilities housing over 6 million litres of wine in maturation. The professional tasting sessions resulted in the selection of exceptional products including the Syrah, Gewürztraminer, and rare icewines.</p>
            <p>The mission culminated in a prestigious showcase at Toronto University, where our selected wines received extraordinary enthusiasm from Canadian and Nigerian dignitaries.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
