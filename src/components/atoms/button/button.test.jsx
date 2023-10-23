import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import Button from "./button";

afterEach(cleanup);

describe("Button", () => {
    test("should render a button with the specified text", () => {
        const buttonText = "Click me";
        const onClickMock = jest.fn(); // Mock a click handler

        render(<Button text={buttonText} onClick={onClickMock} />);

        // Check if the button is rendered with the specified text
        const buttonElement = screen.getByText(buttonText);
        expect(buttonElement).toBeInTheDocument();

        // Check if the onClick function is called when the button is clicked
        fireEvent.click(buttonElement);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});