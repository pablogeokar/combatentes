import { createGlobalStyle } from "styled-components";
import RoutesApp from "./routes";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }
  body{
    width: 100vw;
    height: 100vh;
    background: #606c88; 
    background: -webkit-linear-gradient(to right, #3f4c6b, #606c88);
    background: linear-gradient(to right, #3f4c6b, #606c88);
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <RoutesApp />
    </>
  );
}

export default App;
