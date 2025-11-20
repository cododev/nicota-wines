import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';

export default function CartSidebar({ isOpen, onClose, cart, cartTotal, onUpdateQuantity, onRemove, formatPrice }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-3">
            <ShoppingBag className="h-5 w-5" />
            <h2 className="text-xl font-serif font-bold">Your Cart</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-stone-400 p-8">
            <ShoppingBag className="h-16 w-16 mb-4 opacity-50" />
            <p className="text-lg font-medium">Cart empty</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="w-12 h-16 bg-stone-100 rounded-sm flex items-center justify-center">
                    <div className="w-3 h-10 bg-gradient-to-b from-stone-600 to-stone-800 rounded-t-full" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-xs truncate">{item.name}</h4>
                    <p className="text-xs text-stone-500">{item.country}</p>
                    <p className="font-semibold text-amber-600 text-sm">{formatPrice(item.price)}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <button onClick={() => onUpdateQuantity(item.id, -1)} className="p-0.5 hover:bg-stone-100 rounded">
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-xs">{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, 1)} className="p-0.5 hover:bg-stone-100 rounded">
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <button onClick={() => onRemove(item.id)} className="text-stone-400 hover:text-red-500">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
            <div className="border-t p-6 bg-stone-50">
              <div className="flex justify-between items-center mb-4">
                <span>Total:</span>
                <span className="text-xl font-bold">{formatPrice(cartTotal)}</span>
              </div>
              <button className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
