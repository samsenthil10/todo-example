import React from "react";
import AddTodo from "./components/AddTodo";
import MyList from "./components/MyList";
import "./TodoApp.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
      <MyList />
    </div>
  );
}
