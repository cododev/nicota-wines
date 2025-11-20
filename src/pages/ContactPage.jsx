import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="pt-20">
      <section className="bg-stone-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-amber-500 text-sm tracking-[0.3em] uppercase font-medium">Get in Touch</span>
          <h1 className="text-4xl font-serif font-bold mt-3">Contact Us</h1>
        </div>
      </section>
      
      <section className="py-10 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-sm shadow-sm">
            <h2 className="text-lg font-serif font-bold mb-4">Contact Info</h2>
            <div className="space-y-3">
              {[
                { icon: MapPin, label: 'Victoria Island, Lagos' },
                { icon: Phone, label: '+234 (0) 800 NICOTA' },
                { icon: Mail, label: 'info@nicotawines.com' },
                { icon: Clock, label: 'Mon-Fri: 9AM-6PM' }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <item.icon className="h-4 w-4 text-amber-600" />
                  </div>
                  <span className="text-sm text-stone-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2 bg-white p-5 rounded-sm shadow-sm">
            <h2 className="text-lg font-serif font-bold mb-4">Send Message</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Name *"
                  required
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  className="px-3 py-2 border border-stone-200 rounded-sm text-sm focus:outline-none focus:border-amber-500"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  required
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  className="px-3 py-2 border border-stone-200 rounded-sm text-sm focus:outline-none focus:border-amber-500"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  type="tel"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={e => setForm({...form, phone: e.target.value})}
                  className="px-3 py-2 border border-stone-200 rounded-sm text-sm focus:outline-none focus:border-amber-500"
                />
                <select
                  required
                  value={form.subject}
                  onChange={e => setForm({...form, subject: e.target.value})}
                  className="px-3 py-2 border border-stone-200 rounded-sm text-sm bg-white focus:outline-none focus:border-amber-500"
                >
                  <option value="">Subject *</option>
                  <option>Wine Orders</option>
                  <option>Events</option>
                  <option>Wine Tours</option>
                  <option>Corporate Inquiries</option>
                  <option>Other</option>
                </select>
              </div>
              <textarea
                placeholder="Message *"
                required
                rows={4}
                value={form.message}
                onChange={e => setForm({...form, message: e.target.value})}
                className="w-full px-3 py-2 border border-stone-200 rounded-sm text-sm resize-none focus:outline-none focus:border-amber-500"
              />
              <button type="submit" className="px-5 py-2 bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold transition-colors">
                <Send className="h-4 w-4 inline mr-2" />Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
