import React, { useEffect } from "react";
import Todo from "./Todoinput";
import { useState } from "react";
import Todolist from "./Todolist";
import './app.css'
import { Typography } from '@mui/material'

function App() {
  const [listTodo, setListTodo] = useState([]);
  const addList = (inputText) => {
    if (inputText !== "")
      setListTodo([
        ...listTodo,
        {
          label: inputText,
          checked: false,
          id: Math.random() * 100,
        },
      ]);
  };
  const handlechange = (checked, id) => {
    const arr = listTodo.map((item) => {
      if (item.id === id) { item.checked = checked }
      return item
    });
    setListTodo(arr)
  }

  useEffect(() => {
    console.log('list >> ', listTodo)
  }, [listTodo])

  return (
    <div className="App">
      <Typography
       variant="h2" 
       align='center'
       color='white'
       >
         Todo List</Typography>
      <hr />
      <Todo addList={addList} />
      {listTodo.map((listItem) => {
        return <Todolist
          key={listItem.id}
          item={listItem}
          handlechange={handlechange}
        />;
      })}
    </div>
  );
}

export default App;