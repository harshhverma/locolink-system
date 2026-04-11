import { AlertCircle, AlertTriangle, Info } from 'lucide-react';

interface PriorityBadgeProps {
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
}

export function PriorityBadge({ priority }: PriorityBadgeProps) {
  const config = {
    LOW: {
      label: 'Low',
      bgColor: 'bg-blue-500/15',
      textColor: 'text-blue-700',
      icon: Info,
    },
    MEDIUM: {
      label: 'Medium',
      bgColor: 'bg-amber-500/15',
      textColor: 'text-amber-700',
      icon: AlertTriangle,
    },
    HIGH: {
      label: 'High',
      bgColor: 'bg-red-500/15',
      textColor: 'text-red-700',
      icon: AlertCircle,
    },
  };

  const { label, bgColor, textColor, icon: Icon } = config[priority];

  return (
    <div className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 ${bgColor}`}>
      <Icon className={`h-3.5 w-3.5 ${textColor}`} />
      <span className={`text-xs font-medium ${textColor}`}>{label}</span>
    </div>
  );
}
