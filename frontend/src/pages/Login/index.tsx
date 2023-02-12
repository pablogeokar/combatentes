import {
  Container,
  Form,
  Title,
  InputText,
  Btn,
  Moita,
} from "../../styles/styles";

import { FormEventHandler } from "react";
import { useToastMessage } from "../../components/ToastNotification/useToastNotification";

export function Login() {
  const { toastMessage } = useToastMessage();

  const handleLogin: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    toastMessage({
      id: 1,
      title: "Teste 1",
      text: "Mensagem dew teste",
      type: "Error",
    });
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Moita src="/moita.png" />
        <Title>Login</Title>
        <div>
          <label htmlFor="usuário">Usuário</label>
          <InputText />
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <InputText type={"password"} />
        </div>
        <Btn type="submit">Logar</Btn>
        <div>
          <small>crie uma conta agora!</small>
        </div>
      </Form>
    </Container>
  );
}
