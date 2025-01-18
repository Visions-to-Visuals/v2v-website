import Image from 'next/image'

interface TeamMember {
  name: string;
  role: string;
  roleColor: string;
  image: string;
  linkedIn: string;
}

export function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      name: "Adrean Cajigas",
      role: "Lead Designer",
      roleColor: "text-red-500",
      image: "/assets/employee-1.png",
      linkedIn: "https://www.linkedin.com/in/adrean-cajigas/"
    },
    {
      name: "Benjamin Schoolland",
      role: "Full-stack Developer",
      roleColor: "text-orange-500",
      image: "/assets/employee-2.png",
      linkedIn: "https://www.linkedin.com/in/benjamin-schoolland-907455254/"
    },
    {
      name: "Kirill Kovalenko",
      role: "Client Specialist",
      roleColor: "text-red-500",
      image: "/assets/employee-3.png",
      linkedIn: "https://www.linkedin.com/in/benjamin-schoolland-907455254/"
    }
  ];

  return (
    <section className="flex flex-col items-center w-full bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#FFD700] block mb-4">WE'RE MORE THAN JUST YOUR AVERAGE TEAM</span>
          <h2 className="text-4xl">We work with you every step of the way</h2>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-lg">
                <Image 
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="text-xl">{member.name}</h3>
                  <a 
                    href={member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <Image 
                      src="/assets/linkedin.png"
                      alt="LinkedIn"
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
                <p className={member.roleColor}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <p className="mb-8">
            Since our first project at Modesto Junior College in 2022, our mission has been clear:
            to create websites that do more than just look good—they make your day easier, more
            efficient, and successful. Let us elevate your online presence and make an impact by
            transforming your vision into a visual experience.
          </p>
          <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full">
            Book a discovery call →
          </button>
        </div>
      </div>
    </section>
  )
} 