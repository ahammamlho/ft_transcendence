type userDto = {
  id: number;
  email: string;
  name: string;
  avatar: string;
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