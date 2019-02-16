import * as React from "react";
import { useSpring, animated } from "react-spring";
import Checkbox from "./Checkbox";

interface TaskListItemProps {
  task: Task;
  onUpdate?(task: Task): void;
  onDelete?(task: Task): void;
}

const TaskListItem = (props: TaskListItemProps) => {
  const { task, onUpdate, onDelete } = props;

  const [styleProps] = useSpring(() => ({
    from: { opacity: 0, height: 0, transform: "translateX(2rem)" },
    to: { opacity: 1, height: 46, transform: "translateX(0)" }
  }));

  const id = `task-${task.id}`;

  return (
    <animated.div style={styleProps}>
      <li className="list-item">
        <Checkbox
          id={id}
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
        <button
          className="btn--delete"
          onClick={(e: React.MouseEvent) => {
            onDelete && onDelete(task);
          }}
        >
          &times;
        </button>
      </li>
    </animated.div>
  );
};

export default TaskListItem;
