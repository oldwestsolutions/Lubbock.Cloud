import { cn } from '@/lib/utils';
import type { GpuSpec } from '@/lib/types';

interface GpuAvailabilityProps {
  gpu: GpuSpec;
  compact?: boolean;
}

export function GpuAvailability({ gpu, compact = false }: GpuAvailabilityProps) {
  const pct = (gpu.available / gpu.total) * 100;
  const color = pct > 60 ? 'bg-lub-green' : pct > 30 ? 'bg-lub-amber' : 'bg-lub-red';
  const statusText = pct > 60 ? 'Available' : pct > 30 ? 'Limited' : 'Scarce';

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <div className={cn('w-2 h-2 rounded-full', color)} />
        <span className="text-xs text-tech-gray-400">{gpu.available}/{gpu.total}</span>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs">
        <span className="text-tech-gray-400">{statusText}</span>
        <span className="font-mono text-tech-gray-300">{gpu.available}/{gpu.total} GPUs</span>
      </div>
      <div className="h-1.5 bg-tech-gray-800 rounded-full overflow-hidden">
        <div
          className={cn('h-full rounded-full transition-all', color)}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
