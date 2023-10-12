import { Backend_URL } from '@/app/lib/constants';

async function getAllUsers(author: string) {
  const res = await fetch(Backend_URL + 'user/all', {
    method: 'GET',
    headers: {
      authorization: `${author}`,
      'Content-Type': 'application/json',
    },
  });
  const users = await res.json();
  return users;
}

export default getAllUsers;
