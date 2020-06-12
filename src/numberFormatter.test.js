import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {cleanup, render} from "@testing-library/react";

import NumberFormatter from "./numberFormatter";

afterEach(cleanup);

it('renders correctly', () => {
  
  const value = 700000;
  const {getByTestId} = render(<NumberFormatter value={value}/>);
  const formatter = value > 999 && value < 999999 ? (value / 1000).toFixed(1) + "K" : value > 999999 ? (value / 1000000).toFixed(1) + "M" : value;
  
  expect(getByTestId("numberFormatter")).toHaveTextContent(formatter);
});