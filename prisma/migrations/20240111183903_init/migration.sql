/*
  Warnings:

  - You are about to alter the column `userId` on the `Ad` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to drop the column `userId` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ad" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,
    "brand" TEXT NOT NULL,
    "EnginCapacity" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "carType" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "carStatus" TEXT NOT NULL,
    "transmission" TEXT NOT NULL,
    "fuelType" TEXT NOT NULL,
    "meterRange" TEXT NOT NULL,
    "paintType" TEXT NOT NULL,
    "payment" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "RegionalSpecifications" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    CONSTRAINT "Ad_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Ad" ("EnginCapacity", "RegionalSpecifications", "brand", "carStatus", "carType", "category", "createdAt", "description", "fuelType", "id", "location", "meterRange", "model", "name", "paintType", "payment", "price", "transmission", "userId", "year") SELECT "EnginCapacity", "RegionalSpecifications", "brand", "carStatus", "carType", "category", "createdAt", "description", "fuelType", "id", "location", "meterRange", "model", "name", "paintType", "payment", "price", "transmission", "userId", "year" FROM "Ad";
DROP TABLE "Ad";
ALTER TABLE "new_Ad" RENAME TO "Ad";
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "phoneNumber" TEXT,
    "username" TEXT,
    "email" TEXT NOT NULL
);
INSERT INTO "new_User" ("createdAt", "email", "id", "phoneNumber", "username") SELECT "createdAt", "email", "id", "phoneNumber", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
