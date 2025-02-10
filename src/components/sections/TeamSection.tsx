import Image from 'next/image'
import Button from '../components/button';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedIn: string;
}

export function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      name: "Adrean Cajigas",
      role: "Lead Designer",
      image: "/assets/employee-1.png",
      linkedIn: "https://www.linkedin.com/in/adrean-cajigas/"
    },
    {
      name: "Benjamin Schoolland",
      role: "Full-stack Developer",
      image: "/assets/employee-2.png",
      linkedIn: "https://www.linkedin.com/in/benjamin-schoolland-907455254/"
    },
    {
      name: "Kirill Kovalenko",
      role: "Client Specialist",
      image: "/assets/employee-3.png",
      linkedIn: "https://www.linkedin.com/in/benjamin-schoolland-907455254/"
    }
  ];

  return (
    <section id='team' className="flex flex-col items-center w-full bg-black text-white pb-12 mobile:px-12 mobile-s:px-5 md:py-20 mobile-s:py-12 tablet:pt-24">
      <div className="max-w-[1000px] mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="mobile:text-[14px] text-[13px] text-[#FFD700]">WE&apos;RE MORE THAN JUST YOUR AVERAGE TEAM</span>
          <h2 className="h2break:text-h2 mobile:text-mh2 mobile-s:text-sh2">We work with you every step of the way</h2>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 uiuxbreak:mb-12 mobile-s:mb-8 justify-items-center">
          {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col justify-center items-center mobile:max-w-[500px] mobile-s:max-w-[300px] w-full">
                <div className="relative w-full aspect-square mobile:mb-4 mobile-s:mb-2 overflow-hidden rounded-lg">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left w-full">
                  <div className="flex items-center justify-between">
                    <h3 className="text-left flex-grow">{member.name}</h3>
                    <a 
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center ml-auto"
                    >
                      <Image 
                        src="/assets/linkedin.png"
                        alt="LinkedIn"
                        width={20}
                        height={20}
                        className='w-[24px] tablet:w-[20px]'
                      />
                    </a>
                  </div>
                  <p className="text-base inline-block bg-gradient-to-r from-[#FF0000] to-[#FFE45B] bg-clip-text text-transparent text-left">{member.role}</p>
                </div>
              </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="flex flex-col md:flex-row items-center justify-between uiuxbreak:gap-0 mobile:gap-16 mobile-s:gap-8">
          <p className="mb-0 text-gray-300 uiuxbreak:text-lg mobile-s:text-[16px] text-left mobile:max-w-[640px] mobile-s:max-w-[310px]">
          Since our first project at Modesto Junior College in 2022, our mission has been clear: to create websites that do more than just look good—they make your day easier, more efficient, and successful. Let us elevate your online presence and make an impact by transforming your vision into a visual experience.
          </p>
          <Button></Button>
        </div>
      </div>
    </section>
  )
} 