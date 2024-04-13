import React, { useState } from 'react';
import './NutritionAnalysis.css';

const NutritionAnalysis = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const fetchData = async () => {
    try {
      const url = 'https://api.edamam.com/api/nutrition-details?app_id=47379841&app_key=d28718060b8adfd39783ead254df7f92';
      const requestBody = {
        ingr: inputValue.split(',').map(item => item.trim())
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const responseData = await response.json();
      setResponse(responseData);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='nutritionContainer'>
    
      
    <div className="nutrition-analysis-container">
    <h2>Nutrition Analysis</h2>
    <p className='nutritionText'>Enter an ingredient list for what you are cooking, like <span class="example">"1 cup rice, 10 oz chickpeas"</span>, etc.<br/>Enter each ingredient on a new line.</p>
      <p>
      <textarea
        type="textarea"
        value={inputValue}
        onChange={handleInputChange}
        cols={40}
        rows={10}
        placeholder="Enter ingredients separated by commas"
      />
      </p>
      <p>
      <button className='analyseNutrition' onClick={fetchData}>Analyze</button>
      </p>
      {error && <p>Error: {error}</p>}
      {response && (
        <div className="nutrition-report">
          <h2>Nutrition Report:</h2>
          <table>
            <thead>
              <tr>
                <th>Nutrient</th>
                <th>Quantity</th>
                <th>Unit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Calories</td>
                <td>{response.calories}</td>
                <td>kcal</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td>{response.totalNutrients.PROCNT.quantity}</td>
                <td>{response.totalNutrients.PROCNT.unit}</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>{response.totalNutrients.FAT.quantity}</td>
                <td>{response.totalNutrients.FAT.unit}</td>
              </tr>
              <tr>
                <td>Carbohydrates</td>
                <td>{response.totalNutrients.CHOCDF.quantity}</td>
                <td>{response.totalNutrients.CHOCDF.unit}</td>
              </tr>
              <tr>
                <td>Fiber</td>
                <td>{response.totalNutrients.FIBTG.quantity}</td>
                <td>{response.totalNutrients.FIBTG.unit}</td>
              </tr>
              <tr>
                <td>Vitamin C</td>
                <td>{response.totalNutrients.VITC.quantity}</td>
                <td>{response.totalNutrients.VITC.unit}</td>
              </tr>
              {/* Add more nutrients or values as needed */}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </div>
  );
};

export default NutritionAnalysis;
