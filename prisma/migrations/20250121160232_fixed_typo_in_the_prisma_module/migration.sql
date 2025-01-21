/*
  Warnings:

  - You are about to drop the column `isaAdmin` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "isaAdmin",
ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false;
