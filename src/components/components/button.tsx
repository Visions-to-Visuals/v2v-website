import Image from 'next/image';

export default function Button() {
  return (
    <button className="w-[calc(100%-2rem)] mobile:w-auto flex items-center justify-center gap-3 bg-white text-black font-[500] tracking-tight px-6 py-3 rounded-full hover:bg-gray-100 transition-colors text-nowrap">
      Book a discovery call
      <Image 
        src="/assets/arrow.svg"
        alt="Arrow"
        width={20}
        height={20}
        className="w-5 h-5"
      />
    </button>
  );
}