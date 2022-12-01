import React, { useState } from "react";
import ToDoLists from "./ToDoLists";

const App = () => {
const [inputList, setInputList] = useState("");
const [Items, setItems] = useState([]);

 const itemEvent = (event) => {
    setInputList(event.target.value);
 };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });

    setInputList("");

     };

    const deleteItems = (id) => {
      console.log("deleted");
        
        setItems((oldItems)=>{
            return oldItems.filter((arrElem, index)=>{
                  return index !== id;
            })
        })
        };


    return (
      <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To Do List New</h1>
          <br />
          <input type="text" placeholder="Add an Items" onChange={itemEvent} value={inputList}/>
        <button onClick={listOfItems}> + </button>

        <ol>

         {Items.map((itemVal, index) => {
          return (
          <ToDoLists 
           key={index}
           id={index} 
           text={itemVal} 
           onSelect={deleteItems}
           />
          );
          })}
        </ol>
        </div>
      </div>
      </>
    );
};

export default App;