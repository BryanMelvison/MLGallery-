"use client"
import React, {useState} from 'react';
import { Button } from './ui/button';
const ModelForm = ({api, listform}) => {

    const [prediction, setPrediction] = useState(null);

    // Initialize each field with either a defaultValue or empty
    const initialFormData = listform.reduce((acc, field) => {
        acc[field.name] = field.defaultValue || '';
        return acc;
      }, {});
    const [formData, setFormData] = useState(initialFormData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await fetch(api, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          const data = await response.json();
          setPrediction(data.prediction); 
        } catch (error) {
          // Handle errors
          console.error('There was an error submitting the form:', error);
        }
    };

    return(
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                {listform.map((field, index) => (
                    <div key={index} className="mb-4">
                        <label
                          htmlFor={field.name}
                          className="block text-gray-700 text-sm font-bold mb-2">
                            {field.label || field.name}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          id={field.name}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          placeholder={field.placeholder || ''}
                          required
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                ))}
                <Button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Submit
                </Button>
            </form> 
            
            {prediction !== null && (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
                    <p className="font-bold">Prediction:</p>
                    <p>{prediction}</p>
                </div>
            )}
        </div>
    )
}

export default ModelForm