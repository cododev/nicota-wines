import { useState, useCallback } from 'react';

export function useCart() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((wine) => {
    setCart(currentCart => {
      const existing = currentCart.find(item => item.id === wine.id);
      if (existing) {
        return currentCart.map(item =>
          item.id === wine.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...currentCart, { ...wine, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart(currentCart => currentCart.filter(item => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id, delta) => {
    setCart(currentCart =>
      currentCart
        .map(item => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : item;
          }
          return item;
        })
        .filter(item => item.quantity > 0)
    );
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(price);
  };

  return {
    cart,
    cartTotal,
    cartCount,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    formatPrice
  };
}
