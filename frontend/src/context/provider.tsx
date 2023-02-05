import { ReactNode, useState } from "react";
import { AuthContext } from "./context";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [logado, setLogado] = useState(false);

  const login = (login: string, senha: string) => {
    return true;
  };
  return (
    <AuthContext.Provider value={{ login, logado }}>
      {children}
    </AuthContext.Provider>
  );
};
