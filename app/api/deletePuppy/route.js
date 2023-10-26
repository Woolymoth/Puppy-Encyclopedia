import { query } from "@/lib/db";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    return handleDelete(req, res);
  } else {
    return res.status(405).json({ error: 'Du har gjort fel' });
  }
}
async function handleDelete(req, res) {
  const { id } = req.query; 
  console.log(id);
  if (!id || !parseInt(id)) {
    return res.status(400).json({ error: 'Felaktigt ID' });
  }
  try {
    const result = await query({
      query: 'DELETE FROM puppy WHERE id = ?',
      values: [id],
    });
    if (result.affectedRows === 1) {
      return res.status(200).json({ message: 'Hunden är nu borta' });
    } else {
      return res.status(404).json({ error: 'Hunden kunde inte hittas' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
