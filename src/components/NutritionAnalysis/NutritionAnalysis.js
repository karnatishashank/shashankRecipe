import React, { useState } from 'react';

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
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter ingredients separated by commas"
      />
      <button onClick={fetchData}>Fetch Data</button>
      {error && <p>Error: {error}</p>}
      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default NutritionAnalysis;
