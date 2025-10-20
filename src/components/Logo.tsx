export function Logo({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Lubbock Cloud logo"
    >
      <rect x="4" y="4" width="24" height="24" fill="#C8102E" rx="3" />
      <rect x="36" y="4" width="24" height="24" fill="#737373" rx="3" />
      <rect x="4" y="36" width="24" height="24" fill="#737373" rx="3" />
      <rect x="36" y="36" width="24" height="24" fill="#C8102E" rx="3" />
    </svg>
  );
}


