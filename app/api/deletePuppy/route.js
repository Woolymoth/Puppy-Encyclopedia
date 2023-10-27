import { query } from "../../../src/lib/db";


export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const { id } = req.body
    try {
      const DeleteProducts = await query({
        query: "DELETE FROM products WHERE id = ?",
        values: [
          id
        ]
      });

      res.status(200).json({ DeleteProducts });
    } catch (error) {
      console.error("Error querying the database", error);
      res.status(500).json({ message: "Error querying the database", error });
    }
  }
}

