export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const response = await fetch('https://sentinel1.tailf05456.ts.net/history');
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('History proxy error:', error);
    return res.status(500).json({ error: 'Failed to reach Ara Runtime' });
  }
}
