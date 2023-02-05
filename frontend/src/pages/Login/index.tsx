import { Container, FormLogin, Title, InputText, Btn, Moita } from "./styles";

export function Login() {
  return (
    <Container>
      <FormLogin>
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
      </FormLogin>
    </Container>
  );
}
