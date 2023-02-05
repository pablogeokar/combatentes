import { createContext } from "react";

interface AuthContextProps {
  login: (login: string, senha: string) => void;
  logado: boolean;
}

export const AuthContext = createContext({} as AuthContextProps);
