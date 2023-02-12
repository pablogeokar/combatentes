import {
  Container,
  Form,
  Title,
  InputText,
  Btn,
  Moita,
} from "../../styles/styles";

import { FormEventHandler, useState } from "react";
import { useToastMessage } from "../../components/ToastNotification/useToastNotification";
import { api } from "../../lib/axios";

export function Login() {
  const [formData, setFormData] = useState({ login: "", senha: "" });

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
      const login = await api.post("/login", {
        login: formData.login,
        senha: formData.senha,
      });

      console.log(login.data);

      toastMessage({
        title: "Seja bem vindo,",
        text: login.data.nome,
      });
    } catch (error) {
      toastMessage({
        title: "Acesso Negado",
        text: "Verifique se o login e senha foram informados corretamente",
        type: "Error",
      });
    }
  };

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
