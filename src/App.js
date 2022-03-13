import React, {useState} from 'react';
import './App.css';
import InitialValue from './InitialValue';

function App() {

  const [clicks, setClicks] = useState(0);
  const [isInitialValueSet, setInitialValueSetCheck] = useState(false)

  const clickHandler = () =>{
    setClicks((lastClickState) => {
      return lastClickState + 1;
    })
  }

  const setInitialValueHandler = (count) => {
    setClicks(parseInt(count));
    setInitialValueSetCheck(true);
  }

  return (
    <div className="center">
      {isInitialValueSet ? <button className="click-count" onClick={clickHandler}>Click count : {clicks}</button> : <InitialValue setInitialValue={setInitialValueHandler}/> }
    </div>
  );
}

export default App;
