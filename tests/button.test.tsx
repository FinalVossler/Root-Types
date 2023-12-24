import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../src";

describe("Button", () => {
  it("should render button", () => {
    const buttonText: string = "buttonText";

    render(<Button label={buttonText} />);

    expect(screen.getByText(buttonText));
  });
});
