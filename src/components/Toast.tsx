import React from "react";
import { useCart } from "../context/CartContext";

export const Toast: React.FC = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#801818] text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-[#661212] font-sans">
      <span className="text-lg">🎂</span>
      <span className="text-xs font-bold uppercase tracking-wider">
        {toastMessage}
      </span>
    </div>
  );
};
