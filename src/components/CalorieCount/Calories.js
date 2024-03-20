import CalorieCalculator from './CalorieCalculator';
import CalorieCalculatorResult from './CalorieCalculatorResult';
import React, {useEffect, useState, useRef} from 'react';
import { useLocation } from 'react-router-dom'


const Calories = () => {
    const [calculationResult, setCalculationResult] = useState([])

    const location = useLocation();

    const resultScroll = useRef(); // used to scroll to results when they're displayed

    const foodsCaloriesScroll = useRef();
    const calorieDenseFoodsScroll = useRef();

    useEffect(() => {
        if (location.pathname === "/Calories") window.scrollTo(0, 0)
        if (location.search === "?to=Common-foods-calories") {
            scrollTo(foodsCaloriesScroll)
        }
        if (location.search === "?to=Calorie-dense-foods") {
            scrollTo(calorieDenseFoodsScroll)
        }
    }, [location.pathname, location.search])

    useEffect(() => {
        if (resultScroll.current) {
            scrollTo(resultScroll)
        }
    }, [calculationResult])

    const scrollTo = (container) => {
        container.current.scrollIntoView()
    }

    return(
        <main className="calories">
            {/* CalorieCalculator retrieves and stores the results using setCalculationResult */}
            <CalorieCalculator setCalculationResult={setCalculationResult} />

            {/* when results are retrieved CalorieCalculatorResult is displayed and the results are passed to it */}
            {calculationResult.length > 0 && <CalorieCalculatorResult results={calculationResult} resultScroll={resultScroll} />}

           
        </main>
    )
}

export default Calories;