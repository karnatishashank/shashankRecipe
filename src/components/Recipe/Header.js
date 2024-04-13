import React from 'react';
import  classes  from '../Layout/Header.module.css';  
import { Link } from 'react-router-dom';
import '../Layout/CommonHeader.css'
import contactimg from'../../assets/contact.png';
import recipelogo from '../../assets/ShashankRecipelogo.png'



function Header() {
    return (
        <div>
         
        
         <nav id="navbar" class="nav">
      <Link to="/" className="logoLink">
        <img src={recipelogo} alt="logo" className="logo" />
      </Link>

      <div className="desktopMenu">
        <Link
          to="/recipe"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          className="desktopMenuListItem"
        >
          Recipe
        </Link>
        <Link
          to="/calorieCount"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          className="desktopMenuListItem"
        >
          Calculate Calories
        </Link>
        <Link
          to="/nutrtionAnalysis"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          className="desktopMenuListItem"
        >
          Nutriotion Analysis
        </Link>
        <Link
          to="/order-food"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          className="desktopMenuListItem"
        >
          Order Now
        </Link>
      </div>
      <Link
        to=""
        activeClass="active"
        spy={true}
        smooth={true}
        duration={500}
        className=""
      >
        <button className="desktopMenuBtn">
          <img src={contactimg} alt="contactMe" className="desktopMenuImg" />
          Contact Me
        </button>
      </Link>
    </nav>
        
        
      
           <div className='header'>
            <div className='layer'>
            <div className="container">
             
              <div className='header-text' >
                <h1>Recipe App</h1>
                <p><q><i>People who love to eat are always the best people.</i></q></p>
              </div>
    
            </div>
            </div>
          </div>
        </div>
      )
}

export default Header
