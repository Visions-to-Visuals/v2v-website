import Image from 'next/image'
import Button from '../components/button'

export function Hero() {
  return (
    <section className="mt-[4rem] relative flex flex-col items-center w-full bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 w-full py-[3.5rem]">
        <div className="flex flex-col items-center text-center">
          <span className="text-[14px] font-[400] text-[#FFD700] mb-1">TRUSTED DESIGN AND DEVELOPMENT AGENCY</span>
          
          <h1 className="text-h1 mb-6 max-w-4xl">
            <span className="hidden break:inline">Creative websites that look{' '}</span>
            <span className="break:hidden">Creative websites that look{' '}</span>
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
          
          <Button></Button>

          <div className="relative w-full max-w-6xl mx-auto mt-[6rem]">
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