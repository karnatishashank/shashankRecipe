import React from 'react';
import { BrowserRouter as Router, Route, Link,Switch, Routes } from 'react-router-dom';
import FoodOreder from './components/FoodOreder';
import Start from './components/Recipe/Start';
import HomePage from './components/HomePage';



function App() {
  return (
    <Router>
      <div>
      
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe" element={<Start/>}/>
          <Route path="/order-food" element={<FoodOreder/>}/>
          </Routes>
       
      </div>
    </Router>
  );

  
}

export default App;
