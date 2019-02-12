import * as React from "react";
import { useSpring, animated, useTransition } from "react-spring";

interface TaskListProps {
  tasks: Array<Task>;
  onUpdate?(task: Task): void;
  onDelete?(task: Task): void;
}

const TaskList = (props: TaskListProps) => {
  const { tasks, onUpdate, onDelete } = props;

  const trans = useTransition(tasks, task => task.id, {
    from: { opacity: 0, height: 0, transform: "translateX(2rem)" },
    enter: { opacity: 1, height: 45, transform: "translateX(0)" },
    leave: { opacity: 0, height: 0, transform: "translateY(-1rem)" },
    config: { mass: 1, tension: 200, friction: 26 }
  });

  return (
    <ul className="list">
      {tasks &&
        trans.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <TaskListItem
              key={item.id}
              task={item}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          </animated.div>
        ))}
    </ul>
  );
};

interface TaskListItemProps {
  task: Task;
  onUpdate?(task: Task): void;
  onDelete?(task: Task): void;
}

const TaskListItem = (props: TaskListItemProps) => {
  const { task, onUpdate, onDelete } = props;
  const fadeInProps = useSpring({
    opacity: 1,
    transform: `translateX(0)`,
    from: {
      opacity: 0,
      transform: `translateX(2rem)`
    }
  });

  return (
    <li className="list-item">
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
      <button
        className="btn--delete"
        onClick={(e: React.MouseEvent) => {
          onDelete && onDelete(task);
        }}
      >
        &times;
      </button>
    </li>
  );
};

export default TaskList;
