import { createGlobalStyle } from "styled-components";
import RoutesApp from "./routes";
import { AuthContextProvider } from "./context/provider";

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

function App() {
  return (
    <AuthContextProvider>
      <GlobalStyle />
      <RoutesApp />
    </AuthContextProvider>
  );
}

export default App;
