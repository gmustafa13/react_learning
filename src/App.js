import "./App.css";
import ClassBased from "./Components/classBased";
import FunctionBased from "./Components/functionBased";
import DemoForSate  from './Components/propsVsState'
import EventHandler from "./Components/eventHandler";
import BindEventClass from './Components/bindEvendCls'

function App() {
  return (
    <div className="App">
      <ClassBased name='Gulam Mansuri' age='18' email='gulam@tesseract.in'/>
      <FunctionBased name='Gulam Mustafa' age='18' email='gmustafa.mansoori@gmail.com' />
      <DemoForSate/>
      <EventHandler/>
      <BindEventClass/>
    </div>
  );
}

export default App;
