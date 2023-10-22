type userDto = {
  id: number;
  email: string;
  name: string;
  avatar: string;
  status: Status;
  lastSee: number;
};



type msgDto = {
  id: number;
  content: string;
  createdAt: number;
  senderId: number;
  receivedId: number;
};

type reqFriendsDto = {
  id: number;
  createdAt: number;
  senderId: number;
  receivedId: number;
}



enum Status {
  ACTIF,
  INACTIF,
  WRITE,
}