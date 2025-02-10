import Image from 'next/image'
import Button from '../components/button'
export function Hero() {
  return (
    <section className="uiuxbreak:pt-[4rem] mobile-s:pt-[3rem] relative flex flex-col items-center w-full bg-black text-white overflow-hidden" id='home'>
      <div className="max-w-7xl mx-auto mobile:px-12 mobile-s:px-5  w-full mobile:py-[3.5rem] py-[3rem]">
        <div className="flex flex-col items-center tablet:text-center text-left">
          <span className="mobile:text-[14px] text-[13px] font-[400] text-[#FFD700] mb-1 mobile-s:w-[100%]">TRUSTED DESIGN AND DEVELOPMENT AGENCY</span>
          
          <h1 className="uiuxbreak:text-h1 tablet:text-mh1 mobile:text-sh1 mobile-s:text-xsh1 mb-6 uiuxbreak:w-[720px] tablet:w-[525px] mobile:w-[100%] mobile-s:w-auto relative">
            <span className="hidden break:inline">Creative websites that look{' '}</span>
            <span className="break:hidden">Creative websites that look{' '}</span>
            <span className="bg-gradient-to-r from-[#EC512B] to-[#F5BF49] text-transparent bg-clip-text">great</span>
            <span className="hidden break:inline"><br /></span>
            <span className="break:hidden">{' '}</span>
            and perform{' '}
            <span className="bg-gradient-to-r from-[#EC512B] to-[#F58F49] text-transparent bg-clip-text">even better</span>
            
            <Image
            src="/assets/orange-circle.png"
            alt="Orange Circle"
            width={1000}
            height={1000}
            className='absolute w-full h-auto top-[-120px] right-[300px] pointer-events-none select-none'
            priority
            >
            </Image>

            <Image
            src="/assets/yellow-circle.png"
            alt="Yellow Circle"
            width={1000}
            height={1000}
            className='absolute w-full h-auto top-[-180px] left-[300px] pointer-events-none select-none'
            priority
            >
            </Image>
          </h1>
          
          <p className="mobile:text-lg mobile-s:text-[16px] text-gray-300 max-w-2xl mb-8">
            We specialize in web design, development and branding.
            <span className="hidden tablet:inline"><br /></span>
            <span className="tablet:hidden">{' '}</span>
            Let's take your awesome business to the next level.
          </p>
          <Button></Button>

          <div className="relative w-full max-w-6xl mx-auto mobile:mt-[6rem] mobile-s:mt-[4rem]">
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