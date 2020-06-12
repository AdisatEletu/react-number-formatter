import React from "react";


/**
 * A function that takes in a value and format it
 * like the social media followers counter; e.g
 * if you pass in a number above 999 it converts it to 1k
 */

const NumberFormatter = ({value}) => {
  return (
    <div data-testid={"numberFormatter"}>
      {value > 999 && value < 999999 ? (value / 1000).toFixed(1) + "K" : value > 999999 ? (value / 1000000).toFixed(1) + "M" : value}
    </div>
  )
};
export default NumberFormatter;
