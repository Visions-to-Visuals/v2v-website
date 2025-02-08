import Image from 'next/image'
import Button from '../components/button'
import BulletPoint from '../components/bulletpoint'

export function WebsiteDevelopment() {
  return (
    <section className="flex items-center justify-between px-8 text-white py-20">
      <div className="flex flex-col uiuxbreak:flex-row-reverse max-w-[1200px] mx-auto gap-12 justify-between">
        {/* Left Column */}
        <div className="flex flex-col gap-4 uiuxbreak:w-2/5">
          <div className="flex flex-col">
            <span className="text-[14px] text-[#FFD700]">OUR MODERN AND SECURE</span>
            <h2 className="text-m-h2 h2break:text-h2">Website Development</h2>
          </div>
          
          <p className="text-lg text-gray-300 w-[464px]">
            By optimizing the speed and functionality, we enhance user engagement and retention to contribute to your business's success. No matter the complexity of the website, we find the best solution to keep you and your visitors happy.
          </p>
          
          <ul className="flex flex-col gap-4 text-white mt-2 mb-6">
            <BulletPoint text="Ensure responsiveness on all devices."></BulletPoint>
            <BulletPoint text="Provide search engine optimization."></BulletPoint>
            <BulletPoint text="Integrate blogs, e-commerce, etc."></BulletPoint>
            <BulletPoint text="Optimize speed and performance"></BulletPoint>
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
            className="w-full h-auto max-w-[500px] uiuxbreak:max-w-full object-contain"
          />
        </div>
      </div>
    </section>
  )
} 