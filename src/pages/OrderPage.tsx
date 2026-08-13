import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { PRODUCTS } from "../data/products";
import { OrderDetails } from "../types";

export const OrderPage: React.FC = () => {
  const { cart, cartTotal, clearCart, showToast, navigateTo, addToCart } =
    useCart();

  const [selectedProduct, setSelectedProduct] = useState(
    cart.length > 0 ? cart[0].product : PRODUCTS[0]
  );
  const [flavor, setFlavor] = useState("Strawberry Glaze");
  const [size, setSize] = useState("Whole Cake (8 Slices)");
  const [quantity, setQuantity] = useState(1);

  const [deliveryType, setDeliveryType] = useState<"delivery" | "pickup">(
    "delivery"
  );
  const [customerInfo, setCustomerInfo] = useState<OrderDetails>({
    customerName: "",
    email: "",
    phone: "",
    deliveryType: "delivery",
    address: "",
    city: "New York",
    zipCode: "10001",
    deliveryDate: new Date(Date.now() + 86400000).toISOString().split("T")[0],
    deliveryTime: "12:00 PM - 03:00 PM",
    cakeMessage: "Happy Birthday!",
    specialInstructions: "",
    paymentMethod: "card",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const deliveryFee =
    deliveryType === "delivery" ? (cartTotal >= 75 ? 0 : 5) : 0;
  const taxAmount = cartTotal * 0.08;
  const finalTotal =
    cartTotal > 0
      ? cartTotal + deliveryFee + taxAmount
      : selectedProduct.price * quantity +
        deliveryFee +
        selectedProduct.price * quantity * 0.08;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerInfo.customerName || !customerInfo.phone) {
      showToast("Please fill in your name and contact phone number.");
      return;
    }
    setIsSubmitted(true);
    showToast("Your order has been placed successfully!");
    clearCart();
  };

  if (isSubmitted) {
    return (
      <main className="w-full bg-[#fbf4ea] text-[#222225] py-20 font-sans min-h-[70vh]">
        <div className="max-w-2xl mx-auto px-6 text-center space-y-6">
          <div className="w-20 h-20 bg-[#801818] text-white rounded-full flex items-center justify-center mx-auto text-4xl shadow-lg">
            🎉
          </div>
          <h1 className="font-display text-4xl font-extrabold text-[#801818]">
            Order Confirmed!
          </h1>
          <p className="text-sm text-[#666666] leading-relaxed max-w-lg mx-auto">
            Thank you{" "}
            <span className="font-bold text-[#222225]">
              {customerInfo.customerName}
            </span>
            ! Your Cravie cheesecake order has been received and sent to our
            master baker.
          </p>
          <div className="bg-white p-6 rounded-3xl border border-[#ebd8c5] shadow-sm text-left text-xs space-y-3">
            <div className="flex justify-between border-b border-[#ebd8c5] pb-2">
              <span className="font-bold text-[#801818]">Order Status:</span>
              <span className="font-bold text-[#596613]">
                Freshly Baking 🍰
              </span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Type:</span>
              <span className="font-semibold uppercase">{deliveryType}</span>
            </div>
            <div className="flex justify-between">
              <span>Date & Time:</span>
              <span className="font-semibold">
                {customerInfo.deliveryDate} ({customerInfo.deliveryTime})
              </span>
            </div>
            {customerInfo.cakeMessage && (
              <div className="flex justify-between">
                <span>Message on Cake:</span>
                <span className="font-bold text-[#801818]">
                  "{customerInfo.cakeMessage}"
                </span>
              </div>
            )}
            <div className="flex justify-between border-t border-[#ebd8c5] pt-2 font-bold text-sm text-[#222225]">
              <span>Total Paid:</span>
              <span className="text-[#801818]">${finalTotal.toFixed(2)}</span>
            </div>
          </div>

          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={() => {
                setIsSubmitted(false);
                navigateTo("collections");
              }}
              className="bg-[#801818] text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#661212] transition-colors"
            >
              Browse More Cakes
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full bg-[#fbf4ea] text-[#222225] py-10 font-sans">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="text-center mb-10">
          <span className="bg-[#801818] text-white text-[10px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest inline-block mb-2 shadow-sm">
            ★ EASY ONLINE ORDERING ★
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold text-[#801818] uppercase tracking-tight">
            Order Your Custom Cheesecake
          </h1>
          <p className="text-xs text-[#666666] max-w-lg mx-auto mt-2">
            Select your preferred flavor, size, custom message, and delivery
            slot. Freshly baked and delivered to your doorstep.
          </p>
        </div>

        <form
          onSubmit={handleSubmitOrder}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Left Column: Customization & Customer Info (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Select Cake & Customization */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#ebd8c5] space-y-6">
              <h2 className="font-display text-xl font-extrabold text-[#801818] flex items-center gap-2 border-b border-[#ebd8c5] pb-3">
                <span>1.</span> Cake Customization
              </h2>

              {/* Selected Product Picker */}
              <div>
                <label className="text-xs font-extrabold uppercase text-[#222225] block mb-2">
                  Select Cheesecake:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {PRODUCTS.slice(0, 4).map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedProduct(item)}
                      className={`p-2.5 rounded-2xl border-2 cursor-pointer transition-all text-center ${
                        selectedProduct.id === item.id
                          ? "border-[#801818] bg-[#fce8ea]"
                          : "border-[#ebd8c5] hover:border-[#801818]"
                      }`}
                    >
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-xl mx-auto mb-2"
                      />
                      <p className="font-display font-extrabold text-xs text-[#222225] truncate">
                        {item.name}
                      </p>
                      <p className="text-[10px] font-bold text-[#801818]">
                        ${item.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Flavor Selection */}
              <div>
                <label className="text-xs font-extrabold uppercase text-[#222225] block mb-2">
                  Choose Flavor:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    "Strawberry Glaze",
                    "Matcha Velvet",
                    "Dark Chocolate",
                    "Lemon Zest",
                  ].map((flv) => (
                    <button
                      type="button"
                      key={flv}
                      onClick={() => setFlavor(flv)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold border-2 transition-all ${
                        flavor === flv
                          ? "border-[#801818] bg-[#801818] text-white"
                          : "border-[#ebd8c5] text-[#444] hover:border-[#801818]"
                      }`}
                    >
                      {flv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Portion Size */}
              <div>
                <label className="text-xs font-extrabold uppercase text-[#222225] block mb-2">
                  Portion / Size:
                </label>
                <div className="flex flex-wrap gap-3">
                  {["Single Slice", "Half Cake (4)", "Whole Cake (8)"].map(
                    (sz) => (
                      <button
                        type="button"
                        key={sz}
                        onClick={() => setSize(sz)}
                        className={`py-2 px-4 rounded-xl text-xs font-bold border-2 transition-all ${
                          size === sz
                            ? "border-[#801818] bg-[#801818] text-white"
                            : "border-[#ebd8c5] text-[#444] hover:border-[#801818]"
                        }`}
                      >
                        {sz}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Custom Text on Cake */}
              <div>
                <label className="text-xs font-extrabold uppercase text-[#222225] block mb-1">
                  Message on Cake (Optional):
                </label>
                <input
                  type="text"
                  value={customerInfo.cakeMessage}
                  onChange={(e) =>
                    setCustomerInfo({
                      ...customerInfo,
                      cakeMessage: e.target.value,
                    })
                  }
                  placeholder="e.g. Happy 25th Birthday Sarah!"
                  className="w-full bg-[#fbf4ea] border border-[#ebd8c5] rounded-xl px-4 py-2.5 text-xs font-semibold text-[#222225] focus:outline-none focus:border-[#801818]"
                />
              </div>
            </div>

            {/* Step 2: Delivery vs Pickup & Slot */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#ebd8c5] space-y-6">
              <h2 className="font-display text-xl font-extrabold text-[#801818] flex items-center gap-2 border-b border-[#ebd8c5] pb-3">
                <span>2.</span> Delivery & Date Slot
              </h2>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setDeliveryType("delivery")}
                  className={`flex-1 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider border-2 flex items-center justify-center gap-2 transition-all ${
                    deliveryType === "delivery"
                      ? "border-[#801818] bg-[#801818] text-white shadow-sm"
                      : "border-[#ebd8c5] text-[#444] hover:border-[#801818]"
                  }`}
                >
                  <span>🚚 Doorstep Delivery</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryType("pickup")}
                  className={`flex-1 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider border-2 flex items-center justify-center gap-2 transition-all ${
                    deliveryType === "pickup"
                      ? "border-[#801818] bg-[#801818] text-white shadow-sm"
                      : "border-[#ebd8c5] text-[#444] hover:border-[#801818]"
                  }`}
                >
                  <span>🏪 Bakery Pickup</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-extrabold uppercase text-[#222225] block mb-1">
                    Preferred Date:
                  </label>
                  <input
                    type="date"
                    value={customerInfo.deliveryDate}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        deliveryDate: e.target.value,
                      })
                    }
                    className="w-full bg-[#fbf4ea] border border-[#ebd8c5] rounded-xl px-4 py-2.5 text-xs font-semibold text-[#222225] focus:outline-none focus:border-[#801818]"
                  />
                </div>

                <div>
                  <label className="text-xs font-extrabold uppercase text-[#222225] block mb-1">
                    Time Slot:
                  </label>
                  <select
                    value={customerInfo.deliveryTime}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        deliveryTime: e.target.value,
                      })
                    }
                    className="w-full bg-[#fbf4ea] border border-[#ebd8c5] rounded-xl px-4 py-2.5 text-xs font-semibold text-[#222225] focus:outline-none focus:border-[#801818]"
                  >
                    <option>09:00 AM - 12:00 PM</option>
                    <option>12:00 PM - 03:00 PM</option>
                    <option>03:00 PM - 06:00 PM</option>
                    <option>06:00 PM - 09:00 PM</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: Customer Information */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#ebd8c5] space-y-4">
              <h2 className="font-display text-xl font-extrabold text-[#801818] flex items-center gap-2 border-b border-[#ebd8c5] pb-3">
                <span>3.</span> Customer Contact & Address
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-extrabold uppercase text-[#222225] block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerInfo.customerName}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        customerName: e.target.value,
                      })
                    }
                    placeholder="Jane Doe"
                    className="w-full bg-[#fbf4ea] border border-[#ebd8c5] rounded-xl px-4 py-2.5 text-xs font-semibold text-[#222225] focus:outline-none focus:border-[#801818]"
                  />
                </div>

                <div>
                  <label className="text-xs font-extrabold uppercase text-[#222225] block mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={customerInfo.phone}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        phone: e.target.value,
                      })
                    }
                    placeholder="+1 (800) 123-4567"
                    className="w-full bg-[#fbf4ea] border border-[#ebd8c5] rounded-xl px-4 py-2.5 text-xs font-semibold text-[#222225] focus:outline-none focus:border-[#801818]"
                  />
                </div>
              </div>

              {deliveryType === "delivery" && (
                <div>
                  <label className="text-xs font-extrabold uppercase text-[#222225] block mb-1">
                    Delivery Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerInfo.address}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        address: e.target.value,
                      })
                    }
                    placeholder="123 Bakers Street, Apartment 4B"
                    className="w-full bg-[#fbf4ea] border border-[#ebd8c5] rounded-xl px-4 py-2.5 text-xs font-semibold text-[#222225] focus:outline-none focus:border-[#801818]"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Order Summary & Place Order CTA (5 cols) */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl shadow-sm border border-[#ebd8c5] space-y-6 sticky top-28">
            <h2 className="font-display text-xl font-extrabold text-[#801818] border-b border-[#ebd8c5] pb-3">
              Order Summary
            </h2>

            {/* Cart or Selected Item Display */}
            <div className="space-y-3">
              {cart.length > 0 ? (
                cart.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-[#fbf4ea] rounded-2xl border border-[#ebd8c5]"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-12 h-12 object-cover rounded-xl"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-display font-extrabold text-xs text-[#222225] truncate">
                        {item.product.name}
                      </p>
                      <p className="text-[10px] text-[#666666]">
                        Qty: {item.quantity} • {item.selectedFlavor || flavor}
                      </p>
                    </div>
                    <span className="font-extrabold text-xs text-[#801818]">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))
              ) : (
                <div className="flex items-center gap-3 p-3 bg-[#fbf4ea] rounded-2xl border border-[#ebd8c5]">
                  <img
                    src={selectedProduct.images[0]}
                    alt={selectedProduct.name}
                    className="w-12 h-12 object-cover rounded-xl"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-extrabold text-xs text-[#222225] truncate">
                      {selectedProduct.name}
                    </p>
                    <p className="text-[10px] text-[#666666]">
                      Qty: {quantity} • {flavor}
                    </p>
                  </div>
                  <span className="font-extrabold text-xs text-[#801818]">
                    ${(selectedProduct.price * quantity).toFixed(2)}
                  </span>
                </div>
              )}
            </div>

            {/* Pricing Breakdown */}
            <div className="space-y-2 text-xs text-[#666666] pt-2 border-t border-[#ebd8c5]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>
                  ${(cartTotal || selectedProduct.price * quantity).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>
                  {deliveryFee === 0 ? "FREE" : `$${deliveryFee.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Sales Tax (8%)</span>
                <span>${taxAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-extrabold text-base text-[#222225] pt-2 border-t border-[#ebd8c5]">
                <span>Total Amount</span>
                <span className="text-[#801818]">${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#801818] hover:bg-[#661212] text-white py-4 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              Place Order Now (${finalTotal.toFixed(2)})
            </button>

            <div className="text-center text-[10px] text-[#888888]">
              🔒 100% Secure Checkout • Guaranteed Fresh Delivery
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};
