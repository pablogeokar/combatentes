import { createGlobalStyle } from "styled-components";
import RoutesApp from "./routes";
import { AuthContextProvider } from "./context/provider";
import { ToastNotification } from "./components/ToastNotification/ToastLayout";
import { ToastContextProvider } from "./components/ToastNotification/ToastProvider";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }
  body{
    width: 100vw;
    height: 100vh;    
    background: #F7F8F8;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ACBB78, #F7F8F8);  
    background: linear-gradient(to right, #ACBB78, #F7F8F8); 
    font-family: 'Poppins', sans-serif;
  }
`;

const notifications = [
  { id: 1, title: "Teste", text: "Mensagem de teste" },
  { id: 2, title: "Teste 2", text: "Mensagem de teste 2" },
];

function App() {
  return (
    <AuthContextProvider>
      <GlobalStyle />
      <ToastContextProvider>
        <RoutesApp />
      </ToastContextProvider>
    </AuthContextProvider>
  );
}

export default App;
