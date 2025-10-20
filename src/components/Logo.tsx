import Image from 'next/image';

export function Logo({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <Image
      src="/clouds.png"
      alt="Lubbock Cloud logo"
      width={32}
      height={32}
      className={className}
      priority
    />
  );
}


