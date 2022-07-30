import React, { useState } from "react";

const ToDoList = () => {
  const [toDo, setToDo] = useState("")
  const onChange = (e:React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setToDo(value);
  };
  return (
    <div>
      <form onSubmit={(e:React.FormEvent<HTMLFormElement>)=>{e.preventDefault()}}>
        <input onChange={onChange} value={toDo} placeholder="Write a to do" />
        <button > Add </button>
      </form>
    </div>
  );
};


export default ToDoList