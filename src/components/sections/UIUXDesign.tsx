import Image from 'next/image'
import Button from '../components/button';
import BulletPoint from '../components/bulletpoint';

export function UIUXDesign() {
  return (
    <section className="flex items-center justify-between px-8 text-white py-20">
      <div className="flex flex-col uiuxbreak:flex-row max-w-[1200px] mx-auto gap-12 justify-between">
        {/* Left Column */}
        <div className="flex flex-col gap-4 uiuxbreak:w-2/5">
          <div className="flex flex-col">
            <span className="text-[14px] text-[#FFD700]">OUR CUSTOM AND TAILORED</span>
            <h2 className="text-m-h2 h2break:text-h2">Website Design UI/UX</h2>
          </div>
          
          <p className="text-lg text-gray-300 w-[460px]">
            When it comes to your business, every detail matters. Our attention to UI helps visitors save time and enhances their overall experience. This not only attracts more customers, but also boosts your credibility while significantly cutting down on unnecessary costs.
          </p>
          
          <ul className="flex flex-col gap-4 text-white mt-2 mb-8">
            <BulletPoint text="Understand your goals and pain points."></BulletPoint>
            <BulletPoint text="Conduct user research and strategy."></BulletPoint>
            <BulletPoint text="Discuss aesthetic colors and layouts."></BulletPoint>
            <BulletPoint text="Reflect your brand and unique values."></BulletPoint>
          </ul>

          <div className="flex justify-center mobile:justify-start">
            <Button></Button>
          </div>
          
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 flex justify-center">
          <Image 
            src="/assets/ui-examples.png"
            alt="Collection of UI/UX design examples showing various interfaces and mockups"
            width={600}
            height={600}
            className="w-full h-auto max-w-[500px] uiuxbreak:max-w-full object-contain"
          />
        </div>
      </div>
    </section>
  )
} 