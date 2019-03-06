import React from "react";
import Control from "./Controls";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("<Control />", () => {
  it("should render both buttons when gate is closed and locked", () => {
    const { getByTestId } = render(<Control locked={true} closed={true} />);
    const lockedBtn = getByTestId("locked-btn");
    const closedBtn = getByTestId("closed-btn");

    expect(lockedBtn).toHaveTextContent("Unlock Gate");
    expect(closedBtn).toHaveTextContent("Open Gate");
  });

  it("should render both buttons when gate is open and unlock", () => {
    const { getByTestId } = render(<Control locked={false} closed={false} />);
    const lockedBtn = getByTestId("locked-btn");
    const closedBtn = getByTestId("closed-btn");

    expect(lockedBtn).toHaveTextContent("Lock Gate");
    expect(closedBtn).toHaveTextContent("Close Gate");
  });
});
