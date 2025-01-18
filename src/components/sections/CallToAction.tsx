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

  return (
    <section className="flex flex-col items-center w-full bg-white text-black py-20 relative">
      {/* Decorative Stars */}
      <div className="absolute top-12 left-[15%]">
        <Image src="/assets/Star.svg" alt="" width={24} height={24} />
      </div>
      <div className="absolute top-12 right-[15%]">
        <Image src="/assets/Star.svg" alt="" width={24} height={24} />
      </div>
      <div className="absolute top-32 left-[25%]">
        <Image src="/assets/Star.svg" alt="" width={16} height={16} />
      </div>
      <div className="absolute top-32 right-[25%]">
        <Image src="/assets/Star.svg" alt="" width={16} height={16} />
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full relative">
        <div className="flex flex-col items-center text-center">
          {/* Top Tag */}
          <span className="text-[#FF6B6B] mb-6">IT'S ABOUT WORKING WITH THE RIGHT PEOPLE</span>

          {/* Main Title */}
          <h2 className="text-4xl mb-8">Ready to level up your business?</h2>

          {/* CTA Button */}
          <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full mb-16">
            Yes, let's talk business →
          </button>

          {/* Discovery Call Info */}
          <p className="mb-8">Here's what to expect in our 45-minute discovery call:</p>

          {/* Steps */}
          <div className="flex flex-col md:flex-row gap-8 w-full max-w-3xl">
            {steps.map((step) => (
              <div key={step.number} className="flex items-center gap-4 flex-1">
                <span className="flex items-center justify-center w-12 h-12 bg-black text-white text-xl font-bold rounded-lg shrink-0">
                  {step.number}
                </span>
                <p className="text-lg whitespace-nowrap">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 