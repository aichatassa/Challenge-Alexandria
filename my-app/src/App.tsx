import React from 'react';
import './pages/HomeStyle.ts';
import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home"
import { Desafio01 } from "./pages/Desafio01"

import { Route } from "react-router-dom";





function App() {

    return (
      <BrowserRouter>
    
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cards">
          <Desafio01/>
        </Route>
      
      </BrowserRouter> 
      
    );
   
};


export default App;
