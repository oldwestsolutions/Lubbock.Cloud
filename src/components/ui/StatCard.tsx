import { cn } from '@/lib/utils';

interface StatCardProps {
  label: string;
  value: string;
  change?: string;
  positive?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

export function StatCard({ label, value, change, positive, icon, className }: StatCardProps) {
  return (
    <div className={cn('glow-card p-5', className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="stat-label">{label}</p>
          <p className="stat-value mt-1">{value}</p>
          {change && (
            <p className={cn('text-xs mt-1 font-mono', positive ? 'change-positive' : 'change-negative')}>
              {change}
            </p>
          )}
        </div>
        {icon && <div className="text-tech-gray-500">{icon}</div>}
      </div>
    </div>
  );
}
