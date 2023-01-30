import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const partidaId = "c26f3fdb-089c-49fd-aa7a-0484c9c23c18";

async function run() {
  await prisma.partida.deleteMany();

  await prisma.partida.create({
    data: {
      id: partidaId,
      jogador_1: "Pablo George",
    },
  });
}

run()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
