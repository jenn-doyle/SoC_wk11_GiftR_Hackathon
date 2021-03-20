// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

const testProps = {
  h1: "G~I~F~T~",
};

test("h1 text will render onto the DOM", () => {
  const { getByTestId } = render(<App {...testProps} />);
  const actual = getByTestId("heading");
  expect(actual).toBeInTheDocument();
});
