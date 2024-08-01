import {React, useState } from "react";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import "./App.css";
const App = () => {
  let [todos, setTodos] = useState([]);
  const [todoToshow, setTodoToshow] = useState("all");
  const [toggleComplete, setToggleAllcomplete] = useState(true);
  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };
  const handledelete =(id)=> {
    setTodos(todos.filter((todo)=> todo.id !== id))
  };
  const updateTodoToshow =(s) => {
    setTodoToshow(s);
  };
  const removeAlltodosThatAreComplete= ()=>{
    setTodos(todos.filter((todo)=> !todo.complete))
  }

    const toggleCompletes =(id)=> {setTodos(
      todos.map((todo)=> {
        if (todo.id ===id){
          return{
            ...todo ,
            complete : !todo.complete
          }
        } else{
          return todo;
        }
      }) 
    )
    };
    if (todoToshow=== "active"){
      todos.filter ((todo)=> !todo.complete);
    }else if(todoToshow==="complete"){
      todos=todos.filter((todo)=> todo.complete);
    }
  
   return (
      <div className="container">
        <TodoForm onSubmit={addTodo} />
        {
          todos.map((todo) =>(
            <Todo  key={todo.id} todo={todo} onDelete={() => handledelete(todo.id)}
            toggleCompletes= {()=>toggleCompletes(todo.id)}/>
  
          ))
        }
        <div>
          <button className="update-btn btn" onClick={()=> updateTodoToshow("all")}>All</button>
          <button className="update-btn btn" onClick={()=> updateTodoToshow("active")}>Active</button>
          <button className="update-btn btn" onClick={()=> updateTodoToshow("complete")}>complete</button>
        </div>
        
        
      </div>
    );
  
  };
  


export default App;