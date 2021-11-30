import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search";

//Test 1
test("Testing input exists", () => {
    render(<Search />)
    const input = screen.getByTestId("key");
    expect(input);
})


//Test 2
describe("Input search keyword", () => {
    it("should be able to type into input", async () => {
        render(
            <Search />
        );
        const inputElement = screen.getByTestId("key");
        fireEvent.change(inputElement,{ target: {value: "EarlyBird"} })
        expect(inputElement.value).toBe("EarlyBird");
    });
});

//Test 3
const cl = () => [isClick, setClick] = useState(false);

test("testing click", () => {
    expect(cl.isClick == false);
})

test("sign up and sign in shows up", () =>{
    expect( Search.button=" Search ");
});