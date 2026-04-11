'use client';

import { ActionButtons } from './action-buttons';
import { StatusBadge } from './status-badge';
import { PriorityBadge } from './priority-badge';

export function ComplaintsTable({ data, refreshData }: { data: any[], refreshData: () => void }) {

  if (!data || data.length === 0) {
    return (
      <div className="rounded-lg border border-border bg-card p-12 text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-muted">
          <svg
            className="h-6 w-6 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-foreground">No complaints found</h3>
        <p className="mt-2 text-sm text-muted-foreground">Great! All complaints have been resolved.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-border bg-card shadow-sm">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Train Number
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Coach
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Category
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Count
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Priority
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Status
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.group_id}
              className={`border-b border-border transition-colors ${item.priority > 5
                ? 'bg-red-950/20 hover:bg-red-950/30'
                : 'hover:bg-secondary'
                }`}
            >
              <td className="px-6 py-4 text-sm font-medium text-foreground">
                #{item.train_no}
              </td>

              <td className="px-6 py-4 text-sm text-muted-foreground">
                {item.coach}
              </td>

              <td className="px-6 py-4 text-sm text-muted-foreground">
                {item.category}
              </td>

              <td className="px-6 py-4 text-sm text-foreground">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-xs font-semibold text-primary">
                  {item.complaint_count}
                </span>
              </td>

              <td className="px-6 py-4 text-sm">
                <PriorityBadge priority={item.priority > 5 ? 'HIGH' : item.priority > 2 ? 'MEDIUM' : 'LOW'} />
              </td>

              <td className="px-6 py-4 text-sm">
                <StatusBadge status={item.status || 'OPEN'} />
              </td>

              <td className="px-6 py-4 text-sm">
                <ActionButtons
                  complaintId={item.group_id}
                  onAssignStaff={async () => {
                    await fetch("https://gupj60ot2h.execute-api.eu-north-1.amazonaws.com/assign", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        "pharsh-key": "pharsh-secret-19"
                      },
                      body: JSON.stringify({
                        group_id: item.group_id,
                        staff: "Staff A"
                      })
                    })
                    refreshData()
                  }}

                  onMarkResolved={async () => {
                    await fetch("https://gupj60ot2h.execute-api.eu-north-1.amazonaws.com/resolve", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        "pharsh-key": "pharsh-secret-19"
                      },
                      body: JSON.stringify({
                        group_id: item.group_id
                      })
                    })
                    refreshData()
                  }}
                  status={item.status || 'OPEN'}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}