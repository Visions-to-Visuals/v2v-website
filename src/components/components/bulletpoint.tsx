import Image from 'next/image';

interface BulletPointProps {
    text: string;
  }

export default function BulletPoint({ text }: BulletPointProps) {
  return (
    <li className="text-p2 flex items-center gap-2">
      <Image 
        src="/assets/check.svg"
        alt="Check mark"
        width={18}
        height={19}
        className="w-[18px] h-[19px]"
      />
      {text}
    </li>
  );
}