import React, { useState } from "react";
import UserTodo from "./UserTodo";
import { Button, Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'; // Import Semantic UI CSS
import { nanoid } from 'nanoid';
const App = () => {
  let [input, setInput] = useState("");
  let [task, setTask] = useState([]);


  const handleAdd = () => {
    if (input === "") {
      alert("Input can't be empty");
    } else {
      const newTask = { id: nanoid(), text: input }; // Generate a unique ID for the task
      setTask([...task, newTask]);
      setInput(""); // Clear input after adding
    }
  };
  
  const handleDelete = (taskId) => {
    const updatedTasks = task.filter((temp) => temp.id !== taskId);
    setTask(updatedTasks);
  };
  
  const handleUpdate = (taskId, newTaskText) => {
    const updatedTasks = task.map((temp) => {
      if (temp.id === taskId) {
        temp.text = newTaskText; // Update the text property of the task with the matching ID
      }
      return temp;
    });
  
    setTask(updatedTasks); // Update the state with the modified array
  };
  
  

  return (
    <div className="ui container"> {/* Semantic UI container class */}
      <h1 className="ui header">Todo App</h1> {/* Semantic UI header class */}
      <div className="ui action input">
        <Input
          type="text"
          placeholder="Enter task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ width: '550px' }}
        />
        <Button
          primary
          onClick={handleAdd}
        >
          Add
        </Button>
      </div>
      {task.map((taskvalue) => (
        <UserTodo
        id={taskvalue.id}
          tasks={taskvalue.text}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
};

export default App;