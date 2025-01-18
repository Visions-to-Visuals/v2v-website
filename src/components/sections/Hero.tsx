import Image from 'next/image'

export function Hero() {
  return (
    <section className="flex flex-col items-center w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 w-full py-20">
        <div className="flex flex-col items-center text-center">
          <span className="text-[#FFE45B] mb-6">TRUSTED DESIGN AND DEVELOPMENT AGENCY</span>
          
          <h1 className="text-5xl font-bold mb-6 max-w-3xl">
            Creating websites that look{' '}
            <span className="bg-gradient-to-r from-[#EC512B] to-[#F5BF49] inline-block text-transparent bg-clip-text">great</span>
            <br />
            and perform{' '}
            <span className="bg-gradient-to-r from-[#EC512B] to-[#F58F49] inline-block text-transparent bg-clip-text">even better</span>
          </h1>
          
          <p className="text-lg text-gray-300 max-w-2xl mb-8">
            We specialize in web design, development and branding.
            <br />
            Let's take your awesome business to the next level.
          </p>
          
          <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full mb-24 hover:bg-gray-100 transition-colors">
            Book a discovery call
            <Image 
              src="/assets/arrow.svg"
              alt="Arrow"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </button>

          <div className="relative w-full max-w-6xl">
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