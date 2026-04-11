import { ChevronDown } from 'lucide-react';

interface DashboardHeaderProps {
  zone: string;
  onZoneChange: (zone: string) => void;
}

export function DashboardHeader({ zone, onZoneChange }: DashboardHeaderProps) {
  const zones = ['West Central Railway', 'Central Railway', 'Northern Railway'];

  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Railway Control Room Dashboard</h1>
            <p className="mt-2 text-sm text-muted-foreground">Zone-Based Complaint Monitoring System</p>
          </div>

          <div className="w-full sm:w-auto">
            <label className="mb-2 block text-sm font-medium text-muted-foreground">Select Zone</label>
            <div className="relative">
              <select
                value={zone}
                onChange={(e) => onZoneChange(e.target.value)}
                className="w-full appearance-none rounded-md border border-border bg-input px-4 py-2 pr-10 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 sm:w-64"
              >
                {zones.map((z) => (
                  <option key={z} value={z}>
                    {z}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
