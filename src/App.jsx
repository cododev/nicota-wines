import React, { useState, useEffect } from 'react';
import { useCart } from './hooks/useCart';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import WineModal from './components/WineModal';

// Pages
import HomePage from './pages/HomePage';
import CollectionPage from './pages/CollectionPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import ToursPage from './pages/ToursPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedWine, setSelectedWine] = useState(null);
  const { 
    cart, 
    cartTotal, 
    cartCount, 
    isCartOpen, 
    setIsCartOpen, 
    addToCart, 
    removeFromCart, 
    updateQuantity, 
    formatPrice 
  } = useCart();

  // Scroll to top when section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  // Handle add to cart with sidebar preview
  const handleAddToCart = (wine) => {
    addToCart(wine);
    setIsCartOpen(true);
    setTimeout(() => setIsCartOpen(false), 2000);
  };

  // Render current page based on activeSection
  const renderPage = () => {
    switch (activeSection) {
      case 'home':
        return (
          <HomePage 
            setActiveSection={setActiveSection} 
            onSelectWine={setSelectedWine} 
            onAddToCart={handleAddToCart} 
          />
        );
      case 'collection':
        return (
          <CollectionPage 
            onSelectWine={setSelectedWine} 
            onAddToCart={handleAddToCart} 
          />
        );
      case 'events':
        return <EventsPage />;
      case 'tours':
        return <ToursPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <HomePage 
            setActiveSection={setActiveSection} 
            onSelectWine={setSelectedWine} 
            onAddToCart={handleAddToCart} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans antialiased">
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <main>
        {renderPage()}
      </main>
      
      <Footer setActiveSection={setActiveSection} />
      
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart} 
        cartTotal={cartTotal} 
        onUpdateQuantity={updateQuantity} 
        onRemove={removeFromCart} 
        formatPrice={formatPrice} 
      />
      
      <WineModal 
        wine={selectedWine} 
        onClose={() => setSelectedWine(null)} 
        onAddToCart={handleAddToCart} 
      />
    </div>
  );
}
