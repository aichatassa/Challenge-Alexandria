import React, { useEffect } from 'react';
import './HomeStyle.ts';
import {GlobalStyle} from "../style/global"
import { useState } from 'react';
import { Header, CardContainer, DivGrid, Separator, Body} from './HomeStyle';
import { api } from '../services/api';
import { Cards } from '../components/Cards/Cards';
import styled from 'styled-components';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

  type Data = {
    data: [
      painel: {
        temperatureA: number;
        temperatureB: number;
        statusA: number;
        statusB: number;
        statusC: number;
        statusD: number;
        statusE: number;
        statusF: number;
      }
    ]
  };


export function Desafio01() {
    const[val, setVal] = useState<Data>()
    useEffect(() => {
      const datas = api.get("desafio_01").then(result => {
        setVal(result.data);
        
      })
    },[]);
  
      if(isBrowser){
       return <Body>
         <GlobalStyle/>
         <Header> <h1>Desafio 01</h1></Header>
         <DivGrid>
        {val?.data.map(painel => {
          console.log(painel)
          return (
            <CardContainer>
            <Cards painel = {painel}/>
            <Separator />
            </CardContainer>
          )
        })}
        </DivGrid>
      </Body>  
      }

     return <div>ois</div>
   
   
};