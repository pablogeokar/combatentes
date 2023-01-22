import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { player1_id, player1_name } = req.body;

    const room = await prisma.rooms.create({
      data: {
        player1_id,
        player1_name,
      },
    });

    return res.json(room);
  }
}