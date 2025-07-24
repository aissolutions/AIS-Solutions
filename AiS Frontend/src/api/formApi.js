export async function sendEnquiry(form) {
  const res = await fetch("http://localhost:5000/api/enquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  if (!res.ok) throw new Error("Failed to send enquiry");
  return res.json();
}
