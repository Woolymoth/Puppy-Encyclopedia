import { NextApiResponse, NextApiRequest } from 'next';
import { query } from "@/lib/db";
import { NextResponse } from 'next/server';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { name, lifeSpan, information, funFact, picture } = req.body;
  
      if (!name || !lifeSpan || !information || !funFact || !picture) {
        return res.status(400).json({ error: 'All fields are required' });
      }
  
      const queryResult = await query({
        query: `
          INSERT INTO puppy (name, lifeSpan, information, funFact, picture)
          VALUES (?, ?, ?, ?, ?)
        `,
        values: [name, lifeSpan, information, funFact, picture],
      });
      const newPuppy = await query({
        query: 'SELECT * FROM puppy WHERE id = LAST_INSERT_ID()',
        values: [],
      });
  
      return NextResponse.json(newPuppy);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };