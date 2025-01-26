import Image from 'next/image'

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
    <section className="flex flex-col items-center w-full bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[12px] md:text-base text-[#FFE45B] block mb-2">WE'RE MORE THAN JUST YOUR AVERAGE TEAM</span>
          <h2 className="text-4xl">We work with you every step of the way</h2>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-start">
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg">
                <Image 
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left w-full">
                <div className="flex items-center justify-between mb-2">
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
                    />
                  </a>
                </div>
                <p className="text-base inline-block bg-gradient-to-r from-[#FF0000] to-[#FFE45B] bg-clip-text text-transparent text-left">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="flex flex-row items-center justify-between gap-32">
          <p className="mb-0 max-w-3xl text-gray-400 text-left">
            Since our first project at Modesto Junior College in 2022, our mission has been clear:
            to create websites that do more than just look good—they make your day easier, more
            efficient, and successful. Let us elevate your online presence and make an impact by
            transforming your vision into a visual experience.
          </p>
          <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full whitespace-nowrap">
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
    </section>
  )
} 