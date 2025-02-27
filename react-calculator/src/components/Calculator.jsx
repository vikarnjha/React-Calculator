import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

const Calculator = () => {
  return (
    <>
    <div className="container">
        <span>Calculator</span>
        <div className="input">
            <input placeholder='0' />
        </div>
        <button value="(">(</button>
        <button value=")">)</button>
        <button value="%">%</button>
        <button value="AC">AC</button>
        
        <button value="7">7</button>
        <button value="8">8</button>
        <button value="9">9</button>
        <button value="/">/</button>

        <button value="4">4</button>
        <button value="5">5</button>
        <button value="6">6</button>
        <button value="*">x</button>

        <button value="1">1</button>
        <button value="2">2</button>
        <button value="3">3</button>
        <button value="+">+</button>

        <button value="Back">
        <FontAwesomeIcon icon={faDeleteLeft} />
        </button>
        <button value="0">0</button>
        <button value="=">=</button>
        <button value="-">-</button>

    </div>

    </>
  )
}

export default Calculator
