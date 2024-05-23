import { useEffect, useState } from "react";
import axios from "axios";
import './App.css'

const SERVER_URL = "http://localhost:4000/api/todo";

function App() {
  const [todoList, setTodoList] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(SERVER_URL);
    setTodoList(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;
    await axios.post(SERVER_URL, { text, done });
    fetchData();
  };

  return (
    <div className="App">
      <div className="todoContainer">
        <h1>TODO LIST</h1>
        <form onSubmit={onSubmitHandler}>
          <input name="text" />
          <input name="done" type="checkbox" />
          <input type="submit" value="추가" />
        </form>
        {todoList?.map((todo) => (
          <div key={todo.id} style={{ display: "flex" }}>
            <div>{todo.id}</div>
            <div>{todo.text}</div>
            <div>{todo.done ? "Y" : "N"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
