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
import Repositories from "../components/Repositories";
import Repository from "../templates/Repository";

test("Repositories of a user are correctly listed", () => {
  const component = render(
    <Repositories
      username="testuser"
      repoList={[
        { name: "repo1", url: "url1" },
        { name: "repo2", url: "url 2" },
      ]}
    />
  );

  const repos = component.getAllByTestId("repo-name");
  expect(repos.length).toBe(2);
  expect(component.getByText("repo1")).toBeTruthy();
  expect(component.getByText("repo2")).toBeTruthy();
});
