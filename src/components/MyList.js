import { connect } from "react-redux";
import TodoList from "./TodoList"

const mapStateToProps = (state) => {
  
  const { byIds, allIds } = state.todos || {};
  const todos =
    allIds && state.todos.allIds.length
      ? allIds.map((id) => (byIds ? { ...byIds[id], id } : null))
      : null;
  return { todos };
};
export default connect(mapStateToProps)(TodoList);
