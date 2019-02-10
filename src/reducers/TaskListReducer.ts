import { createActions, handleActions } from "redux-actions";

export const ADD_TASK = "ADD_TASK";
export const UPDATE_TASK = "UPDATE_TASK";

interface Action {
  payload?: any;
}

const INITIAL_STATE: TaskListState = [
  { id: 1, text: "Eat bananas", done: false },
  { id: 2, text: "Read a book", done: true },
  { id: 3, text: "Buy milk", done: false },
  { id: 4, text: "Code an app", done: false }
];

export const { addTask, updateTask } = createActions({
  ADD_TASK: (text: string) => {
    return { id: Math.random(), text, done: false };
  },
  UPDATE_TASK: (task: Task) => task
});

const TaskListReducer = handleActions<TaskListState, Task>(
  {
    [ADD_TASK]: (
      state: TaskListState | undefined = INITIAL_STATE,
      action: Action
    ): TaskListState => {
      return [...state, action.payload];
    },
    [UPDATE_TASK]: (
      state: TaskListState | undefined = INITIAL_STATE,
      action: Action
    ): TaskListState => {
      return state.map(task => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
    }
  },
  INITIAL_STATE
);

export default TaskListReducer;
