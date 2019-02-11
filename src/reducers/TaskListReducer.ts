export const ADD_TASK = "ADD_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const DELETE_TASK = "DELETE_TASK";

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

export const deleteTask = (task: Task) => ({
  type: DELETE_TASK,
  payload: task
});

type Action = BaseAction;

const TaskListReducer = (state = INITIAL_STATE, action: Action) => {
  const { payload, type } = action;

  switch (type) {
    case ADD_TASK:
      return [...state, payload];
    case UPDATE_TASK:
      return state.map(task => {
        if (task.id === payload.id) {
          return payload;
        }
        return task;
      });
    case DELETE_TASK:
      return state.filter(task => task.id !== payload.id);
    default:
      return state;
  }
};

export default TaskListReducer;
