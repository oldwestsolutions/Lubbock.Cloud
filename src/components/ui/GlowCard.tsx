'use client';

import { cn } from '@/lib/utils';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function GlowCard({ children, className, hover = true, onClick }: GlowCardProps) {
  return (
    <div
      className={cn(
        'glow-card p-6',
        hover && 'hover:border-white/10 transition-all duration-300',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
