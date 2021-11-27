import React, { useEffect } from 'react';
import './HomeStyle.ts';
import {GlobalStyle} from "../style/global"
import { useState } from 'react';
import { Header, CardContainer, DivGrid, Separator, Body, Button, Footer} from './HomeStyle';
import { api } from '../services/api';
import { Cards } from '../components/Cards/Cards';
import { useHistory } from 'react-router-dom';
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
    const history = useHistory()

  return <Body>
          <GlobalStyle/>
            <Header> <h1>Desafio 01</h1></Header>
              <DivGrid>
                {val?.data.map((painel, index) => {
                  const values = Object.values(painel);
                  return (
                    <CardContainer>
                      <Cards value={values[index]} index={index} />
                      <Separator />
                    </CardContainer>
                  )
                })}
              </DivGrid>
              <Button onClick={() => {history.goBack()}}>
                <img src="icons-back.png" />Home
                
              </Button>
              <Footer id="home">Made With <img src="icon-heart.png"/>  by Aicha M. Tassa</Footer>
          </Body>  
};