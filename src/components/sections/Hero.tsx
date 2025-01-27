import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative flex flex-col items-center w-full bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 w-full py-20">
        <div className="flex flex-col items-center text-center">
          <span className="text-[12px] md:text-base text-[#FFE45B] mb-1">TRUSTED DESIGN AND DEVELOPMENT AGENCY</span>
          
          <h1 className="text-h1 mb-6 max-w-4xl">
            <span className="hidden break:inline">Creating websites that look{' '}</span>
            <span className="break:hidden">Creating websites that look{' '}</span>
            <span className="bg-gradient-to-r from-[#EC512B] to-[#F5BF49] text-transparent bg-clip-text">great</span>
            <span className="hidden break:inline"><br /></span>
            <span className="break:hidden">{' '}</span>
            and perform{' '}
            <span className="bg-gradient-to-r from-[#EC512B] to-[#F58F49] text-transparent bg-clip-text">even better</span>
          </h1>
          
          <p className="text-lg text-gray-300 max-w-2xl mb-8">
            We specialize in web design, development and branding.
            <span className="hidden mobile:inline"><br /></span>
            <span className="mobile:hidden">{' '}</span>
            Let's take your awesome business to the next level.
          </p>
          
          <button className="w-[calc(100%-2rem)] mobile:w-auto flex items-center justify-center gap-3 bg-white text-black px-6 py-3 rounded-full mb-24 hover:bg-gray-100 transition-colors">
            Book a discovery call
            <Image 
              src="/assets/arrow.svg"
              alt="Arrow"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </button>

          <div className="relative w-full max-w-6xl mx-auto">
            <Image 
              src="/assets/best-work.png" 
              alt="Our best work showcase"
              width={1200}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
} 