import React from 'react';
import "./collapsible.css";
import "./icons.css";
import Collapsible from "./Collapsible";
import { Div,DivCollapsible, A } from '../../pages/HomeStyle';

const styles = {
    container: {
      color: "white",
    },
  } as const;
export function CollapseDiv() {
    return (
        <Div style={styles.container}>
          <DivCollapsible >
            <Collapsible header="Desafio 1">
            <p>Consiste em uma tabela que apresenta os dados vindos de uma API fornecida
            e printar as informações em forma de cards.</p>
            <A href="/cards" role="button">Verificar</A>
            </Collapsible>
          </DivCollapsible>
          <DivCollapsible>
            <Collapsible header="Desafio 2">
              Consiste em construir um gráfico com base em um objeto com 4 atributos a partir da biblioteca recharts (Não executado).
            </Collapsible>
            </DivCollapsible>
        </Div>
    )
}