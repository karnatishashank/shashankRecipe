import React from 'react';
import Tabs from './Tabs';
import RecipeList from './RecipeList';
import Header from './Header';
import { useState } from 'react';
import './Recipe.scss'

function Start() {
    const [loader,setLoader] = useState(true)
    return (
      <div className="main">
        <Header />
        <Tabs setLoader={setLoader}/>
        <RecipeList setLoader={setLoader}/>
        {loader && <div className='loader'>
          <div className='spinner'></div>
          </div>}
      </div>
    );
}

export default Start
