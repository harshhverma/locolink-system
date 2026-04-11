import { Circle } from 'lucide-react';

interface StatusBadgeProps {
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED';
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = {
    OPEN: {
      label: 'Open',
      bgColor: 'bg-red-500/15',
      textColor: 'text-red-700',
      dotColor: 'text-red-500',
    },
    IN_PROGRESS: {
      label: 'In Progress',
      bgColor: 'bg-amber-500/15',
      textColor: 'text-amber-700',
      dotColor: 'text-amber-500',
    },
    RESOLVED: {
      label: 'Resolved',
      bgColor: 'bg-emerald-500/15',
      textColor: 'text-emerald-700',
      dotColor: 'text-emerald-500',
    },
  };

  const { label, bgColor, textColor, dotColor } = config[status];

  return (
    <div className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 ${bgColor}`}>
      <Circle className={`h-2 w-2 fill-current ${dotColor}`} />
      <span className={`text-xs font-medium ${textColor}`}>{label}</span>
    </div>
  );
}
