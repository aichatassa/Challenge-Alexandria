import {
  CardWrapper,

  CardTextWrapper,
  CardTextDate,
  CardTextTitle,

} from "./index";

interface CardProps {
  value: number;
  index: number;
}


export function Cards({ value, index }: CardProps) {
  return (

    <CardWrapper>
      <CardTextWrapper>
        {(index === 1 || index === 0)
          ? <div>
            <CardTextDate>Temperatura Do Painel</CardTextDate>
            <CardTextTitle>{value}°C</CardTextTitle>
          </div>
          : <div>
              <CardTextDate>Status do Painel</CardTextDate>
                {(value === 1)
            
                  ?<CardTextTitle><img src="checkmark.svg"></img></CardTextTitle>
                
                  :<CardTextTitle><img id="icon-close" src="x-mark.svg"></img></CardTextTitle>
            
                }
          </div>
        }
      </CardTextWrapper>
    </CardWrapper>
  );
};