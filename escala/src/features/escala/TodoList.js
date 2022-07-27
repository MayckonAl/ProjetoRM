import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteItem, selectAllPosts } from "./todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectAllPosts);

  const delItem = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div className="">
      <div className="d-flex justify-content-around ">
      <ul className="conteiner w-75 mt-3 list-group">
        {todos.map((todo) => {
          return (
            <li  className="d-flex mb-1 justify-content-evenly list-group-item" key={todo.id}>
              <p className="me-2">{todo.data}</p>
              <p className="me-2">&#10140;</p>
              <p className="me-2">{todo.name}</p>
              <button className="btn btn-danger btn-sm h-75"
                onClick={() => {
                  delItem(todo.id);
                }}
              >
                Del
              </button>
            </li>
          );
        })}
      </ul>
    </div>
      </div>
      
  );
};

export default TodoList;
