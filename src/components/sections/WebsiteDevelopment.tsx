import Image from 'next/image'

export function WebsiteDevelopment() {
  return (
    <section className="flex items-center justify-center w-full bg-black text-white py-20">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 gap-12">
        {/* Left Column - Development Examples */}
        <div className="lg:w-1/2">
          <Image 
            src="/assets/development-examples.png"
            alt="Website development examples showing performance metrics and responsive design"
            width={600}
            height={600}
            className="w-full h-auto"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 lg:w-1/2">
          <span className="text-[#FFD700]">OUR MODERN AND SECURE</span>
          
          <h2 className="text-4xl">Website Development</h2>
          
          <p>
            By optimizing speed and functionality, we enhance user engagement and retention to contribute to your business's success. No matter the complexity of the website, we find the best solution to keep you and your visitors happy.
          </p>
          
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-2">
              <span>✓</span>
              Ensure responsiveness on all devices.
            </li>
            <li className="flex items-center gap-2">
              <span>✓</span>
              Provide search engine optimization.
            </li>
            <li className="flex items-center gap-2">
              <span>✓</span>
              Integrate blogs, e-commerce, etc.
            </li>
            <li className="flex items-center gap-2">
              <span>✓</span>
              Optimize speed and performance.
            </li>
          </ul>

          <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full w-fit">
            Book a discovery call →
          </button>
        </div>
      </div>
    </section>
  )
} 