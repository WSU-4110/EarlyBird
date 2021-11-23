import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Projects.css';
import Post from './Post';

const Projects = require('./Projects');
it("Render Projects without any errors", () => {
    expect( () => render(<Projects />));
});

test('Test is to check to make sure update works', () =>{

    () => expect(Posts).toHaveBeenCalledWith(projectPost);
});


test('Test is to check to make sure update works', () =>{

    () => expect(post).toHaveBeenCalledWith(async);
});


test('Test is to check to make sure update works', () =>{

    () => expect(Projects).toHaveBeenCalledWith(projectPost);
    expect(p.title).toHaveBeenCalled;
});


test('Should be falsy', () => {
  ()=> expect(setProjectPost.toHaveBeenCalleWith(filterData));
  
});

test('testing if data is filtered', () => {
    expect(filterData).toBeCalledWith(inputs, key);
});