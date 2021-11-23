import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import TechInterview from './TechInterview';
import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";

//Test 2
describe('in Technical Interview tab', () => {
    test('Tab?' , () => {
        render(<TechInterview />)
      
        expect(screen.getByText('Technical Interviews'));
    })
    });

//Test 3
test('Ensure calling Posts' , () => {
    render(<TechInterview/>);
//const te = screen.getByText(/Posts/i);
const ensureCalling =  screen.getByTestId('test3');
//userEvent(te).toHave('title')

expect(ensureCalling);

});

//Test 4
const Proj = () => [projectPost, setProjectPost] = useState([{
    
   category: '',
    title: '',
    content: ''
}])

test('Ensure var take string', () =>{
    expect(useState.category = "abcd");
    expect(useState.title = "title");
    expect(useState.content = "this is content");
});

//Test 5
function filterData(inputs, key){
    key = 'Technical Interview'
    return inputs.filter((input) => 
    input.category.includes(key));
    
  }
  test('FilterData', () =>{
         expect(filterData.key = 'Technical Interview');
        
  });
  