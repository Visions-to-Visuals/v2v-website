import Image from 'next/image'
import Button from '../components/button'
import BulletPoint from '../components/bulletpoint'

export function WebsiteDevelopment() {
  return (
    <section id='develop' className="flex items-center justify-between mobile:px-12 mobile-s:px-5 text-white tablet:py-20 mobile-s:py-12">
      <div className="flex flex-col uiuxbreak:flex-row-reverse max-w-[1200px] mx-auto gap-12 justify-between">
        {/* Left Column */}
        <div className="flex flex-col gap-4 uiuxbreak:w-2/5">
          <div className="flex flex-col">
            <span className="mobile:text-[14px] text-[13px] text-[#FFD700]">OUR MODERN AND SECURE</span>
            <h2 className="h2break:text-h2 mobile:text-mh2 mobile-s:text-sh2">Website Development</h2>
          </div>
          
          <p className="uiuxbreak:text-lg text-gray-300 tablet:text-[18px] mobile-s:text-[16px]">
            By optimizing the speed and functionality, we enhance user engagement and retention to contribute to your business's success. No matter the complexity of the website, we find the best solution to keep you and your visitors happy.
          </p>
          
          <ul className="flex uiuxbreak:flex-col gap-4 text-white mt-2 mb-8 tablet:flex-row mobile-s:flex-col laptop:justify-between">
            <div className='flex flex-col gap-4'>
            <BulletPoint text="Ensure responsiveness on all devices."></BulletPoint>
            <BulletPoint text="Provide search engine optimization."></BulletPoint>
            </div>
            <div className='flex flex-col gap-4'>
            <BulletPoint text="Integrate blogs, e-commerce, etc."></BulletPoint>
            <BulletPoint text="Optimize speed and performance"></BulletPoint>
            </div>
          </ul>

          <div className="flex justify-center mobile:justify-start">
            <Button></Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 flex justify-center">
          <Image 
            src="/assets/development-examples.png"
            alt="Website development examples showing performance metrics and responsive design"
            width={600}
            height={600}
            className="w-full h-auto tablet:max-w-[500px] mobile:max-w-[600px] uiuxbreak:max-w-full object-contain"
          />
        </div>
      </div>
    </section>
  )
} 