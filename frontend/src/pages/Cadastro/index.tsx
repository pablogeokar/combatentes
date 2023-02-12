import { Container, Form, InputText, Title, Btn } from "../../styles/styles";

export function Cadastro() {
  return (
    <Container>
      <Form>
        <Title>Novo usuário</Title>
        <div>
          <label htmlFor="usuário">Nome</label>
          <InputText />
        </div>
        <div>
          <label htmlFor="usuário">Login</label>
          <InputText />
        </div>
        <div>
          <label htmlFor="usuário">Senha</label>
          <InputText type="password" />
        </div>
        <Btn type="submit">Cadastrar</Btn>
      </Form>
    </Container>
  );
}
