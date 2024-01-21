// Importing necessary functions from React
import { createContext, useState } from "react"

// Creating a context for calculator-related state management
export const CalcContext = createContext()

// Functional component for providing calculator context to its children
const CalcProvider = ({ children }) => {
  // Initial state for the calculator
  const [calc, setCalc] = useState({
    sign: "",   // The operator (+, -, *, /, %)
    num: 56895255,  // The current input number
    res: 0      // The result of the calculation
  });

  // Creating the value object to be provided by the context
  const providerValue = {
    calc,        // Current calculator state
    setCalc      // Function to update the calculator state
  }

  // Wrapping the children components with the CalcContext.Provider
  return (
    <CalcContext.Provider value={providerValue}>
      {children}
    </CalcContext.Provider>
  )
}

// Exporting the CalcProvider component as the default export
export default CalcProvider
