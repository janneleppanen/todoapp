import { handleActions } from "../utils/redux-helpers";

export const ADD_TASK = "ADD_TASK";
export const UPDATE_TASK = "UPDATE_TASK";

const INITIAL_STATE: TaskListState = [
  { id: 1, text: "Eat bananas", done: false },
  { id: 2, text: "Read a book", done: true },
  { id: 3, text: "Buy milk", done: false },
  { id: 4, text: "Code an app", done: false }
];

export const addTask = (text: string) => ({
  type: ADD_TASK,
  payload: { id: Math.random(), text, done: false }
});

export const updateTask = (task: Task) => ({
  type: UPDATE_TASK,
  payload: task
});

type Action = BaseAction;

const TaskListReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case UPDATE_TASK:
      return state.map(task => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
    default:
      return state;
  }
};

export default TaskListReducer;
