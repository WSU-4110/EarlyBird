import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Projects.css'

var category;

function Projects() {

    const [projectPost, setProjectPost] = useState([{
        category: '',
        title: '',
        content: ''
    }])
    
    useEffect(()=> {
        const post = async() => {
         const response = await axios('http://localhost:3001/proj')
         setProjectPost(response.data);
         };
         post();
      });
      
      
     const Posts = projectPost.map((p) => {
          return <div>
          <h2>{p.title}</h2>
          <p>{p.content}</p>
          </div>  
      })
    
    
 return <div class = "projectPosts">
                    <h1> Projects </h1>
                    {Posts}

                    </div>
} 

export default Projects;