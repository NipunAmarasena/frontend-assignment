import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";
import UserDetails from "../components/UserDetails";
import Repositories from "../components/Repositories";

let getByTestId;

beforeEach(() => {
  const component = render(
    <UserDetails handleOnchange={jest.fn()} handleOnsubmit={jest.fn()} onBlurHandler={jest.fn()} />
  );
  getByTestId = component.getByTestId;
});

const completePage1 = () => {
  const textElement = getByTestId("txt-username");

  fireEvent.change(textElement, {
    target: {
      value: "user1",
    },
  });
  expect(textElement).toHaveValue("user1");
};

test("UserDetails component renders with correct header", () => {
  const headerElement = getByTestId("header");
  expect(headerElement.textContent).toBe("Enter Github Username");
});

test("Username textfield behaviour when changed", () => {
  const textElement = getByTestId("txt-username");

  fireEvent.change(textElement, {
    target: {
      value: "user1",
    },
  });
  expect(textElement).toHaveValue("user1");
});

test("Clicking on search button navigates to next page and populate values", () => {
  const button = getByTestId("btn-search");
  fireEvent.click(button);
  const repoComponent = render(
    <Repositories
      username="user1"
      repoList={[
        { name: "repo1", url: "url1" },
        { name: "repo2", url: "url 2" },
      ]}
    />
  );
  const header = repoComponent.getByTestId("repo-header");
  expect(header.textContent).toBe("Repositories of user-user1");
});
