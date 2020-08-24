import { createContext, Dispatch, SetStateAction } from 'react';

interface Props {
  user: { email?: string; name?: string; birthDate?: string; country?: string; token?: string };
  setUser: Dispatch<SetStateAction<{}>>;
}

const User = createContext<Partial<Props>>({});

export default User;
