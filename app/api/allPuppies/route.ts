import { NextApiResponse, NextApiRequest } from 'next';
import { query } from "@/lib/db";
import { NextResponse } from 'next/server';


export async function GET(req: NextApiRequest, res: NextApiResponse) {
      try {
        const result = await query({
          query: "SELECT * FROM puppy",
          values: []
        });
        return NextResponse.json(result)
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
  }