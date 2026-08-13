import React from 'react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const { isCartOpen, setIsCartOpen, cart, updateQuantity, removeFromCart, cartTotal, clearCart, navigateTo, showToast } = useCart();

  if (!isCartOpen) return null;

  const freeShippingThreshold = 75;
  const progressPercent = Math.min(100, (cartTotal / freeShippingThreshold) * 100);
  const amountNeeded = (freeShippingThreshold - cartTotal).toFixed(2);

  const handleCheckout = () => {
    showToast('Order placed successfully! Thank you for choosing Cravie.');
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-[#222225]/50 backdrop-blur-sm transition-opacity"
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#fbf4ea] shadow-2xl flex flex-col justify-between border-l border-[#ebd8c5]">
          
          {/* Header */}
          <div className="p-6 border-b border-[#ebd8c5] flex justify-between items-center bg-[#801818] text-white">
            <div className="flex items-center gap-2">
              <span className="text-xl">🎂</span>
              <h2 className="font-display text-2xl font-extrabold">Your Order</h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-white hover:text-[#fce8ea] p-1.5 rounded-full"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-white p-4 border-b border-[#ebd8c5] text-xs text-[#222225]">
            {cartTotal >= freeShippingThreshold ? (
              <p className="font-bold text-[#596613] flex items-center gap-1 mb-2">
                <span>🚚</span> You unlocked Free Same-Day Express Delivery!
              </p>
            ) : (
              <p className="text-[#666666] mb-2 font-semibold">
                Add <span className="font-bold text-[#801818]">${amountNeeded}</span> more for Free Express Delivery!
              </p>
            )}
            <div className="w-full bg-[#ebd8c5] h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#801818] h-full transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-[#fce8ea] text-[#801818] rounded-full flex items-center justify-center mx-auto text-3xl">
                  🍰
                </div>
                <p className="font-display text-xl font-extrabold text-[#222225]">Your cart is empty</p>
                <p className="text-xs text-[#666666]">
                  Looks like you haven't added any Cravie cheesecake slices yet!
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigateTo('collections');
                  }}
                  className="bg-[#801818] text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider shadow-md"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              cart.map((item, idx) => (
                <div
                  key={`${item.product.id}-${idx}`}
                  className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-[#ebd8c5] shadow-sm"
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-xl shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-sm font-extrabold text-[#222225] truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-[10px] text-[#666666]">
                      {item.selectedFlavor || 'Strawberry Glaze'} {item.selectedSize ? `• ${item.selectedSize}` : ''}
                    </p>
                    <p className="font-extrabold text-[#801818] text-xs mt-1">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>

                    {/* Stepper */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-[#ebd8c5] rounded-lg bg-[#fbf4ea]">
                        <button
                          onClick={() => updateQuantity(item.product.id, -1)}
                          className="px-2 py-0.5 font-bold text-xs text-[#801818]"
                        >
                          -
                        </button>
                        <span className="px-2 font-bold text-xs">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, 1)}
                          className="px-2 py-0.5 font-bold text-xs text-[#801818]"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-xs text-red-600 hover:text-red-800"
                        title="Remove item"
                      >
                        <span className="material-symbols-outlined text-[16px]">delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[#ebd8c5] bg-white space-y-4">
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-[#666666]">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#666666]">
                  <span>Estimated Delivery</span>
                  <span>{cartTotal >= freeShippingThreshold ? 'FREE' : '$5.00'}</span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-[#222225] pt-2 border-t border-[#ebd8c5]">
                  <span>Total</span>
                  <span className="text-[#801818]">
                    ${(cartTotal + (cartTotal >= freeShippingThreshold ? 0 : 5)).toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-[#801818] hover:bg-[#661212] text-white py-3.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md transition-all"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
