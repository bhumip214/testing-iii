import React from "react";
import Dashboard from "./Dashboard";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("<Dashboard />", () => {
  it("update text when clicked on a button to toggle open and closed", () => {
    const { getByTestId } = render(<Dashboard locked={false} closed={false} />);

    const toggleClosedBtn = getByTestId("toggle-closed-btn");
    const testingGateClosed = getByTestId("testingGateClosed");

    fireEvent.click(toggleClosedBtn);
    expect(toggleClosedBtn).toHaveTextContent("Open Gate");
    expect(testingGateClosed).toHaveTextContent("Closed");
  });

  it("update text when clicked on a button to toggle unlocked and locked", () => {
    const { getByTestId } = render(<Dashboard locked={true} closed={true} />);

    const toggleLockedBtn = getByTestId("toggle-locked-btn");
    const testingGateLocked = getByTestId("testingGateLocked");

    fireEvent.click(toggleLockedBtn);
    expect(toggleLockedBtn).toHaveTextContent("Lock Gate");
    expect(testingGateLocked).toHaveTextContent("Unlocked");
  });
});
