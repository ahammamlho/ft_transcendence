/*
  Warnings:

  - A unique constraint covering the columns `[senderId,receivedId]` on the table `FriendRequest` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "FriendRequest_senderId_receivedId_key" ON "FriendRequest"("senderId", "receivedId");
