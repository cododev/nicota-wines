import React from 'react';
import { Award, Users, Globe, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="bg-stone-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-amber-500 text-sm tracking-[0.3em] uppercase font-medium">Our Story</span>
          <h1 className="text-4xl font-serif font-bold mt-3">About Nicota Wines</h1>
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-stone-600 mb-4">
            Founded in Lagos, NicotaWines has established itself as Nigeria's premier wine importer, 
            bringing exceptional wines from Canada, Italy, and France to discerning palates across the nation.
          </p>
          <p className="text-stone-600 mb-4">
            Our portfolio spans over 35 labels, from Sicily's bold Nero d'Avola to Piedmont's sweet Moscato, 
            from Bordeaux's prestigious Crémants to Niagara's rare icewines. Each wine is personally selected 
            for quality, authenticity, and market appeal.
          </p>
          <p className="text-stone-600">
            Beyond importing, we create experiences. Our tasting events educate and delight, while our wine 
            tours offer firsthand encounters with the world's greatest vineyards.
          </p>
        </div>
      </section>
      
      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: Award, title: 'Quality', desc: 'Hand-selected excellence' },
              { icon: Users, title: 'Education', desc: 'Wine knowledge sharing' },
              { icon: Globe, title: 'Authenticity', desc: 'Direct winery relations' },
              { icon: Heart, title: 'Passion', desc: 'Love in every bottle' }
            ].map((v, i) => (
              <div key={i} className="text-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <v.icon className="h-5 w-5 text-amber-600" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{v.title}</h3>
                <p className="text-stone-600 text-xs">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { n: '37', l: 'Labels' },
            { n: '3', l: 'Continents' },
            { n: '10+', l: 'Years' },
            { n: '500+', l: 'Clients' }
          ].map((s, i) => (
            <div key={i}>
              <div className="text-2xl font-bold text-amber-500 mb-1">{s.n}</div>
              <div className="text-stone-400 text-xs uppercase">{s.l}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
