import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="bg-[#ECEBE4] border-t border-[#DADDD8] py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding Section */}
          <div className="col-span-1 md:col-span-2">
            
            <p className="mt-4 text-[#1C1C1C] font-sans font-medium">
              Share your thoughts and experiences with the world through
              ByteCraft.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-display font-semibold text-[#1C1C1C] tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-base text-[#1C1C1C] hover:text-[#5A5A5A] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/all-posts"
                  className="text-base text-[#1C1C1C] hover:text-[#5A5A5A] transition-colors">
                  All Posts
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-display font-semibold text-[#1C1C1C] tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-[#1C1C1C] hover:text-[#5A5A5A] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-[#1C1C1C] hover:text-[#5A5A5A] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-[#DADDD8] pt-8">
          <p className="text-base text-[#1C1C1C] text-center">
            &copy; {new Date().getFullYear()} ByteCraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
