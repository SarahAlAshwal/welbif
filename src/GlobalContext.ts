import { createContext, useContext } from 'react';
import { Resident } from './types';

export type GlobalContent = {
  choice: string;
  setChoice: (choice: string) => void;
  token: string;
  setToken: (token: string) => void;
  residents: Array<Resident>;
};
export const MyGlobalContext = createContext<GlobalContent>({
  choice: '',
  setChoice: () => {},
  token: '',
  setToken: () => {},
  residents: [],
});
export const useGlobalContext = () => useContext(MyGlobalContext);
