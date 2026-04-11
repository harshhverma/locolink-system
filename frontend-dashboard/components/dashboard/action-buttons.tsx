import { UserCheck, CheckCircle2 } from 'lucide-react';

interface ActionButtonsProps {
  complaintId: string;
  onAssignStaff: (id: string) => void;
  onMarkResolved: (id: string) => void;
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED';
}

export function ActionButtons({
  complaintId,
  onAssignStaff,
  onMarkResolved,
  status,
}: ActionButtonsProps) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onAssignStaff(complaintId)}
        disabled={status === 'RESOLVED'}
        className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <UserCheck className="h-3.5 w-3.5" />
        Assign
      </button>
      <button
        onClick={() => onMarkResolved(complaintId)}
        disabled={status === 'RESOLVED'}
        className="inline-flex items-center gap-1 rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white transition-all hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <CheckCircle2 className="h-3.5 w-3.5" />
        Resolve
      </button>
    </div>
  );
}
