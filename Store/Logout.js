// pages/api/logout.js
import { auth } from "./Firebase";


export default async function handler(req, res) {
  try {
    // Sign out the user
    await auth.signOut();

    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred during logout' });
  }
}
