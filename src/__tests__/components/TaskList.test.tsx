import * as React from "react";
import { shallow } from "enzyme";

import TaskList from "../../components/TaskList";

const tasks = [
  { id: 1, text: "Buy milk", done: false },
  { id: 2, text: "Eat bananas", done: false },
  { id: 3, text: "Read a book", done: false }
];

describe("TaskList", () => {
  test("should render correct amount of li elements", () => {
    const wrapper = shallow(<TaskList tasks={tasks} />);
    expect(wrapper.find("li").length).toBe(3);
    expect(wrapper.find("li").length).toBe(3);
  });
});
