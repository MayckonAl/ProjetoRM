import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./todoSlice";

const AddTodo = () => {
  const [data, setData] = useState("");
  const [name, setName] = useState("");

  const onChangeData = (e) => setData(e.target.value);
  const onChangeName = (e) => setName(e.target.value);

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (data && name) {
      dispatch(addItem(data, name));
      setData("");
      setName("");
    }
  };

  return (
    <div>
      <div className=" p-2 d-flex justify-content-around">
        <h2 className="text-danger fw-bolder">Monte sua Escala</h2>
      </div>
      <div className="d-flex justify-content-around">
        <form className="d-flex">
          <input
            className="form-control me-1"
          
            type="date"
            value={data}
            maxLength="6"
            onChange={onChangeData}
          ></input>
          <input
            className="form-control me-1"
            placeholder="ESCREVA O NOME"
            type="text"
            value={name}
            maxLength="16"
            onChange={onChangeName}
          ></input>
          <button className="btn btn-primary" onClick={onSubmit}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
