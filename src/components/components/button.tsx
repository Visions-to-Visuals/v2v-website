import Image from 'next/image';
import Link from 'next/link';

export default function Button() {
  return (
    <Link
      href="#calendar"
      rel="noopener noreferrer"
      className="
      group
      tablet:w-auto w-full
      flex items-center justify-center gap-3
      bg-white text-black font-[500] tracking-tight
      px-6 py-3 rounded-full
      hover:bg-gray-100 hover:gap-5
      transition-all duration-300
      text-nowrap z-10"
      >
      Book a discovery call
      <Image 
        src="/assets/arrow.svg"
        alt="Arrow"
        width={20}
        height={20}
        className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-45"
      />
    </Link>
  );
}