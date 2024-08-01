import React from 'react'

const Todo = (props) => {
  return (
    <div className="d-f">
        <div style={{textDecoration : props.todo.complete ?"linge-through": ""}} onClick={props.toggleCompletes}>{props.todo.text}</div>
        <button className="delete-btn" onClick={props.onDelete}>x</button>

    </div>
  );
};

export default Todo