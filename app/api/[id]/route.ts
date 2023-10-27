import { NextRequest, NextResponse } from "next/server";
import { query } from "@/src/lib/db";

export async function DELETE(req: Request,{ params }: { params: { id: number } }) {
    const { id } = params;
    const result = await query({
        query: "DELETE FROM puppy WHERE id = ?", 
        values:[id]
        
    })
    return NextResponse.json(result)
}

export async function PATCH(req: NextRequest, { params }: { params: { id: number } }) {
    const { id } = params;
    const body = await req.json()
    const { name, picture, lifeSpan, information, funFact } = body;
    const result = await query({
        query: `UPDATE puppy SET name = ?, lifeSpan = ?, information = ?, funFact = ?, picture = ? WHERE id = ?`,
        values: [name, lifeSpan, information, funFact, picture, id],
    });
    return NextResponse.json(result);
};