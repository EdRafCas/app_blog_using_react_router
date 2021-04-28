import React from 'react';
import styled from 'styled-components';
import {BrowserRouter, Route} from "react-router-dom";
import Header from './components/Header';
import Inicio from './components/Inicio';
import Blog from './components/Blog';
import About from './components/About';

const App = () => {
  return ( 
    <BrowserRouter>
      <ContenedorPrincipal>
        <Header />
        
        <Main>
          <Route path="/" exact={true} component={Inicio} />
          <Route path="/blog" component={Blog} />          
          <Route path="/about" component={About} />
        </Main>
      </ContenedorPrincipal>
    </BrowserRouter>
  );
}

const ContenedorPrincipal = styled.div `
    padding: 40px;
    width: 90%;
    max-width: 700px;
`;

const Main = styled.main`
    background: #fff;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1)
`

export default App;
