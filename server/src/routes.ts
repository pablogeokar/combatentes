import { FastifyInstance, FastifyRequest } from "fastify";
import { prisma } from "./lib/prisma";
import jwt from "jsonwebtoken";
import AuthMiddleware from "./middlewares/authMiddleware";

export async function appRoutes(app: FastifyInstance) {
  // Listagem das partidas
  app.get("/partida", async (request) => {
    const partidas = await prisma.partida.findMany();

    return { partidas };
  });

  // Cria uma nova partida
  app.post("/partida", { preHandler: AuthMiddleware }, async (request) => {
    const jogador1Id = request["usuario"];

    if (jogador1Id) {
      const partida = await prisma.partida.create({
        data: {
          jogador1Id,
        },
      });

      return { partida };
    } else {
      return { error: "Você não informou o seu nome!" };
    }
  });

  // Busca os dados da partida
  app.get("/partida/:id", { preHandler: AuthMiddleware }, async (request) => {
    const { id }: any = request.params;

    const partida = await prisma.partida.findFirst({
      where: {
        id,
      },
    });

    console.log(request["usuario"]);

    return { partida };
  });

  // Salva a posição das peças do jogador
  app.post(
    "/partida/:id/pecas",
    { preHandler: AuthMiddleware },
    async (request) => {
      const { id }: any = request.params;
      const { pecas }: any = request.body;
      const jogador = request["usuario"];

      // Verifica se o jogador é o 1º
      const jogador1 = await prisma.partida.findFirst({
        where: {
          id,
          jogador1Id: jogador,
        },
      });

      if (jogador1) {
        // jogador 1
        await prisma.partida.updateMany({
          where: {
            id,
            jogador1Id: jogador,
          },
          data: {
            jogador1Pecas: JSON.stringify(pecas),
          },
        });
      } else {
        // jogador 2
        await prisma.partida.updateMany({
          where: {
            id,
            jogador2Id: jogador,
          },
          data: {
            jogador2Pecas: JSON.stringify(pecas),
          },
        });
      }

      return { id, jogador, pecas };
    }
  );

  // Entra na partida conforme o id informado
  app.post(
    "/partida/:id/entrar",
    { preHandler: AuthMiddleware },
    async (request) => {
      const { id }: any = request.params;
      const jogadorId: any = request["usuario"];

      // Verifica se o jogador não faz parte da partida selecionada
      const partidaLiberada = await prisma.partida.findFirst({
        where: {
          id,
          jogador1Id: {
            not: jogadorId,
          },
          jogador2Id: {
            equals: null,
          },
        },
      });

      if (!partidaLiberada) {
        return { error: "Você não pode entrar na partida informada!" };
      }

      // Se a sala estiver liberada então faz a inclusão do novo usuário
      if (partidaLiberada) {
        if (jogadorId) {
          const partida = await prisma.partida.update({
            where: {
              id,
            },
            data: {
              jogador2Id: jogadorId,
            },
          });
          return partida;
        }
      }
    }
  );

  // Cadastra Usuário
  app.post("/usuario", async (req) => {
    const { login, senha, nome }: any = req.body;

    const usuario = await prisma.usuario.create({
      data: {
        nome,
        login,
        senha,
      },
    });

    return { id: usuario.id, nome: usuario.nome, login: usuario.login };
  });

  // Autentica o Usuário
  app.post("/login", async (request) => {
    const { login, senha }: any = request.body;

    const usuario = await prisma.usuario.findFirstOrThrow({
      where: {
        login,
        senha,
      },
    });

    const token = jwt.sign(
      { id: usuario.id }, // payload
      "Esta é a senha super secreta", // frase secreta
      { algorithm: "HS256", expiresIn: "60min" } // configurações gerais do token
    );

    return { token };
  });
}
