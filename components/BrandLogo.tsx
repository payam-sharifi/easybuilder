import Image from 'next/image';

type BrandLogoProps = {
  size?: number;
  withWordmark?: boolean;
  wordmarkClassName?: string;
  className?: string;
  priority?: boolean;
};

export function BrandLogo({
  size = 36,
  withWordmark = false,
  wordmarkClassName = 'text-lg font-semibold tracking-tight',
  className = '',
  priority = false,
}: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src="/logo.png"
        alt={withWordmark ? '' : 'easyWebBuilder'}
        width={size}
        height={size}
        className="object-contain"
        style={{ width: size, height: size }}
        priority={priority}
        unoptimized
      />
      {withWordmark ? (
        <span className={wordmarkClassName}>easyWebBuilder</span>
      ) : null}
    </span>
  );
}
