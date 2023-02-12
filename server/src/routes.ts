import { FastifyInstance } from "fastify";
import { prisma } from "./lib/prisma";
import jwt from "jsonwebtoken";
import AuthMiddleware from "./middlewares/authMiddleware";

export async function appRoutes(app: FastifyInstance) {
  // Listagem das partidas
  app.get("/partida", async () => {
    const busca = await prisma.partida.findMany({
      select: {
        id: true,
        jogador1: true,
        jogador2: true,
      },
    });

    const partidas = busca.map((partida) => {
      return {
        id: partida.id,
        jogador1: {
          id: partida.jogador1?.id,
          nome: partida.jogador1?.nome,
        },
        jogador2: {
          id: partida.jogador2?.id,
          nome: partida.jogador2?.nome,
        },
      };
    });

    return { partidas };
  });

  // Cria uma nova partida
  app.post("/partida", { preHandler: AuthMiddleware }, async (request) => {
    const jogador1Id = request["usuario"];

    if (jogador1Id) {
      const partida = await prisma.partida.create({
        select: {
          id: true,
          jogador1: true,
          jogador2: true,
        },
        data: {
          jogador1Id,
        },
      });

      return {
        partida: {
          id: partida.id,
          jogador1: {
            id: partida.jogador1?.id,
            nome: partida.jogador1?.nome,
          },
          jogador2: {
            id: partida.jogador2?.id,
            nome: partida.jogador2?.nome,
          },
        },
      };
    } else {
      return { error: "Você não informou o seu nome!" };
    }
  });

  // Busca os dados da partida
  app.get("/partida/:id", { preHandler: AuthMiddleware }, async (request) => {
    const { id }: any = request.params;

    const busca = await prisma.partida.findFirst({
      select: {
        id: true,
        jogador1: true,
        jogador2: true,
      },
      where: {
        id,
      },
    });

    const partida = {
      id: busca?.id,
      jogador1: {
        id: busca?.jogador1?.id,
        nome: busca?.jogador1?.nome,
      },
      jogador2: {
        id: busca?.jogador2?.id,
        nome: busca?.jogador2?.nome,
      },
    };

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

  // Busca a posição das peças da partida
  app.get(
    "/partida/:id/pecas",
    { preHandler: AuthMiddleware },
    async (request) => {
      const { id }: any = request.params;
      const jogador = request["usuario"];

      let jogador1Pecas = {};
      let jogador2Pecas = {};

      const partida = await prisma.partida.findUnique({
        where: {
          id,
        },
      });

      // Identifica se o jogador logado é o jogador 1
      const jogador1 = partida?.jogador1Id === jogador ? true : false;

      if (jogador1) {
        jogador1Pecas = JSON.parse(partida?.jogador1Pecas as string) || {};

        const pecas = JSON.parse(partida?.jogador2Pecas as string);
        for (const peca in pecas) {
          jogador2Pecas[peca] = "xxx";
        }
      } else {
        jogador2Pecas = JSON.parse(partida?.jogador2Pecas as string) || {};

        const pecas = JSON.parse(partida?.jogador1Pecas as string);
        for (const peca in pecas) {
          jogador1Pecas[peca] = "xxx";
        }
      }

      return { jogador1Pecas, jogador2Pecas };
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
            select: {
              id: true,
              jogador1: true,
              jogador2: true,
            },
            where: {
              id,
            },
            data: {
              jogador2Id: jogadorId,
            },
          });
          return {
            partida: {
              id: partida.id,
              jogador1: {
                id: partida.jogador1?.id,
                nome: partida.jogador1?.nome,
              },
              jogador2: {
                id: partida.jogador2?.id,
                nome: partida.jogador2?.nome,
              },
            },
          };
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

    if (!login || !senha) return;

    const usuario = await prisma.usuario.findMany({
      where: {
        login,
        senha,
      },
    });

    const token = jwt.sign(
      { id: usuario[0].id }, // payload
      "Esta é a senha super secreta", // frase secreta
      { algorithm: "HS256", expiresIn: "60min" } // configurações gerais do token
    );

    return { token, nome: usuario[0].nome };
  });
}
