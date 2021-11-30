import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import Home from "./Home";

//1 test input text area active
test("Testing input exists", () => {
    const {getByText} = render(<Home />)
    const titleValue = getByText('Projects');
    expect(titleValue).toHaveTextContent('Projects')
})