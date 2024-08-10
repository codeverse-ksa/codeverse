-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Program" (
    "slug" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tally" TEXT NOT NULL,
    "image" TEXT NOT NULL
);
INSERT INTO "new_Program" ("date", "description", "image", "slug", "tags", "tally", "title") SELECT "date", "description", "image", "slug", "tags", "tally", "title" FROM "Program";
DROP TABLE "Program";
ALTER TABLE "new_Program" RENAME TO "Program";
CREATE UNIQUE INDEX "Program_slug_key" ON "Program"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
