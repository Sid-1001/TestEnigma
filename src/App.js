import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Bottom from "./components/Bottom";
import Home from "./components/Home";

import Fsummary from "./components/Fsummary";
import Matches from "./components/Matches";




import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/bottom.scss";


function App() {
  
 
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}  />
        
        <Route path="/Fsummary" element={<Fsummary />}  />

        <Route path="/Matches" element={<Matches />}  />

      </Routes>
      <Bottom />
    </Router>
  );
  
}

export default App;
