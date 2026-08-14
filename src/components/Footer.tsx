import React from "react";

export const Footer: React.FC = () => {
  return (
    <>
      {/* Ticker Bar Above Footer */}
      <div className="bg-[#801818] text-white text-[11px] font-bold py-2.5 px-4 uppercase tracking-widest text-center border-b border-white/20">
        CRAVIE PICKS • SIGNATURE • FRESH • WHOLE CAKES • SPECIAL • SWEET SLICES
        • MINISITES • SAVORY
      </div>

      {/* Cravie Menu Footer */}
      <footer className="bg-[#801818] text-white pt-12 pb-8 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-white/20 pb-10">
          {/* Massive Display Logo */}
          <div className="lg:col-span-4">
            <img
              src="https://liliyum.com/cdn/shop/files/liliyum-logos-allsizes_Instagram-profile_copy_400x.png?v=1613708813"
              alt="Liliyum"
              className="w-24 md:w-32 lg:w-40 h-auto object-contain"
            />
          </div>

          {/* Multi-Column Links */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-8 text-xs text-[#f5d5d8] max-w-2xl mx-auto justify-items-center">            <div className="space-y-2">
            <h5 className="font-bold text-white uppercase text-[10px] tracking-wider">
              Discover
            </h5>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-white">
                  Catalog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Featured
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Custom Order
                </a>
              </li>
            </ul>
          </div>

            <div className="space-y-2">
              <h5 className="font-bold text-white uppercase text-[10px] tracking-wider">
                Connect
              </h5>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-white">
                    Socials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Corporate Gifts
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h5 className="font-bold text-white uppercase text-[10px] tracking-wider">
                Guide
              </h5>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Returns & Refunds
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Sustainable Sourcing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Product Care Guide
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto pt-6 text-center md:text-left text-[11px] text-[#f5d5d8]/80">
          © 2024 Cravie Inc. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};
