import { createContext, useContext } from 'react';

export type GlobalContent = {
  choice: string;
  setChoice: (choice: string) => void;
};
export const MyGlobalContext = createContext<GlobalContent>({
  choice: '',
  setChoice: () => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);
