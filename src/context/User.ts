import { createContext, Dispatch, SetStateAction } from 'react';

interface Props {
  user: { email?: string; name?: string; token?: string };
  setUser: Dispatch<SetStateAction<{}>>;
}

const User = createContext<Partial<Props>>({});

export default User;
