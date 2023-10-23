import React, { useState } from "react";
import drinkRecipes from "../../../models/drinkRecipes";
import Button from "../../atoms/button/button";
import HotDrinkAnimation from "../../atoms/hotDrinkAnimation/hotDrinkAnimation";
import "./hotDrinksMachine.css"

function HotDrinksMachine() {
    const [selectedDrink, setSelectedDrink] = useState("");
    const [actions, setActions] = useState([]);

    const prepareDrink = (drink) => {
        const drinkActions = drinkRecipes[drink] || [];

        setSelectedDrink(drink);
        setActions(drinkActions);
    };

    return (
        <div className="drinks-machine-holder">
            <h1>Hot Drinks Machine</h1>
            <HotDrinkAnimation />
            <div>
                <Button text="Lemon Tea" onClick={() => prepareDrink("Lemon Tea")} />
                <Button text="Coffee" onClick={() => prepareDrink("Coffee")} />
                <Button text="Hot Chocolate" onClick={() => prepareDrink("Hot Chocolate")} />
            </div>
            {selectedDrink && (
                <div>
                    <h2>Preparing {selectedDrink}</h2>
                    <ul>
                        {actions.map((action, index) => (
                            <li key={index}>{action}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default HotDrinksMachine;