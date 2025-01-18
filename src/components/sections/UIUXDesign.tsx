import Image from 'next/image'

export function UIUXDesign() {
  return (
    <section className="flex items-center justify-center w-full bg-black text-white py-20">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 gap-12">
        {/* Left Column */}
        <div className="flex flex-col gap-6 lg:w-1/2">
          <span className="text-[#FFD700]">OUR CUSTOM AND TAILORED</span>
          
          <h2 className="text-4xl">Website Design UI/UX</h2>
          
          <p>
            When it comes to your business, every detail matters. Our attention to UI helps visitors save time and enhances their overall experience. This not only attracts more customers, but also boosts your credibility while significantly cutting down on unnecessary costs.
          </p>
          
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-2">
              <span>✓</span>
              Understand your goals and pain points.
            </li>
            <li className="flex items-center gap-2">
              <span>✓</span>
              Conduct user research and strategy.
            </li>
            <li className="flex items-center gap-2">
              <span>✓</span>
              Discuss aesthetic colors and layouts.
            </li>
            <li className="flex items-center gap-2">
              <span>✓</span>
              Reflect your brand and unique values.
            </li>
          </ul>

          <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full w-fit">
            Book a discovery call →
          </button>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2">
          <Image 
            src="/assets/ui-examples.png"
            alt="Collection of UI/UX design examples showing various interfaces and mockups"
            width={600}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
} 