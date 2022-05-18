import { useState } from 'react/cjs/react.development';
import './App.css';
// import Expensitem  from './components/ExpensItem';
import Forminput from './Components/FormInput'

function App() {
  const [values , setValues] = useState(
    {
    userName:"",  
    email:"",
    birthday:"",
    password:"",
    confirmPassword:""
  }
  ) 
  const handelSubmit =(e)=>{
    e.perventDefault()
    console.log("e.target",e.target.value);
  }

  const onChange= (e)=>{
    console.log("in onchange",e.target.name , e.target.value)
    setValues({...values , [e.target.name]:e.target.value})
  }

  const inputs = [
    {
      id:1,
      name:"userName",
      placeholder:"User Name",
      type:"text",
      lebel:"Username"
    },
    {
      id:2,
      name:"email",
      placeholder:"Email",
      type:"text",
      lebel:"email"
    }
    ,{
      id:3,
      name:"password",
      placeholder:"Password",
      type:"password",
      lebel:"password"
    }
    ,{
      id:4,
      name:"confirmPassword",
      placeholder:"Confirm Password",
      type:"password",
      lebel:"confirmPassword"
    },
    {
      id:5,
      name:"birthday",
      placeholder:"Birthday",
      type:"Date",
      lebel:"DOB"
    }
  ]

  // const expenses = [
  //   {
  //     id: 'e1',
  //     title: 'Toilet Paper',
  //     amount: 94.12,
  //     date: new Date(2020, 7, 14),
  //   },
  //   { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  //   {
  //     id: 'e3',
  //     title: 'Car Insurance',
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //   },
  //   {
  //     id: 'e4',
  //     title: 'New Desk (Wooden)',
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //   },
  // ];
  return (
    <div className="App">
      <form onSubmit={handelSubmit}>
        <h1>Registration</h1>
      {inputs.map((input)=>{
       return <Forminput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
      })}
      <div className='buttonClass'>
      <button>Submit Form</button>
      </div>
     
      </form>
    </div>
  );
}

export default App;
