import { Button, Input } from "antd";
import { useContext, useState } from "react";
import { addTodo } from "../Redux/actions";
import { AppContext } from "./AppContextProvider";

export const TodoInput = () => {
  const { dispatch } = useContext(AppContext);

  const [title, setTitle] = useState("");

  const handleAddTodo = () => {
    dispatch(addTodo(title));
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "auto",
        display: "flex",
        padding: "10px",
        columnGap: "10px"
      }}
    >
      <Input
        type="text"
        name="title"
        placeholder="Enter Todo"
        onChange={handleChange}
      />
      <Button onClick={handleAddTodo}>Add Todo</Button>
    </div>
  );
};
