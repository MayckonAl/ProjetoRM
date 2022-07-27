import React from "react";
import AddTodo from "../features/escala/AddTodo";
import TodoList from "../features/escala/TodoList";
import Header from "./Header";

function EscalaLimpeza() {
  return (
    <div>
      <Header></Header>
      <AddTodo></AddTodo>
      <TodoList></TodoList>
    </div>
  );
}

export default EscalaLimpeza;
