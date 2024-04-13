import React from 'react';
import { BrowserRouter as Router, Route, Link,Switch, Routes } from 'react-router-dom';
import FoodOreder from './components/FoodOreder';
import Start from './components/Recipe/Start';
import HomePage from './components/HomePage';
import MealPlan from './components/MealPlanner/MealPlan';
import MealPlanning from './components/MealPlanner/MealPlanner';
import Calories from './components/CalorieCount/Calories';
import NutritionAnalysis from './components/NutritionAnalysis/NutritionAnalysis';
import MealPlanner from './components/MealPlanner/MealPlanner';
import Contact from './components/Contact/contact';
import NutritionHome from './components/NutritionAnalysis/NutritionHome';



function App() {
  return (
    <Router>
      <div>
      
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe" element={<Start/>}/>
          <Route path="/order-food" element={<FoodOreder/>}/>
          <Route path="/mealPlan" element={<MealPlanning/>}/>
          <Route path="/calorieCount" element={<Calories/>}/>
          <Route path="/nutrtionAnalysis" element={<NutritionHome/>}/>
          <Route path="/mealPlanner" element={<MealPlanner/>}/>
          <Route path="/contactUs" element={<Contact/>}/>
          </Routes>
       
      </div>
    </Router>
  );

  
}

export default App;
