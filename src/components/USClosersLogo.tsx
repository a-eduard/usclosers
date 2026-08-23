import Image from "next/image";

const s3Url = process.env.NEXT_PUBLIC_S3_BASE_URL || '';

interface USClosersLogoProps {
  className?: string;
}

export function USClosersLogo({ className = "w-8 h-8" }: USClosersLogoProps) {
  return (
    <Image 
      src={`${s3Url}/usc_logo_s.png`} 
      alt="US Closers Logo" 
      width={64}
      height={64}
      className={`object-contain ${className}`}
      priority
    />
  );
}