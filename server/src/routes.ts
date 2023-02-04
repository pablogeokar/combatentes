import { prisma } from "./lib/prisma";
import { FastifyInstance } from "fastify";

export async function appRoutes(app: FastifyInstance) {
  // Listagem das partidas
  app.get("/partida", async (request) => {
    const partidas = await prisma.partida.findMany();

    return { partidas };
  });

  // Cria uma nova partida
  app.post("/partida", async (request) => {
    const { jogador_1 }: any = request.body;

    if (jogador_1) {
      const partida = await prisma.partida.create({
        data: {
          jogador_1,
        },
      });

      return { partida };
    } else {
      return { error: "Você não informou o seu nome!" };
    }
  });

  // Busca os dados da partida
  app.get("/partida/:id", async (request) => {
    const { id }: any = request.params;

    const partida = await prisma.partida.findFirst({
      where: {
        id,
      },
    });

    return { partida };
  });

  // Entra na partida conforme o id informado
  app.post("/partida/:id/entrar", async (request) => {
    const { id }: any = request.params;
    const { jogador_2 }: any = request.body;

    if (jogador_2) {
      const partida = await prisma.partida.update({
        where: {
          id,
        },
        data: {
          jogador_2,
        },
      });
      return partida;
    }
  });
}
