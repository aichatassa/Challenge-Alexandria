import styled from "styled-components";

export const CardContainer = styled.div`
    width: 300px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    
`;
export const CardWrapper = styled.div`
    display: grid;
    grid-template-rows: 40px 70px 80px;
    grid-template-areas: "image" "text" "stats";
    border-radius: 18px;
    background: #ccc;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
    text-align: center;
    width: 300px;

    @media(max-width: 450px) {
        width: 150px;
        grid-template-rows: 40px 70px 80px;
    
    }
    

`;

export const CardTextWrapper = styled.div`
    grid-area: text;
    margin-top: -25px;
    @media(max-width: 450px) {
        margin-top: 0px;
    }

`;

export const CardTextDate = styled.span`
    color: #000;
    font-size: 28px;
    @media(max-width: 450px) {
        font-size: 20px;
    }
`;

export const CardTextTitle = styled.h2`
  margin-top: -10px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  background: linear-gradient(
    110.78deg,
    rgb(118, 230, 80) -1.13%,
    rgb(249, 214, 73) 15.22%,
    rgb(240, 142, 53) 32.09%,
    rgb(236, 81, 87) 48.96%,
    rgb(255, 24, 189) 67.94%,
    rgb(26, 75, 255) 85.34%,
    rgb(98, 216, 249) 99.57%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  img {
    padding-top: 10%;
    width: 60px;
    filter: linear-gradient(45deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 40%, rgba(252,176,69,1) 82%);
    
  }
  img#icon-close{
    width:50px;
  }
`;
