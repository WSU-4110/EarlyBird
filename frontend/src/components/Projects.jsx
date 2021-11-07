import React, { Component, useEffect, useState } from "react";
import axios from 'axios';
import './Projects.css'
import Category from  "./Category.jsx";


    
function Projects() {
    const [input, setInput] = useState([{
        category: '',
        title: '',
        content: ''
    }])


    
    useEffect(()=> {
        const post = async() => {
         const response = await axios('http://localhost:3001/proj')
         setInput(response.data);
         };
         post();
      });
    
    
 return <div class = "projectPosts">
                    <h1> Projects </h1>
                    {Category}

                    </div>

} 

export default Projects;