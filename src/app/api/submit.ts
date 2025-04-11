import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { repoUrl, accessToken } = req.body;

    console.log("Received data:", { repoUrl, accessToken });

    // Here, you can trigger your CI/CD workflow or handle the data as needed.

    res.status(200).json({ message: "Data received successfully." });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}