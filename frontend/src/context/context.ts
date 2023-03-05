import { createContext } from "react";

interface AuthContextProps {
  signin: (login: string, senha: string) => void;
  logout: () => void;
  logado: boolean;
}

export const AuthContext = createContext({} as AuthContextProps);
