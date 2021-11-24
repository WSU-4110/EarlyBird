import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Results from "./Results";


//Test 4
test("post responding", () => {
    render(<Results />);

    const isCallingPost = screen.getByTestId("post");
    expect(isCallingPost);
})