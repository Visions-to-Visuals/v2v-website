import Image from 'next/image'

export function WebsiteDevelopment() {
  return (
    <section className="flex items-center justify-center w-full bg-black text-white py-20">
      <div className="flex flex-col uiuxbreak:flex-row max-w-7xl mx-auto px-4 gap-12 justify-between">
        {/* Left Column */}
        <div className="flex flex-col gap-6 uiuxbreak:w-2/5">
          <div className="flex flex-col gap-1">
            <span className="text-[12px] md:text-base text-[#FFE45B]">OUR MODERN AND SECURE</span>
            <h2 className="text-2xl md:text-4xl">Website Development</h2>
          </div>
          
          <p className="text-lg text-gray-300">
            By optimizing speed and functionality, we enhance user engagement and retention to contribute to your business's success. No matter the complexity of the website, we find the best solution to keep you and your visitors happy.
          </p>
          
          <ul className="flex flex-col gap-4 text-white mt-2">
            <li className="flex items-center gap-2">
              <Image 
                src="/assets/check.svg"
                alt="Check mark"
                width={18}
                height={19}
                className="w-[18px] h-[19px]"
              />
              Ensure responsiveness on all devices.
            </li>
            <li className="flex items-center gap-2">
              <Image 
                src="/assets/check.svg"
                alt="Check mark"
                width={18}
                height={19}
                className="w-[18px] h-[19px]"
              />
              Provide search engine optimization.
            </li>
            <li className="flex items-center gap-2">
              <Image 
                src="/assets/check.svg"
                alt="Check mark"
                width={18}
                height={19}
                className="w-[18px] h-[19px]"
              />
              Integrate blogs, e-commerce, etc.
            </li>
            <li className="flex items-center gap-2">
              <Image 
                src="/assets/check.svg"
                alt="Check mark"
                width={18}
                height={19}
                className="w-[18px] h-[19px]"
              />
              Optimize speed and performance.
            </li>
          </ul>

          <div className="flex justify-center mobile:justify-start">
            <button className="w-[calc(100%-2rem)] mobile:w-auto flex items-center justify-center gap-3 bg-white text-black px-6 py-3 rounded-full mb-0 uiuxbreak:mb-24 hover:bg-gray-100 transition-colors">
              Book a discovery call
              <Image 
                src="/assets/arrow.svg"
                alt="Arrow"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 flex justify-center">
          <Image 
            src="/assets/development-examples.png"
            alt="Website development examples showing performance metrics and responsive design"
            width={600}
            height={600}
            className="w-full h-auto max-w-[500px] uiuxbreak:max-w-full"
          />
        </div>
      </div>
    </section>
  )
} 