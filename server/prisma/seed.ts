import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function run() {
  await prisma.usuario.deleteMany();

  await prisma.usuario.create({
    data: {
      nome: "Pablo",
      login: "pablo",
      senha: "123456",
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
