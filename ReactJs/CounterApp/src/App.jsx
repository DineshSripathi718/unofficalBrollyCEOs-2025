import './App.css'
import { useState, useRef, useEffect } from 'react';
import { Link, Outlet } from 'react-router';

function App() {
  
  // Captures the change but doesn't render on the document.
  // const name = useRef("");
  const [name, setName] = useState("");

  //use state return an array contains our initial value and setter method
  // captures the change and also renders the change on the document.
  const [number,setNumber] = useState(0);

  useEffect(() => {
    console.log("use effect hook invoked")
  }, [number]);

  const increaseButtonHandler = () => {
      setNumber(number + 1);
  }

  const decreaseButtonHandler = () => {
    setNumber(number - 1);
  }

  function resetButtonHandler(){
    setNumber(0);
  }

  function onChangeHandler(e){
    setName(e.target.value);
  }


  return (
    <div>
      <Link to={"/home/dummy1"}>dummy1</Link>
      
      <h1>Counter App</h1>
      <h4>Name : {name.current}</h4>
      <div>
        <input type="text" name="name" id="name" onChange={onChangeHandler} />
      </div>
      <div>
        <div className="number">{number}</div>
        <div>
          <button id='increase' onClick={increaseButtonHandler}>increase</button>
          <button id='decrease' onClick={decreaseButtonHandler}>decrease</button>
          <button id='reset' onClick={resetButtonHandler}>reset</button>
        </div>
      </div>
    </div>
  )
}

export default App
