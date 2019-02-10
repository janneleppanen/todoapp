import * as React from "react";

interface TaskListProps {
  tasks: Array<Task>;
  onUpdate?(task: Task): void;
}

const TaskList = (props: TaskListProps) => {
  const { tasks, onUpdate } = props;
  return (
    <ul className="list">
      {tasks &&
        tasks.map(task => (
          <li key={task.id} className="list-item">
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => {
                const updatedTask = { ...task, done: !task.done };
                onUpdate && onUpdate(updatedTask);
              }}
            />
            <input
              className="task-name-input"
              type="text"
              value={task.text}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const updatedTask = { ...task, text: e.target.value };
                onUpdate && onUpdate(updatedTask);
              }}
            />
          </li>
        ))}
    </ul>
  );
};

export default TaskList;
