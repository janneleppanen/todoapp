import * as React from "react";
import { useSpring, animated, useTransition } from "react-spring";

import TaskListItem from "./TaskListItem";

interface TaskListProps {
  children: React.ReactNode;
}

const TaskList = (props: TaskListProps) => {
  const { children } = props;

  // const trans = useTransition(tasks, task => task.id, {
  //   from: { opacity: 0, height: 0, transform: "translateX(2rem)" },
  //   enter: { opacity: 1, height: 45, transform: "translateX(0)" },
  //   leave: { opacity: 0, height: 0, transform: "translateY(-1rem)" },
  //   config: { mass: 1, tension: 200, friction: 26 }
  // });

  return <ul className="list">{children}</ul>;

  // return (
  //   <ul className="list">
  //     {tasks &&
  //       trans.map(({ item, props, key }) => (
  //         <animated.div key={key} style={props}>
  //           <TaskListItem
  //             key={item.id}
  //             task={item}
  //             onUpdate={onUpdate}
  //             onDelete={onDelete}
  //           />
  //         </animated.div>
  //       ))}
  //   </ul>
  // );
};

export default TaskList;
