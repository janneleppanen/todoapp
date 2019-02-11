/// <reference types="react-scripts" />

type Task = {
  id: numeber;
  text: string;
  done: boolean;
};

type TaskListState = Array<Task>;

type RootState = {
  tasks: TaskListState;
};

interface Action {
  type: string;
  payload: unknown;
}

type Reducer<S, A extends AnyAction> = (state: S | undefined, action: A) => S;

type BaseAction = {
  type: string;
  payload?: uknown;
};
