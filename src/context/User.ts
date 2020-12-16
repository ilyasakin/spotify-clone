import { createContext, Dispatch, SetStateAction } from 'react';
import User from '../types/User';

interface Props {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

const UserContext = createContext<Partial<Props>>({});

export default UserContext;
