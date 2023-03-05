import { useAuth } from "../../context";

export function Jogo() {
  const { logout } = useAuth();
  return <button onClick={logout}>Logout</button>;
}
