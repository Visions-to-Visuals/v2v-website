import Image from 'next/image'

export function Hero() {
  return (
    <section className="flex flex-col items-center text-center px-4 py-20 gap-6">
      <p className="mb-2">TRUSTED DESIGN AND DEVELOPMENT AGENCY</p>
      <h1 className="max-w-3xl mb-4">
        Creating websites that look <span>great</span>
        <br />
        and perform <span>even better</span>
      </h1>
      <p className="max-w-2xl mb-8">
        We specialize in web design, development and branding.
        <br />
        Let's take your awesome business to the next level.
      </p>
      <button className="mb-16">Book a discovery call</button>
      <Image 
        src="/assets/best-work.png" 
        alt="Our best work showcase"
        width={1200}
        height={600}
        className="w-full max-w-6xl"
      />
    </section>
  )
} 