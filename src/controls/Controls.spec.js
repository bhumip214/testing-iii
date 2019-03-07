import React from "react";
import Control from "./Controls";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("<Control />", () => {
  it("update text of both buttons when gate is closed and locked", () => {
    const { getByTestId } = render(<Control locked={true} closed={true} />);
    const toggleLockedBtn = getByTestId("toggle-locked-btn");
    const toggleClosedBtn = getByTestId("toggle-closed-btn");

    expect(toggleLockedBtn).toHaveTextContent("Unlock Gate");
    expect(toggleClosedBtn).toHaveTextContent("Open Gate");
  });

  it("update text of both buttons when gate is open and unlock", () => {
    const { getByTestId } = render(<Control locked={false} closed={false} />);
    const toggleLockedBtn = getByTestId("toggle-locked-btn");
    const toggleClosedBtn = getByTestId("toggle-closed-btn");

    expect(toggleLockedBtn).toHaveTextContent("Lock Gate");
    expect(toggleClosedBtn).toHaveTextContent("Close Gate");
  });

  it("update text of both buttons when gate is close and unlock", () => {
    const { getByTestId } = render(<Control locked={false} closed={true} />);
    const toggleLockedBtn = getByTestId("toggle-locked-btn");
    const toggleClosedBtn = getByTestId("toggle-closed-btn");

    expect(toggleLockedBtn).toHaveTextContent("Lock Gate");
    expect(toggleClosedBtn).toHaveTextContent("Open Gate");
  });
});
