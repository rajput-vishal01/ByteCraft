import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Container } from "./index";

function HeroSection() {
  return (
    <section className="py-20 sm:py-32 bg-[#FFFFFF]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#1C1C1C] leading-tight">
              Share Your Story with
              <span className="text-[#ffff] dark:text-[#00000067]">
                {" "}
                ByteCraft
              </span>
            </h1>
            <p className="text-xl text-[#1C1C1C] max-w-2xl">
              A modern blogging platform for developers and creative minds.
              Express yourself and share knowledge with the community.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/all-posts"
                className="bg-[#1C1C1C] text-[#FAFAFF] px-6 py-3 rounded-lg shadow-lg hover:bg-[#FAFAFF] hover:text-[#1C1C1C] transition-colors inline-flex items-center group">
                Read Blogs
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
            </div>
          </div>

          {/* Right Content */}
          <div className="relative hidden lg:block">
            {/* Decorative Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#DADDD8]/30 to-[#777777]/30 rounded-3xl transform rotate-3"></div>
            {/* Main Visual Placeholder */}
            <div className="relative rounded-2xl shadow-2xl bg-gradient-to-r from-[#DADDD8]/10 to-[#EEF0F2]/10 aspect-video"></div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
