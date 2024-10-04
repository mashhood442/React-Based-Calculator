
import { useState } from 'react';
import './App.css'



function App() {
  const [current_operand, Set_current_operand] = useState('');
  const [previous_operand, Set_previous_operand] = useState('');
  const [operator, Set_operator] = useState('');

function append (Number: string){
  Set_current_operand(current_operand + Number);
}

function operation (op : string){
  if (current_operand === '')
    return;

  Set_previous_operand(current_operand);
  Set_operator(op);
  Set_current_operand('');
}

function clear(){
  
  Set_current_operand('');
  Set_previous_operand('');
  Set_operator('');
}

function backspace(){
  Set_current_operand(current_operand.slice(0, -1));
}

function calculate(){
   const prev = parseFloat (previous_operand);
   const current = parseFloat (current_operand);
 
   let result;

   switch (operator) {
    case '+':
      result = prev + current;
      break;
      case '-':
      result = prev - current;
      break;
      case '*':
      result = prev * current;
      break;
      case '/':
      result = prev / current;
      break;
   
    default:
      return

   }

   Set_current_operand(result.toString());
   Set_previous_operand('');
   Set_operator('');
 }

  return (
    <div className='title'> <p>React Based Simple Calculator </p>
    <div className='case'>
      <div className='calculator'>
        <div className='output'>
          <div className='previous_operand'>{previous_operand} {operator}</div>
          <div className='current_operand'>{current_operand}</div>
        </div>

        <button className='span-two' onClick={clear}>AC</button>
        <button onClick={backspace}>DEL</button>
        <button onClick={() => operation('+')}>+</button>
        <button onClick={() => operation('-')}>-</button>
        <button onClick={() => operation('*')}>*</button>
        <button onClick={() => operation('/')}>/</button>
        <button onClick={() => append('1')}>1</button>
        <button onClick={() => append('2')}>2</button>
        <button onClick={() => append('3')}>3</button>
        <button onClick={() => append('4')}>4</button>
        <button onClick={() => append('5')}>5</button>
        <button onClick={() => append('6')}>6</button>
        <button onClick={() => append('7')}>7</button>
        <button onClick={() => append('8')}>8</button>
        <button onClick={() => append('9')}>9</button>
        <button onClick={() => append('0')}>0</button>
        <button className='equal_to' onClick={calculate}>=</button>
      </div>
    </div>
    </div>
  );
}

export default App;