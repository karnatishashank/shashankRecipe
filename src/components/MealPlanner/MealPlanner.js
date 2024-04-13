import React, { useEffect } from 'react';
import MealPlan from './MealPlan';
import { useLocation } from 'react-router-dom'
import { mealPlanningSamples } from '../../assets/utils/data'
import './MealPlanningSamples.scss'


const MealPlanner = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/mealPlan") window.scrollTo(0, 0)
    }, [location.pathname, location.search])

    return (
        <main className="meal-planning-samples">
            {
                mealPlanningSamples.map((plan , i) => {
                    return <MealPlan 
                                plan={plan.plan} 
                                planHeading={plan.planHeading}
                                key={i} 
                            />
                })
            }
        </main>
  )
}

export default MealPlanner