import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Jogo } from "../pages/jogo";
import { Login } from "../pages/Login";
import { Cadastro } from "../pages/Cadastro";

const Private = ({ Component }: any) => {
  const logado = false;

  return logado ? <Component /> : <Login />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/jogo" element={<Private Component={Jogo} />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
