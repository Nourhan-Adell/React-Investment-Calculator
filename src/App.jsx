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
    <Investment_Results inputs={userInput} />
    </>
  )
}

export default App
