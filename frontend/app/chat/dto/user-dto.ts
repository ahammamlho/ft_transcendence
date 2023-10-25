type userDto = {
  id: number;
  email: string;
  name: string;
  avatar: string;
  status: Status;
  lastSee: number;
  isFriends: Boolean
};



type msgDto = {
  id: number;
  content: string;
  createdAt: number;
  senderId: number;
  receivedId: number;
  messageStatus: MessageStatus;
};

type reqFriendsDto = {
  id: number;
  createdAt: number;
  senderId: number;
  receivedId: number;
}



enum Status {
  ACTIF = "ACTIF",
  INACTIF = "INACTIF",
}

enum MessageStatus {
  NotReceived = "NotReceived",
  Received = "Received",
  Seen = "Seen"
}