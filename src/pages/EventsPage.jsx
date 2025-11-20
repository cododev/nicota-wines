import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { recentEvents } from '../data/wines';

export default function EventsPage() {
  const upcoming = recentEvents.filter(e => e.status === 'upcoming');
  const completed = recentEvents.filter(e => e.status === 'completed');

  return (
    <div className="pt-20">
      <section className="bg-stone-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-amber-500 text-sm tracking-[0.3em] uppercase font-medium">Stay Updated</span>
          <h1 className="text-4xl font-serif font-bold mt-3">Events & Tastings</h1>
        </div>
      </section>
      
      {completed.length > 0 && (
        <section className="py-10 bg-amber-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-xl font-serif font-bold mb-6">Recent Highlights</h2>
            {completed.map((event) => (
              <div key={event.id} className="bg-white rounded-sm shadow-sm p-6 mb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded mb-2">Completed</span>
                    <h3 className="text-lg font-serif font-bold">{event.title}</h3>
                    <p className="text-stone-600 text-sm mt-1">{event.description}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-stone-500">
                      <span><Calendar className="h-4 w-4 inline mr-1" />{event.date}</span>
                      <span><MapPin className="h-4 w-4 inline mr-1" />{event.location}</span>
                    </div>
                  </div>
                  {event.highlights && (
                    <div className="flex flex-wrap gap-2">
                      {event.highlights.map((h, i) => (
                        <span key={i} className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded">{h}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      
      <section className="py-10 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-xl font-serif font-bold mb-6">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcoming.map((event) => (
              <div key={event.id} className="bg-white rounded-sm shadow-sm overflow-hidden">
                <div className="p-5">
                  <span className="inline-block px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded mb-2">{event.type}</span>
                  <h3 className="text-lg font-serif font-bold mb-2">{event.title}</h3>
                  <p className="text-stone-600 text-sm mb-3">{event.description}</p>
                  <div className="space-y-1 text-sm text-stone-500">
                    <div className="flex items-center"><Calendar className="h-4 w-4 text-amber-500 mr-2" />{event.date}</div>
                    {event.time && <div className="flex items-center"><Clock className="h-4 w-4 text-amber-500 mr-2" />{event.time}</div>}
                    <div className="flex items-center"><MapPin className="h-4 w-4 text-amber-500 mr-2" />{event.location}</div>
                  </div>
                  {event.price && (
                    <div className="flex items-center justify-between pt-4 mt-4 border-t">
                      <span className="font-bold text-amber-600">{event.price}</span>
                      <button className="px-4 py-2 bg-stone-900 hover:bg-amber-600 text-white text-sm font-medium">Reserve</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-stone-900 text-white p-8 rounded-sm">
            <h2 className="text-xl font-serif font-bold mb-3">Host a Private Event</h2>
            <p className="text-stone-300 text-sm mb-4">Corporate tastings, birthdays, or special occasions.</p>
            <button className="px-6 py-3 bg-amber-600 hover:bg-amber-500 font-semibold">Enquire Now</button>
          </div>
        </div>
      </section>
    </div>
  );
}
