import React from 'react';
import  classes  from '../Layout/Header.module.css';  
import { Link } from 'react-router-dom';



function Header() {
    return (
        <div>
         <header className={classes.header}>
        
         <Link to="/">
        <h1>ReactMeals</h1>
        </Link>
        
        
      </header>
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
