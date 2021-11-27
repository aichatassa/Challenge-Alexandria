import React from 'react';
import './Home.ts';
import styled from "styled-components";
import Collapsible from "./Collapsible";

import {GlobalStyle} from "./style/global"


import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { Header, Li, Ul, A, Div, Section, Body, H1, P } from './Home';


const App = ()=> {
  
    return (

      <Body>
        <GlobalStyle/>
        <Header>
          <Ul>
            <Li>
              <A href="#">inicio</A>
            </Li>
            <Li>
            <A href="#">Desafio 1</A>
            </Li>
          </Ul>
        </Header>
        <Div>
         <Section>
           <h1>
              Desafio Front-End Alexandria             
           </h1>
            <h3>Selecione o Desafio desejado:</h3>
          </Section>
        </Div>
        <Div>
          
          <button>Desafio 2</button>

        </Div>
           
      </Body>  
      
    );
   
};

export default App;
