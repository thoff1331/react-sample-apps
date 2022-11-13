import * as React from 'react';
import { useState } from 'react';

export default function Todo() {
  const [items, setItems] = useState(['Clean']);
  const [userInput, setUserInput] = useState('');
  function addItems() {
    setItems((items) => [...items, userInput]);
    setUserInput('');
  }
  function removeItems(e) {
    let itemToRemove = e.innerHTML;
    console.log(items.indexOf(itemToRemove));
    setItems((items) => items.filter((el) => el !== itemToRemove));
  }
  return (
    <div className="todo-container">
      <div>
        <input
          value={userInput}
          placeholder="Add Items to do list"
          onChange={(e) => setUserInput(e.target.value)}
        />{' '}
        <button onClick={() => addItems()}>Add</button>
      </div>
      {items.map((el) => {
        return <h1 onClick={(e) => removeItems(e.target)}>{el}</h1>;
      })}

      <p>Click an item to delete it from the list</p>
    </div>
  );
}
