import * as React from "react";
import { useState } from "react";
import { connect } from "react-redux";

import TaskList from "./components/TaskList";
import { addTask, updateTask, deleteTask } from "./reducers/TaskListReducer";
import TaskListItem from "./components/TaskListItem";

interface Props {
  tasks: Array<Task>;
  tasksDone: Array<Task>;
  addTask: typeof addTask;
  updateTask: typeof updateTask;
  deleteTask: typeof deleteTask;
}

const App = ({ tasks, tasksDone, addTask, updateTask, deleteTask }: Props) => {
  const [newTaskInput, setNewTaskInput] = useState("");
  const [showArchive, setArchiveVisibility] = useState(false);

  return (
    <div className="app">
      <TaskList>
        {tasks.map(task => (
          <TaskListItem
            task={task}
            onUpdate={updateTask}
            onDelete={deleteTask}
          />
        ))}
      </TaskList>

      {!showArchive && (
        <button
          className="btn--text"
          onClick={e => {
            setArchiveVisibility(true);
          }}
        >
          Show archived tasks
        </button>
      )}

      {showArchive && (
        <>
          <hr />
          <TaskList>
            {tasksDone.map(task => (
              <TaskListItem
                task={task}
                onUpdate={updateTask}
                onDelete={deleteTask}
              />
            ))}
          </TaskList>
        </>
      )}
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

const mapStateToProps = ({ tasks }: RootState) => {
  return {
    tasks: tasks.filter(task => !task.done),
    tasksDone: tasks.filter(task => task.done)
  };
};

export default connect(
  mapStateToProps,
  { addTask, updateTask, deleteTask }
)(App);
