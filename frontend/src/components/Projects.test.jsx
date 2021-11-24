import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Projects.css';
import Post from './Post';
import { jssPreset } from "@material-ui/styles";


//Test 1
test("Render Projects without any errors.", () => {
    expect( () => render(<Projects />));
});

//Test 2

const proj = () => [projectPost, setProjectPost] = useState([{
    category: '',
    title: '',
    content: '',
}])

test('Ensure values are proper.', () =>{
    expect(useState.category = 'abcd');
    expect(useState.title= 'title');
    expect(useState.content ="this is content");
});

//Test 3

test('Test to make sure post is paired up with async.', () =>{

    () => expect(post).toHaveBeenCalledWith(async);

});

//Test 4

function filterData(inputs, key){
    key = 'Project'
    return inputs.filter((input) => 
    input.category.includes(key));
  }

test ('Ensure data is filtered.' ,()=>{
    expect( filterData.key="Project");

});

//Test 5

test('Test for the project post.', () =>{

    () => expect(Posts).toHaveBeenCalledWith(projectPost);

});

//Test 6
function projects(){
    return <div class = "projectPosts">
    <h1> Projects </h1>
    </div>
  }

test("Ensures Projects name shows up.", () =>{
    expect( projects.h1=" Projects ");

});