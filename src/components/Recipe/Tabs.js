import React,{useState,useEffect} from "react";
import {CiPizza} from 'react-icons/ci'
import {GiFruitBowl , GiNoodles,GiCheckMark} from 'react-icons/gi'
import {MdOutlineIcecream} from 'react-icons/md'
import { fetchTabData } from "./Service";
import '../Recipe/Recipe.scss';

function Tabs(props) {
    const handleClick = (name,id) =>{
        setActive(name);
        fetchTabData(id).then((response)=> {
            setTabData(response);
            props.setLoader(false)
        })
    }

    const [active,setActive] = useState('Pizza');
    const [tabData,setTabData] = useState('');
    const [tablabel,setTabLabel] = useState([
        {
            name: "Pizza",
            icons: <CiPizza />,
            id:"0209cb28fc05320434e2916988f47b71"
        },
        {
            name: "Deserts",
            icons: <GiFruitBowl />,
            id:"eb3e2b49525a0c8ce7327436f843321a"
        },
        {
            name: "Noodles",
            icons: <GiNoodles />,
            id:"e0f06a8d4769e6a9344ff766d04a206f"
        },
        {
            name: "Icecream",
            icons: <MdOutlineIcecream />,
            id:"896b5a44ebddd867e5c07c8d256e805e"
        },
    ])

    useEffect(()=>{
        fetchTabData(tablabel[0].id).then((response)=>{
            setTabData(response);
            
        })
    },[])
  return (
    <div className="container">
      <h1 className="recipeHeading">What would you like to have!</h1>
      <div className="tabs">
        {
            tablabel.map((item,index) => (
                <div onClick={() => (handleClick(item.name,item.id),props.setLoader(true))} key={index} className={`tablist ${active === item.name ? 'active':""}`}>
                {item.icons}
                <span>{item.name}</span>
              </div>
            ))
        }
       
      </div>
      <div className="recipe_banner">
      {tabData !== '' && tabData.recipe &&  <>
                <div className="left-col">
                    <span className='badge'>{tabData.recipe?.cuisineType[0].toUpperCase()}</span>
                    <h1>{tabData.recipe.label}</h1>
                    <p><strong>Recipe by:</strong><small>{tabData.recipe.source}</small></p>
                    <h3>Ingredients</h3>
                    <div className='ingredients'>
                        <ul>
                            {tabData.recipe.ingredientLines.map((list,index)=> 
                                (<li key={index}><GiCheckMark size="18px" color="#8a2b06" />&nbsp;<span>{list}</span></li>)
                            )}
                            
                        </ul>
                    </div>
                </div>
                <div className="right-col">
                    <div className="image-wrapper">
                    <img src={tabData.recipe.image} alt={tabData.recipe.label} />
                    </div>
                </div>
            </>}
      </div>
    </div>
  );
}

export default Tabs
