import { combineReducers } from "redux";

import TaskListReducer from "./TaskListReducer";

const rootReducer = combineReducers({
  tasks: TaskListReducer
} as any);

export default rootReducer;

function helloWorld(i: any) {
  return i;
}

helloWorld("ok");
