export async function getHealth(req, res) {
  res.json({ status: "ok" });
}

export async function getTime(req, res) {
  const date = new Date();
  const time = date.toISOString();
  res.json({ time });
}
