import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Fetch the API key securely from your server-side environment
        const apiKey = process.env.API_KEY;

      // Provide the API key in the response
      res.status(200).json({ apiKey });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
