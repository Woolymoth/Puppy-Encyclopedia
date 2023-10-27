import { NextApiResponse, NextApiRequest } from 'next';
import { query } from "../../../src/lib/db";
import { NextRequest, NextResponse } from 'next/server';


export async function PUT(req: NextApiRequest, res: NextApiResponse) {
  const body = await req.body

  try {
    const id = body.id;
    const name = body.name;
    const lifeSpan = body.lifeSpan;
    const information = body.information; 
    const funFact = body.funFact;
    const picture = body.picture; 

    if (!id || !name || !lifeSpan || !information || !funFact || !picture) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    await query({
      query: `
        UPDATE puppy 
        SET name = ?, lifeSpan = ?, information = ?, funFact = ?, picture = ?
        WHERE id = ?
      `,
      values: [ name, lifeSpan, information, funFact, picture, id],
    });

    const updatedPuppy = await query({
      query: 'SELECT * FROM puppy WHERE id = ?',
      values: [id],
    });

    return NextResponse.json(updatedPuppy);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, {status: 500});
  }
};