import { useState } from "react"
import Investment_Input from "./components/Investment_Inputs"
import Investment_Results from "./components/Investment_Results"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration:10
});

const isValid = userInput.duration >=1;

function handleChange(inputIdentifier, newValue){
    setUserInput((prevUserInput)=>{
        return{
            ...prevUserInput,
            [inputIdentifier]: +newValue //The '+' sign is converting the string to a number
        };

    });
}


  return (
    <>
    <Investment_Input userInputState={userInput} onChangeInput={handleChange}/>
    {isValid && <Investment_Results inputs={userInput} />}
    {!isValid && <p className="center">Please make the duration value greater than Zero</p>}
    </>
  )
}

export default App
