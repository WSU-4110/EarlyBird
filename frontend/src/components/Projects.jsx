import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Projects.css'
import Post from './Post';

var category;

function Projects() {

    const  [projectPost, setProjectPost] = useState([{
        category: '',
        title: '',
        content: ''
    }])
    
    useEffect(()=> {
        const post = async() => {
         const response = await axios.get('http://localhost:3001/proj')
         .then(response => {
           setProjectPost(filterData(response.data));
         })
         };
         post();
      });

      function filterData(inputs, key){
        key = 'Project'
        return inputs.filter((input) => 
        input.category.includes(key));
      }2
      
      
      
     const Posts = projectPost.map((p) => {
          return <Post
          title = {p.title}
          content = {p.content}
          />  
      })
    
    function projects(){
      return <div class = "projectPosts">
      <h1> Projects </h1>

      </div>
    }
 
} 

export default Projects;