import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
} from "react-router-dom";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import recipeLogo from "../assets/recipelogo.svg";
import "../components/Recipe/Recipe.scss";
import CommonHeader from "./Layout/CommonHeader";
import recipe from "../assets/recipes.png";
import calories from "../assets/calories.png";
import order from "../assets/order.png";
import nutririon from "../assets/nutrition.png";

function HomePage() {
  return (
    <div className="homePage">
      <CommonHeader />
      <Row>
        <Col sm={6} lg={6} className="outerDiv">
          <div className="recipeDiv">
            <img src={recipe} alt="recipe" />
            <p>Discover the art of flavors through our curated collection</p>
            <Link to="/recipe">Click Here for Recipes</Link>
          </div>
        </Col>
        <Col sm={6} lg={6} className="outerDiv">
          <div className="recipeDiv">
            <img src={calories} alt="Calories" />
            <p>Get the right amount of calories you need to consume.</p>
            <Link to="/calorieCount">Calorie Count</Link>
          </div>
        </Col>
        <Col sm={6} lg={6} className="outerDiv">
          <div className="recipeDiv">
            <img src={nutririon} alt="Nutrition Analysis" />
            <p>Eat to nourish your body, not to feed your emotions.</p>
            <Link to="/nutrtionAnalysis">Nutrition Analysis</Link>
          </div>
        </Col>
        <Col sm={6} lg={6} className="outerDiv">
          <div className="recipeDiv">
            <img src={order} alt="Order Now" />
            <p>Satisfy your cravings at the click of a button</p>
            <Link to="/order-food">Order Now</Link>
          </div>
        </Col>
      </Row>
      <h2>
        <q>
          <i>People who love to eat are always the best people.</i>
        </q>
      </h2>
    </div>
  );
}

export default HomePage;
