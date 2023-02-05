-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_partidas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "jogador1Id" TEXT NOT NULL,
    "jogador1Pecas" TEXT,
    "jogador2Id" TEXT,
    "jogador2Pecas" TEXT,
    CONSTRAINT "partidas_jogador1Id_fkey" FOREIGN KEY ("jogador1Id") REFERENCES "usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "partidas_jogador2Id_fkey" FOREIGN KEY ("jogador2Id") REFERENCES "usuarios" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_partidas" ("id", "jogador1Id", "jogador1Pecas", "jogador2Id", "jogador2Pecas") SELECT "id", "jogador1Id", "jogador1Pecas", "jogador2Id", "jogador2Pecas" FROM "partidas";
DROP TABLE "partidas";
ALTER TABLE "new_partidas" RENAME TO "partidas";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
