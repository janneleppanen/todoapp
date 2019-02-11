import * as React from "react";
import { useState } from "react";
import { connect } from "react-redux";

import TaskList from "./components/TaskList";
import { addTask, updateTask, deleteTask } from "./reducers/TaskListReducer";

interface Props {
  tasks: TaskListState;
  addTask: typeof addTask;
  updateTask: typeof updateTask;
  deleteTask: typeof deleteTask;
}

const App = ({ tasks, addTask, updateTask, deleteTask }: Props) => {
  const [newTaskInput, setNewTaskInput] = useState("");

  return (
    <div className="app">
      <TaskList tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />

      <form
        onSubmit={e => {
          e.preventDefault();
          newTaskInput && addTask(newTaskInput);
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
  { addTask, updateTask, deleteTask }
)(App);
