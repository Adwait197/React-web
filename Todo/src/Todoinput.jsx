import React, { useState } from "react";
import { Button } from '@mui/material'

function Todo(props) {
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <input className="input-box-todo"
        type="text"
        placeholder="Enter your task"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <Button variant="contained"
        size="large"
        onClick={() => {
          props.addList(inputText);
          setInputText("");
        }}
      >
        Add
      </Button>

      <h3>Task to do</h3>
    </div>
  );
}

export default Todo;