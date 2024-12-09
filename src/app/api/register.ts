import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, password } = req.body;

    // Mock user registration logic
    if (name && email && password) {
      res.status(200).json({ message: "Registration successful" });
    } else {
      res.status(400).json({ message: "Invalid data" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
