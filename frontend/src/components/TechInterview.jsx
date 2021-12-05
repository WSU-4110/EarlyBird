import React, { useEffect, useState } from "react";
import axios from 'axios';
import './TechInterview.css'
import Post from './Post';

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
          return <Post
         title = {p.title}
        content ={p.content}
          />  
      })
    
    
 return <div class = "TechInterviewPosts">
                    <h1> Technical Interview</h1>
                    {Posts}

                    </div>
} 


export default TechInterview;