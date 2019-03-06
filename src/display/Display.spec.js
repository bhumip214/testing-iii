import React from "react";
import { render, cleanup } from "react-testing-library";
import Display from "./Display";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("<Display />", () => {
  describe("Updates text", () => {
    it('display text "Open" when gate closed props is false', () => {
      const display = render(<Display closed={false} />);
      const testingGateClosed = display.getByTestId(/testingGateClosed/i);
      expect(testingGateClosed).toHaveTextContent("Open");
    });
    it('display text "closed" when gate closed props is true', () => {
      const display = render(<Display closed={true} />);
      const testingGateClosed = display.getByTestId(/testingGateClosed/i);
      expect(testingGateClosed).toHaveTextContent("Closed");
    });

    it('display text "Unlocked" when locked props is false', () => {
      const display = render(<Display locked={false} />);
      const testingGateLocked = display.getByTestId(/testingGateLocked/i);
      expect(testingGateLocked).toHaveTextContent("Unlocked");
    });

    it('display text "Locked" when locked props is true', () => {
      const display = render(<Display locked={true} />);
      const testingGateLocked = display.getByTestId(/testingGateLocked/i);
      expect(testingGateLocked).toHaveTextContent("Locked");
    });
  });

  describe("Updates styling", () => {
    it('use "green-led" class when gate is open', () => {
      const display = render(<Display closed={false} />);
      const testingGateClosed = display.getByTestId(/testingGateClosed/i);
      expect(testingGateClosed).toHaveClass("green-led");
    });

    it('use "red-led" class when gate is closed', () => {
      const display = render(<Display closed={true} />);
      const testingGateClosed = display.getByTestId(/testingGateClosed/i);
      expect(testingGateClosed).toHaveClass("red-led");
    });

    it('use "green-led" class when gate is unlocked', () => {
      const display = render(<Display locked={false} />);
      const testingGateLocked = display.getByTestId(/testingGateLocked/i);
      expect(testingGateLocked).toHaveClass("green-led");
    });

    it('use "red-led" class when gate is locked', () => {
      const display = render(<Display locked={true} />);
      const testingGateLocked = display.getByTestId(/testingGateLocked/i);
      expect(testingGateLocked).toHaveClass("red-led");
    });
  });
});
