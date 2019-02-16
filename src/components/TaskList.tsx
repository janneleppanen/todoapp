import * as React from "react";
import { useSpring, animated, useTransition } from "react-spring";

import TaskListItem from "./TaskListItem";

interface TaskListProps {
  children: React.ReactNode;
}

const TaskList = (props: TaskListProps) => {
  const { children } = props;

  return <ul className="list">{children}</ul>;
};

export default TaskList;
