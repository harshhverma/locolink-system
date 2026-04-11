import {
  AlertCircle,
  Activity,
  CheckCircle,
  AlertTriangle,
  LucideIcon,
} from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string;
  icon: string;
  color: string;
}

const iconMap: Record<string, LucideIcon> = {
  AlertCircle,
  Activity,
  CheckCircle,
  AlertTriangle,
};

export function StatCard({ label, value, icon, color }: StatCardProps) {
  const Icon = iconMap[icon] || AlertCircle;

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          <p className="mt-2 text-3xl font-bold text-foreground">{value}</p>
        </div>
        <div className={`rounded-lg p-3 ${color}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
      <div className="mt-4 h-1 w-full bg-border" />
    </div>
  );
}
