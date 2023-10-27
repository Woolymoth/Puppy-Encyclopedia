import { NextApiResponse, NextApiRequest } from 'next';
import { query } from "../../../src/lib/db";
import { NextRequest, NextResponse } from 'next/server';


export async function GET(req: NextApiRequest, res: NextApiResponse) {
      try {
        const result = await query({
          query: "SELECT * FROM puppy",
          values: []
        });
        return NextResponse.json(result)
      } catch (error) {
        NextResponse.json({ error: 'Internal server error' });
    }
    
  };

  export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json()
    try {
      console.log(body)
      //const id = body.id;
      const name = body.name;
      const lifeSpan = body.lifeSpan;
      const information = body.information; 
      const funFact = body.funFact;
      const picture = body.picture; 
  
      if ( !name || !lifeSpan || !information || !funFact || !picture) {
        return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
      }
  
      await query({
        query: `
          INSERT INTO puppy ( name, lifeSpan, information, funFact, picture)
          VALUES ( ?, ?, ?, ?, ?)
        `,
        values: [ name, lifeSpan, information, funFact, picture],
      });
  
      const newPuppy = await query({
        query: 'SELECT * FROM puppy WHERE id = LAST_INSERT_ID()',
        values: [],
      });
  
      return NextResponse.json(newPuppy);
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Internal server error' }, {status: 500});
    }
  };


