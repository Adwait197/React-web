import React from "react";

const Todolist = (props) => {
  return (
    <li className="list-item" style={props.item.checked ? { textDecoration: 'line-through' } : null}>
      {props.item.label}
      <input
        type="checkbox"
        checked={props.item.checked}
        onChange={(e) => {
          props.handlechange(e.target.checked, props.item.id)
        }}
      />
    </li>
  );
};

export default Todolist;
