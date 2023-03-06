import { createContext, useContext } from 'react';
import { Program, Resident } from './types';

export type GlobalContent = {
  choice: string;
  setChoice: (choice: string) => void;
  token: string;
  setToken: (token: string) => void;
  residents: Array<Resident>;
  programs: Array<Program>;
};
export const MyGlobalContext = createContext<GlobalContent>({
  choice: '',
  setChoice: () => {},
  token: '',
  setToken: () => {},
  residents: [],
  programs: [],
});
export const useGlobalContext = () => useContext(MyGlobalContext);
