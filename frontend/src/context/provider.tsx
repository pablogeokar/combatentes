import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./context";
import { api } from "../lib/axios";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [logado, setLogado] = useState(false);

  const signin = async (login: string, senha: string) => {
    // Faz a chamada na API
    const response = await api.post("/login", {
      login,
      senha,
    });

    // Se retornar algum usuário válido
    if (response) {
      setLogado(true);
      window.localStorage.setItem(
        "@combatentes/token",
        JSON.stringify(response.data)
      );
    }
  };

  const logout = () => {
    setLogado(false);
    window.localStorage.clear();
  };

  useEffect(() => {
    window.localStorage.getItem("@combatentes/token")
      ? setLogado(true)
      : setLogado(false);
  }, []);

  return (
    <AuthContext.Provider value={{ signin, logout, logado }}>
      {children}
    </AuthContext.Provider>
  );
};
