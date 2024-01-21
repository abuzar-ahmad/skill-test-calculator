// Importing necessary styles and components
import './App.css';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';
import CalcProvider from './context/CalcContext';

// Button values organized in a 2D array
const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

// Main App component
function App() {
  return (
    // Wrapping the entire application with the CalcProvider context provider
    <CalcProvider>
      {/* Wrapping the main content with a Wrapper component */}
      <Wrapper>
        {/* Display Screen component */}
        <Screen />

        {/* Container for buttons */}
        <ButtonBox>
          {/* Mapping through flattened button values array to create Button components */}
          {btnValues.flat().map((btn, i) => (
            <Button
              value={btn}
              key={i} // React requires a unique key for each element in an array
            />
          ))}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  );
}

// Exporting the App component as the default export
export default App;
