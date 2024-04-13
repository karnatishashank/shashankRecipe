import React, { Component } from "react";
import CommonHeader from "../Layout/CommonHeader";
import NutritionAnalysis from "./NutritionAnalysis";
import "./NutritionAnalysis.css";

function NutritionHome() {
  return (
    <div className="nutritionParent">
      <CommonHeader />
      <main className="nutrition">
      <NutritionAnalysis  />
      </main>
      
    </div>
  );
}

export default NutritionHome;
