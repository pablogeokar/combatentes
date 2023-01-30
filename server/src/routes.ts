import { prisma } from "./lib/prisma";
import { FastifyInstance } from "fastify";
import { query } from "express";

export async function appRoutes(app: FastifyInstance) {
  app.get("/partidas", async (request) => {
    const partidas = await prisma.partida.findMany();

    return { partidas };
  });
  app.get("/partidas/:id", async (request) => {
    const { id }: any = request.params;

    const partidas = await prisma.partida.findFirst({
      where: {
        id,
      },
    });

    return { partidas };
  });

  app.post("/partidas", async (request) => {
    const { jogador_1 }: any = request.body;

    const partida = await prisma.partida.create({
      data: {
        jogador_1,
      },
    });

    return { partida };
  });
}
