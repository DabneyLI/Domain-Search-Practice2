// pages/api/whois.js
export default async function handler(req, res) {
    const { query } = req.query;
    const [name, suffix] = query.split('.');
  
    const apiUrl = `https://whois.freeaiapi.xyz/?name=${name}&suffix=${suffix}`;
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch WHOIS data: ${response.statusText}`);
      }
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  