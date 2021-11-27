import styled from "styled-components";

export const Div = styled.div`
    
`;
export const DivCollapsible = styled.div`
    padding-bottom: 20px;
    padding-top: 20px;
    width: 50vw;
    text-align: left;
    margin-left: 25%;
    @media(max-width: 450px){
        width: 70vw;
        margin-left: 10%;
        text-align:left;
    }
`;
export const Body = styled.body`

`;
export const Section = styled.section`

h3 {
    color: #FFF;
    text-align: center;
}
p{
    color: #FFF;
    float: left;
    padding-left:
}
`;

export const Header = styled.header`
h1{
    font-size: 48px;
    text-align: center;
    color: #FFF;
}
`;
export const A = styled.a`
    text-decoration: none;
    color: #FFF;
    float: right;
    margin-top: -10px;
`;
export const P = styled.p`

`;
export const H1 = styled.h1`

`;

export const CardContainer = styled.div`
    height: 0%;
    align-items: center;
    justify-content: center;
    @media(max-width: 450px) {
        margin-left:5px;

    }
`;

export const Separator = styled.span`
    margin-left: 5px;
    margin-right: 5px;
    
`;
export const DivGrid = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 0.2fr 0.2fr 0.2fr 0.2fr;

    @media(max-width: 450px) {
        margin-top: -100px;
        grid-template-columns: 1fr 1fr;

    }

`;
export const Button = styled.button`
    width: 120px;
    height: 55px;
    margin-top: 8%;
    background-color:transparent; 
    border: 2px groove white;
    border-radius: 20px;
    margin-left: 10%;
    img{
        margin-top: -5px;
        margin-left: -5px;
        width: 25px;
        transform: translate(0px, 5px);
    }
    color: #fff;
    @media (max-width: 450px) {
        margin-top: 120px;
        margin-left: 8px;
        width: 100px;
        img{
            margin-top: -5px;
            margin-left: -10px;
            width: 30px;
            transform: translate(0px, 7px);
        }
    }
    
`;

export const Footer = styled.footer `
   
    padding-top: 10px;
    text-align: center;
    color: #FFF;
    img{
        width: 20px;

        transform: translate(0px, 5px);
    };

    @media (max-width: 450px) {
        padding-top: 50px;
    }
  
`