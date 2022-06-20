import "./App.css";
import ClassBased from "./Components/classBased";
import FunctionBased from "./Components/functionBased";
import DemoForSate  from './Components/propsVsState'

function App() {
  return (
    <div className="App">
      <ClassBased name='Gulam Mansuri' age='18' email='gulam@tesseract.in'/>
      <FunctionBased name='Gulam Mustafa' age='18' email='gmustafa.mansoori@gmail.com' />
      <DemoForSate/>
    </div>
  );
}

export default App;
