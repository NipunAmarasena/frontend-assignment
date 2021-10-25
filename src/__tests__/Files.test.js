import React from "react";
import {
  render,
  fireEvent,
  getAllByTestId,
  findAllByTestId,
  screen,
} from "@testing-library/react";
import App from "../App";
import UserDetails from "../components/UserDetails";
import Files from "../components/Files";

test("Repositories of a user are correctly listed", () => {
  const component = render(
    <Files fileList={[{name:"file1", content: "content of file 1", url:"file1 url"}, {name: "file2", content:"content of file 2", url: "file 2"}]} content="content" goBack={jest.fn()} />
  );

  const repos = component.getAllByTestId("file-name");
  expect(repos.length).toBe(2);
  expect(component.getByText("file1")).toBeTruthy();
  expect(component.getByText("file2")).toBeTruthy();
});
