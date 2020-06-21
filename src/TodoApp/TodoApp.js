import React, { useState } from "react";
import TodoInput from "./TodoInput/TodoInput";
import TodoList from "./TodoList/TodoList";
import Footer from "./Footer/Footer";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

// const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];
const initialTodos = [
  {
    id: Date.now(),
    description: "Hi, welcome to my Todo App made using",
    status: "Active",
  },
  {
    id: Date.now() + 1,
    description: "ReactJS and Material UI",
    status: "Active",
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ffffff",
    minWidth: "600px",
    maxWidth: "600px",
    borderRadius: "5px",
    paddingLeft: "5px",
    paddingRight: "5px",
    paddingBottom: "5px",
  },
}));
export default function ToDoApp() {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState("All");

  const addTodo = (text) => {
    const todo = {
      id: Date.now(),
      description: text,
      status: "Active",
    };
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    // localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    // localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const editTodo = (id, editedDescription) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, description: editedDescription } : todo
    );
    setTodos(updatedTodos);
    // localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const toggleTodo = (id) => {
    console.log("toggle", id);
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, status: todo.status === "Active" ? "Completed" : "Active" }
        : todo
    );
    setTodos(updatedTodos);
    // localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const archiveTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            status: todo.status === "Archived" ? "Active" : "Archived",
          }
        : todo
    );
    setTodos(updatedTodos);
    // localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const switchFilter = (filter) => {
    setFilter(filter);
  };

  const getCount = () => {
    let activeCount = 0,
      completedCount = 0;
    todos.forEach((todo) => {
      activeCount += todo.status === "Active";
      completedCount += todo.status === "Completed";
    });
    return { activeCount: activeCount, completedCount: completedCount };
  };

  const clearCompleted = () => {
    const updatedTodos = todos.filter((todo) => todo.status !== "Completed");
    setTodos(updatedTodos);
    // localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const toggleCompleted = (checked) => {
    const updatedTodos = todos.map((todo) => ({
      ...todo,
      status:
        todo.status !== "Archived"
          ? checked === true
            ? "Completed"
            : "Active"
          : "Archived",
    }));
    setTodos(updatedTodos);
    // localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const filterTodos = () => {
    switch (filter) {
      case "Active":
        return todos.filter((todo) => todo.status === "Active");
      case "Completed":
        return todos.filter((todo) => todo.status === "Completed");
      case "Archived":
        return todos.filter((todo) => todo.status === "Archived");
      default:
        return todos.filter((todo) => todo.status !== "Archived");
    }
  };
  const classes = useStyles();
  const currentTodos = filterTodos();
  const currentTodosCount = getCount();
  return (
    <Container maxWidth="sm" fixed="true" className={classes.root}>
      <TodoInput
        addTodo={addTodo}
        toggleCompleted={toggleCompleted}
        todosCount={currentTodosCount}
      />
      <Divider />
      {currentTodos.length > 0 && (
        <TodoList
          todos={currentTodos}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleTodo={toggleTodo}
          archiveTodo={archiveTodo}
        />
      )}
      <Footer
        switchFilter={switchFilter}
        todosCount={currentTodosCount}
        clearCompleted={clearCompleted}
      />
    </Container>
  );
}
