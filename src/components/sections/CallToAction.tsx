'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Step {
  number: number;
  title: string;
}

export function CallToAction() {
  const steps: Step[] = [
    { number: 1, title: "Learn about your business" },
    { number: 2, title: "Evaluate your pain-points" },
    { number: 3, title: "Discuss pricing and timeline" }
  ];

  const [starSizes, setStarSizes] = useState([24, 24, 24, 24]); // Default sizes

  useEffect(() => {
    // Generate random sizes only on the client side
    const MIN_STAR_SIZE = 18;
    const MAX_STAR_SIZE = 32;
    const newSizes = Array(4).fill(0).map(() => 
      Math.floor(Math.random() * (MAX_STAR_SIZE - MIN_STAR_SIZE + 1)) + MIN_STAR_SIZE
    );
    setStarSizes(newSizes);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <section className="flex flex-col items-center w-full bg-white text-black pb-20 pt-24 relative">
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .star-float-1 {
          animation: float 4s ease-in-out infinite;
        }
        .star-float-2 {
          animation: float 4.5s ease-in-out infinite;
          animation-delay: 0.8s;
        }
        .star-float-3 {
          animation: float 5.5s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        .star-float-4 {
          animation: float 4.8s ease-in-out infinite;
          animation-delay: 0.3s;
        }
      `}</style>

      {/* Decorative Stars */}
      <div className="absolute top-48 sm:top-16 lg:top-36 left-[7%] lg:left-[15%] star-float-1">
        <Image src="/assets/Star.svg" alt="" width={starSizes[0]} height={starSizes[0]} />
      </div>
      <div className="absolute top-48 sm:top-16 lg:top-36 right-[7%] lg:right-[15%] star-float-2">
        <Image src="/assets/Star.svg" alt="" width={starSizes[1]} height={starSizes[1]} />
      </div>
      <div className="absolute top-28 left-[25%] star-float-3 hidden morestars:block">
        <Image src="/assets/Star.svg" alt="" width={starSizes[2]} height={starSizes[2]} />
      </div>
      <div className="absolute top-28 right-[25%] star-float-4 hidden morestars:block">
        <Image src="/assets/Star.svg" alt="" width={starSizes[3]} height={starSizes[3]} />
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full relative">
        <div className="flex flex-col items-center text-center">
          {/* Top Tag */}
          <span className="text-[#EA3D25] text-[14px]">IT'S ABOUT WORKING WITH THE RIGHT PEOPLE</span>

          {/* Main Title */}
          <h2 className="text-m-h2 mb-12 md:mb-24 md:text-h2">Ready to level up your business?</h2>

          {/* CTA Button */}
          <button className="flex font-[500] items-center gap-2 bg-black text-white px-6 py-3 rounded-full mb-12 md:mb-32">
            Yes, let's talk business
            <Image 
              src="/assets/arrow-white.svg"
              alt="Arrow"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </button>

          {/* Discovery Call Info */}
          <p className="mb-8 text-[#3D3D3D] text-[18px]">Here's what to expect in our 45-minute discovery call:</p>

          {/* Steps */}
          <div className="flex justify-center w-full">
            <div className="flex flex-col uiuxbreak:flex-row gap-6 uiuxbreak:gap-16">
              {steps.map((step) => (
                <div key={step.number} className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-9 h-9 text-[24px] bg-black text-white text-base font-[600] rounded-lg shrink-0">
                    {step.number}
                  </div>
                  <p className="text-[18px] text-[#000000] whitespace-nowrap font-[500]">{step.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 