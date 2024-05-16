import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Wrapper 스타일 컴포넌트
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: antiquewhite;
  padding: 0 5%;
  border-radius: 10px;
  height: 70vh;
  @media screen and (max-width: 768px) {
    height: 90vh; /* 화면의 너비가 768px 이하일 때 높이 조정 */
  }
`;
const TodoTitle = styled.h1`
  color: #505050;
`;
const TodoInput = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;
const TodoButton = styled.button`
  padding: 10px;
  background-color: #ffd5a6;
  border: 2px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
`;
const TodoListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
`;
const DeleteButton = styled.button`
  background-color: #ff6464;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function TodoList() {
  const [todos, setTodos] = useState([]); // 객체를 담는 배열
  const [todo, setTodo] = useState(''); // todo는 문자열

  // 새로고침 시
  useEffect(() => {
    // 로컬 스토리지에서 todos 데이터를 가져옴
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos); // 데이터가 있으면 해당 데이터를 상태로 설정
    }
  }, []);

  const addTodo = () => {
    if (todo === "") {
      alert("할 일을 입력하세요.");
      return;
    }
    const newTodos = [...todos, { text: todo, completed: false }];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos)); // 입력한 데이터를 로컬 스토리지에 저장
    setTodo(""); // todo를 빈 문자열로 초기화
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos)); // 삭제한 후의 데이터를 로컬 스토리지에 저장
  };

  const handleCheck = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos)); // 변경된 데이터를 로컬 스토리지에 저장
  };

  return (
    <Wrapper>
      <TodoContainer>
        <TodoTitle>일정</TodoTitle>
        <form>
          <TodoInput
            id="todo-input"
            type="text"
            placeholder="추가할 일정을 입력하세요."
            value={todo} // 입력란을 초기화하게 됨 (todo는 빈 문자열)
            onChange={(e) => setTodo(e.target.value)}
          />
          <TodoButton id="todo-button" type="button" onClick={addTodo}>
            추가
          </TodoButton>
        </form>
        <List>
          {todos.map((item, index) => (
            <TodoListItem key={index}>
              <input
                type="checkbox"
                onChange={() => {
                  handleCheck(index);
                }}
                checked={item.completed}
              />
              <span style={{ textDecoration: item.completed ? "line-through" : "none" }}>{item.text}</span>
              <DeleteButton onClick={() => handleDelete(index)}>삭제</DeleteButton>
            </TodoListItem>
          ))}
        </List>
      </TodoContainer>
    </Wrapper>
  );
}

export default TodoList;
