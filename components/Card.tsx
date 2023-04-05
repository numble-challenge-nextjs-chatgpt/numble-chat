import Image from 'next/image';
import Vercel from '/public/vercel.svg';

interface SizeProps {
  width: number;
  height: number;
}

function Card({ width, height }: SizeProps) {
  return <Image src={Vercel} alt="Test" width={width} height={height} />;
}

export default Card;
