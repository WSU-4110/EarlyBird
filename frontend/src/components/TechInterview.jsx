import React, { useEffect, useState } from "react";
import axios from 'axios';
import './TechInterview.css'

var category;


function TechInterview() {

    const [TechInterviewPost, setTechInterviewPost] = useState([{
        category: '',
        title: '',
        content: ''
    }])
    
    useEffect(()=> {
        const post = async() => {
         const response = await axios('http://localhost:3001/TechInterview')
         setTechInterviewPost(response.data);
         };
         post();
      });
      
      
     const Posts = TechInterviewPost.map((p) => {
          return <div>
          <h2>{p.title}</h2>
          <p>{p.content}</p>
          </div>  
      })
    
    
 return <div class = "TechInterviewPosts">
                    <h1> Technical Interview</h1>
                    {Posts}

                    </div>
} 


export default TechInterview;