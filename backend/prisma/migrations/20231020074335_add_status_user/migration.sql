/*
  Warnings:

  - You are about to drop the column `start` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ACTIF', 'INACTIF', 'WRITE');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "start",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'INACTIF';
