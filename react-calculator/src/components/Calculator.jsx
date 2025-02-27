import React, { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

const Calculator = () => {
    const [data, setData] = useState("");

    const getValue = (e) => {
        console.log(e.target.value);
        setData(data.concat(e.target.value));
    }
    const calculate = () => {
        setData(eval(data).toString());
    }
    const clear = () => {
        setData("");
    }
    const backSpace = () => {
        setData(data.slice(0, -1));
    }

  return (
    <>
    <div className="container">
        <span>Calculator</span>
        <div className="input">
            <input placeholder='0' value={data}/>
        </div>
        <button onClick={getValue} value="(">(</button>
        <button onClick={getValue} value=")">)</button>
        <button onClick={getValue} value="%">%</button>
        <button onClick={clear} value="AC">AC</button>
        
        <button onClick={getValue} value="7">7</button>
        <button onClick={getValue} value="8">8</button>
        <button onClick={getValue} value="9">9</button>
        <button onClick={getValue} value="/">/</button>

        <button onClick={getValue} value="4">4</button>
        <button onClick={getValue} value="5">5</button>
        <button onClick={getValue} value="6">6</button>
        <button onClick={getValue} value="*">x</button>

        <button onClick={getValue} value="1">1</button>
        <button onClick={getValue} value="2">2</button>
        <button onClick={getValue} value="3">3</button>
        <button onClick={getValue} value="+">+</button>

        <button onClick={backSpace} value="Back">Back
        {/* <FontAwesomeIcon icon={faDeleteLeft} /> */}
        </button>
        <button onClick={getValue} value="0">0</button>
        <button onClick={calculate} value="=">=</button>
        <button onClick={getValue} value="-">-</button>

    </div>

    </>
  )
}

export default Calculator
