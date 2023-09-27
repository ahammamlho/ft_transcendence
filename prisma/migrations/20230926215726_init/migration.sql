/*
  Warnings:

  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `role` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[id,email]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- AlterTable
CREATE SEQUENCE users_id_seq;
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
ALTER COLUMN "id" SET DEFAULT nextval('users_id_seq'),
DROP COLUMN "role",
ADD COLUMN     "role" "Role" DEFAULT 'USER',
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("email", "firstName");
ALTER SEQUENCE users_id_seq OWNED BY "users"."id";

-- CreateIndex
CREATE INDEX "users_id_email_idx" ON "users"("id", "email");

-- CreateIndex
CREATE UNIQUE INDEX "users_id_email_key" ON "users"("id", "email");
