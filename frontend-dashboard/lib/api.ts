const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchDashboard(zone: string) {
  const res = await fetch(`${BASE_URL}/dashboard?zone=${zone}`);
  return res.json();
}

export async function assignStaff(id: string) {
  return fetch(`${BASE_URL}/assign`, {
    method: "POST",
    body: JSON.stringify({ id, assigned_to: "Staff A" }),
  });
}

export async function resolveComplaint(id: string) {
  return fetch(`${BASE_URL}/resolve`, {
    method: "POST",
    body: JSON.stringify({ id }),
  });
}