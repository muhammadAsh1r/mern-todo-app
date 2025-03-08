import { useState } from "react";

import Header from "./components/Header";
import Form from "./components/Form";

import "./App.css";
import Task from "./components/Task";

const DUMMY_TASK = [
  {
    id: 1,
    title: "Math Assignment",
    description: "Differential equation exercise 10.2",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Gym Workout",
    description: "Physics Work!",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Play football",
    description: "Football match at 9'o clock.",
    isCompleted: false,
  },
];

function App() {
  const [taskCount, setTaskCount] = useState(3);
  const submitHandler = (task) => {
    setTaskCount(taskCount + 1);
    DUMMY_TASK.push({ ...task, id: taskCount });
  };

  return (
    <div className="App">
      <Header />
      <Form handleSubmit={submitHandler} />
      <Task tasks={DUMMY_TASK} />
    </div>
  );
}

export default App;
