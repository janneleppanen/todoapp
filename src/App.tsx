import * as React from "react";
import { useState } from "react";
import { connect } from "react-redux";

import TaskList from "./components/TaskList";
import { addTask, updateTask } from "./reducers/TaskListReducer";

interface Props {
  tasks: TaskListState;
  addTask: Function;
  updateTask: Function;
}

const App = ({ tasks, addTask, updateTask }: Props) => {
  const [newTaskInput, setNewTaskInput] = useState("");

  return (
    <div className="app">
      <TaskList tasks={tasks} onUpdate={(task: Task) => updateTask(task)} />

      <form
        onSubmit={e => {
          e.preventDefault();
          addTask(newTaskInput);
          setNewTaskInput("");
        }}
      >
        <input
          type="text"
          value={newTaskInput}
          onChange={e => setNewTaskInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ tasks }: RootState) => ({ tasks });

export default connect(
  mapStateToProps,
  { addTask, updateTask }
)(App);
