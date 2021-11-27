
import {
  CardWrapper,

  CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  
} from "./index";
interface CardsProps{
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
}

export function Cards({
  painel
}:CardsProps) {
  return (
      <CardWrapper>
        <CardTextWrapper>
          <CardTextDate>Temperatura Do Painel</CardTextDate>
          <CardTextTitle>{painel.temperatureA}°C</CardTextTitle>
     
        </CardTextWrapper>
      </CardWrapper>
  );
};
