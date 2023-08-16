import ATGlogo from '../public/newLogo.svg';
import Image from 'next/image';

interface NextLogoProps {
  // Define your props and their types here
  className?: string;
  alt: string;
  // ...other props
}

export function NextLogo(props: NextLogoProps) {
  return (
    <Image
      className={`align-start ${props.className}`}
      alt={props.alt}
      src={ATGlogo}
    />
  );
}
