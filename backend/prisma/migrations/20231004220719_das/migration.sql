/*
  Warnings:

  - You are about to drop the column `recivedId` on the `DirectMessage` table. All the data in the column will be lost.
  - Added the required column `receivedId` to the `DirectMessage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DirectMessage" DROP COLUMN "recivedId",
ADD COLUMN     "receivedId" INTEGER NOT NULL;
