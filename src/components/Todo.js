import React from "react";
import { connect } from "react-redux";

const Todo = ({ todo }) =>
  todo.content && todo.content.trim() !== "" ? (
    <li className="todo-item">{todo.content}</li>
  ) : null;

export default connect(null, {})(Todo);
