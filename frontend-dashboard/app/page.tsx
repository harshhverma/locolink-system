'use client';

import { useState, useEffect } from 'react';
import { DashboardHeader } from '@/components/dashboard/header';
import { StatCard } from '@/components/dashboard/stat-card';
import { ComplaintsTable } from '@/components/dashboard/complaints-table';
import { Loader2 } from 'lucide-react';

export default function Page() {
  const [zone, setZone] = useState('West Central Railway');
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (selectedZone: string) => {
    
    try {
      setIsLoading(true);

      const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      if (!apiKey || !apiUrl) {
        throw new Error("Missing API configuration");
      }

      const res = await fetch(apiUrl + "/dashboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "pharsh-key": apiKey
        },
        body: JSON.stringify({ zone: selectedZone })
      });

      const result = await res.json();
      console.log("API DATA:", result);

      setData(result.data || []);
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(zone);
  }, []);

  // Dynamic Calculations
  const total = data.length;

  const active = data.filter(
    (item) => item.status === "OPEN" || item.status === "IN_PROGRESS"
  ).length;

  const resolved = data.filter(
    (item) => item.status === "RESOLVED"
  ).length;

  const highPriority = data.filter(
    (item) => item.priority > 5
  ).length;

  // Dynamic Stats
  const stats = [
    {
      label: 'Total Complaints',
      value: total.toString(),
      icon: 'AlertCircle',
      color: 'bg-slate-600',
    },
    {
      label: 'Active Complaints',
      value: active.toString(),
      icon: 'Activity',
      color: 'bg-blue-600',
    },
    {
      label: 'Resolved Complaints',
      value: resolved.toString(),
      icon: 'CheckCircle',
      color: 'bg-emerald-600',
    },
    {
      label: 'High Priority Issues',
      value: highPriority.toString(),
      icon: 'AlertTriangle',
      color: 'bg-orange-600',
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <DashboardHeader
        zone={zone}
        onZoneChange={(value) => {
          setZone(value);
          fetchData(value);
        }}
      />

      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Complaints Table */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Complaint Details</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Manage and monitor all passenger complaints
              </p>
            </div>

            {isLoading && (
              <div className="flex items-center gap-2 text-primary">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="text-sm">Loading...</span>
              </div>
            )}
          </div>

          <ComplaintsTable
            data={data}
            refreshData={() => fetchData(zone)}
          />
        </div>
      </div>
    </main>
  );
}