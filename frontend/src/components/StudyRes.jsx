import React, { useEffect, useState } from "react";
import axios from 'axios';
import './StudyRes.css'

var category;


function StudyRes() {

    const [StudyResPost, setStudyResPost] = useState([{
        category: '',
        title: '',
        content: ''
    }])
    
    useEffect(()=> {
        const post = async() => {
         const response = await axios('http://localhost:3001/StudyRes')
         setStudyResPost(response.data);
         };
         post();
      });
      
      
     const Posts = StudyResPost.map((p) => {
          return <div>
          <h2>{p.title}</h2>
          <p>{p.content}</p>
          </div>  
      })
    
    
 return <div class = "StudyResPosts">
                    <h1> Study Resources</h1>
                    {Posts}

                    </div>
} 


export default StudyRes;
