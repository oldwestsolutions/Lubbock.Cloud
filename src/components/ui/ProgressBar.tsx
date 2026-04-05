import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number;
  max?: number;
  color?: string;
  className?: string;
  showLabel?: boolean;
}

export function ProgressBar({ value, max = 100, color = 'bg-lub-blue', className, showLabel = true }: ProgressBarProps) {
  const pct = Math.min((value / max) * 100, 100);

  return (
    <div className={cn('space-y-1', className)}>
      {showLabel && (
        <div className="flex justify-between text-xs">
          <span className="text-tech-gray-400">Progress</span>
          <span className="font-mono text-tech-gray-300">{pct.toFixed(0)}%</span>
        </div>
      )}
      <div className="h-1.5 bg-tech-gray-800 rounded-full overflow-hidden">
        <div
          className={cn('h-full rounded-full transition-all duration-500', color)}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
