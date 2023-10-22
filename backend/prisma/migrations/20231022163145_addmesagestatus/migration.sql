/*
  Warnings:

  - The values [WRITE] on the enum `Status` will be removed. If these variants are still used in the database, this will fail.

*/
-- CreateEnum
CREATE TYPE "MessageStatus" AS ENUM ('NotReceived', 'Received', 'Seen');

-- AlterEnum
BEGIN;
CREATE TYPE "Status_new" AS ENUM ('ACTIF', 'INACTIF');
ALTER TABLE "User" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TYPE "Status" RENAME TO "Status_old";
ALTER TYPE "Status_new" RENAME TO "Status";
DROP TYPE "Status_old";
ALTER TABLE "User" ALTER COLUMN "status" SET DEFAULT 'INACTIF';
COMMIT;

-- AlterTable
ALTER TABLE "DirectMessage" ADD COLUMN     "messageStatus" "MessageStatus" NOT NULL DEFAULT 'NotReceived';
