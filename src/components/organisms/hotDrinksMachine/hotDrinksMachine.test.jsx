import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import HotDrinksMachine from "./hotDrinksMachine";

afterEach(cleanup);

describe("HotDrinksMachine", () => {
    test("should render the component with initial state", () => {
        render(<HotDrinksMachine />);

        // Check if the component renders the title
        expect(screen.getByText("Hot Drinks Machine")).toBeInTheDocument();

        // Check if the buttons for drinks are rendered
        expect(screen.getByText("Lemon Tea")).toBeInTheDocument();
        expect(screen.getByText("Coffee")).toBeInTheDocument();
        expect(screen.getByText("Hot Chocolate")).toBeInTheDocument();

        // Check if the "Preparing" message is not initially displayed
        expect(screen.queryByText("Preparing")).toBeNull();
    });

    test("should prepare a selected drink", () => {
        render(<HotDrinksMachine />);

        // Click on a drink button to prepare a drink
        fireEvent.click(screen.getByText("Lemon Tea"));

        // Check if the "Preparing Lemon Tea" message is displayed
        expect(screen.getByText("Preparing Lemon Tea")).toBeInTheDocument();
    });

    test("should display the actions for a selected drink", () => {
        render(<HotDrinksMachine />);

        // Click on a drink button to prepare a drink
        fireEvent.click(screen.getByText("Coffee"));

        // Check if the "Preparing Coffee" message is displayed
        expect(screen.getByText("Preparing Coffee")).toBeInTheDocument();

        // Check if the actions are displayed
        expect(screen.getByText("Boiled water.")).toBeInTheDocument();
        expect(screen.getByText("Coffee grounds brewed.")).toBeInTheDocument();
        expect(screen.getByText("Coffee poured into cup.")).toBeInTheDocument();
        expect(screen.getByText("Milk and sugar added.")).toBeInTheDocument();

        // Check if actions for another drink are not displayed
        expect(screen.queryByText("Milk and salt added.")).toBeNull();
    });
});