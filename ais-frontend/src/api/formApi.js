export async function sendEnquiry(form) {
  const res = await fetch("https://ais-solutions-2.onrender.com/api/enquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  if (!res.ok) throw new Error("Failed to send enquiry");
  return res.json();
}
