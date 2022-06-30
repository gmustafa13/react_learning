import "./App.css";
import ClassBased from "./Components/classBased";
import FunctionBased from "./Components/functionBased";
import DemoForSate from './Components/propsVsState'
import EventHandler from "./Components/eventHandler";
import BindEventClass from './Components/bindEvendCls'
import MethodAsProps from "./Components/methodAsProps";
import ConditionalRendaring from './Components/conditinalRendaring'

function App() {
  return (
    <div className="App">
      <ClassBased name='Gulam Mansuri' age='18' email='gulam@tesseract.in' />
      <FunctionBased name='Gulam Mustafa' age='18' email='gmustafa.mansoori@gmail.com' />
      <DemoForSate />
      <EventHandler />
      <BindEventClass />
      <MethodAsProps />
      <ConditionalRendaring/>
    </div>
  );
}

export default App;
