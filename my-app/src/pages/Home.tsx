import React from 'react';
import './HomeStyle.ts';
import {GlobalStyle} from "../style/global"
import { Header, Div, Section, Body, Footer} from './HomeStyle';
import { CollapseDiv } from '../components/Collapsible/CollapseDiv';

export function Home() {

    return (
      <Body>
        <GlobalStyle/>
        <Header>
          <h1>
            Desafio Front-End Alexandria             
          </h1>
        </Header>
        <Div>
         <Section>
            <h3>Selecione o Desafio desejado:</h3>
          </Section>
        </Div>
        <CollapseDiv/>
        <Footer>Made With <img src="icon-heart.png"/>  by Aicha M. Tassa</Footer>
      </Body>  
      
    );
};
