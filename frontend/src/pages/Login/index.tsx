import {
  Container,
  Form,
  Title,
  InputText,
  Btn,
  Moita,
} from "../../styles/styles";
import { redirect } from "react-router-dom";

import { FormEventHandler, useEffect, useState } from "react";
import { useToastMessage } from "../../components/ToastNotification/useToastNotification";

import { useAuth } from "./../../context/hook";

export function Login() {
  const [formData, setFormData] = useState({ login: "", senha: "" });
  const { signin, logado } = useAuth();

  const { toastMessage } = useToastMessage();

  const handleLogin: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!formData.login || !formData.senha) {
      return toastMessage({
        title: "Acesso Negado",
        text: "Verifique se o login e senha foram informados corretamente",
        type: "Error",
      });
    }

    try {
      signin(formData.login, formData.senha);

      toastMessage({
        title: "Seja bem vindo",
      });
    } catch (error) {
      toastMessage({
        title: "Acesso Negado",
        text: "Verifique se o login e senha foram informados corretamente",
        type: "Error",
      });
    }
  };

  console.log(logado);

  useEffect(() => {
    if (logado) redirect("/jogo");
  }, []);

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Moita src="/moita.png" />
        <Title>Login</Title>
        <div>
          <label htmlFor="usuário">Usuário</label>
          <InputText
            value={formData.login}
            onChange={(e) =>
              setFormData({ ...formData, login: e.currentTarget.value })
            }
          />
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <InputText
            type={"password"}
            value={formData.senha}
            onChange={(e) =>
              setFormData({ ...formData, senha: e.currentTarget.value })
            }
          />
        </div>
        <Btn type="submit">Logar</Btn>
        <div>
          <small>crie uma conta agora!</small>
        </div>
      </Form>
    </Container>
  );
}
