const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function sendNotification(data) {
  const res = await fetch(`${API_BASE_URL}/api/notifications`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
}
