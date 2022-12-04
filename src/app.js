import React from "react";
import Wrapper from "./components/Wrapper";
import TopContainer from "./components/TopContainer";
import BotContainer from "./components/BotContainer";
import Todo from "./components/Todo";

export function App() {

    const [todos, setTodos] = React.useState([
        {
            id: 1229941504908,
            title: "Todo 1"
        }
    ]);

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const saveTodo = () => {
        const newTodoTitle = document.querySelector(".todoInput").value;

        newTodoTitle.length > 1 ? setTodos([...todos, { id: Date.now(), title: newTodoTitle }]) : alert("Please enter a todo");
    }

    const onKeyDownHandler = (e) => {
        if (e.key === "Enter") {
            saveTodo();
        }
    }

    return (
        <Wrapper onKeyDown={onKeyDownHandler}>
            <TopContainer onClick={saveTodo}/>
            <BotContainer>
                {
                    todos.map((todo, index) => {
                        return <Todo key={index} todo={todo.title} index={todo.id} onClick={() => removeTodo(todo.id)}/>
                    })
                }
            </BotContainer>
        </Wrapper>
    );
}