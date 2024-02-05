import { createContext } from 'react';

type nameContext = {
  person: string;
  setPerson: (person: string) => void;
};
const NameContext = createContext<nameContext | undefined>(undefined);

export default NameContext;
