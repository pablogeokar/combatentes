import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";


export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const id = req.query.id as string;
    const headers = req.headers;

    const room = await prisma.rooms.update({
      where: {
        id,
      },
      data: {
        player2_id: headers.userid as string,
        player2_name: headers.username as string,
        player2_image: headers.image as string,
      },
    });

    return res.json({ room });
  }

  if (req.method === "GET") {
    const id = req.query.id as string;
    const sala = await prisma.rooms.findFirst({ where: { id } });
    return res.json({ sala });
  }
}
