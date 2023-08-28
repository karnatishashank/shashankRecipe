import React from 'react';
import { BrowserRouter as Router, Route, Link,Switch, Routes } from 'react-router-dom';
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import recipeLogo from "../assets/recipelogo.svg";
import '../components/Recipe/Recipe.scss'


function HomePage() {
  return (
    <div className='homePage'> 
        <Row>
            <Col sm={6} lg={6}>
            <div className='recipeDiv'>
                    <p>Discover the art of flavors through our curated collection of mouthwatering recipes, crafted to elevate your dining experience.</p>
                    <Link to="/recipe">Click Here for Recipes</Link>
                </div>
            </Col>
            <Col sm={6} lg={6}>
                
                <div className='foodDiv'>
                <p>Satisfy your cravings at the click of a button – order food online and let the feast come to you!</p>
                <Link to="/order-food">Order Now</Link>
                </div>
                
            </Col>
        </Row>
        <h2><q><i>People who love to eat are always the best people.</i></q></h2>
    </div>
  )
}

export default HomePage
