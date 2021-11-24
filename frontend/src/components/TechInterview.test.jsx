import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import TechInterview from './TechInterview';
import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";


//Test 5
function filterData(inputs, key){
    key = 'Technical Interview'
    return inputs.filter((input) => 
    input.category.includes(key));
    
  }
  test('FilterData', () =>{
         expect(filterData.key = 'Technical Interview');
        
  });

 