import React, { useEffect, useState } from "react";
import axios from 'axios';
import Post from './Post';
import './TechInterview.css';
function TechInterview(){
    
        
        const [projectPost, setProjectPost] = useState([{
            category: '',
            title: '',
            content: ''
        }])
       
        
        useEffect(()=> {
            const post = async() => {
                
             const response = await axios.get('http://localhost:3001/TechInter')
             .then(response => {
               setProjectPost(filterData(response.data));
             })
             };
            
             post();
          });
    
          function filterData(inputs, key){
            key = 'Technical Interview'
            return inputs.filter((input) => 
            input.category.includes(key));
            
          }
          
          
          
         const Posts = projectPost.map((p) => {
              return <Post
              title = {p.title}
              content = {p.content}
              />  
          })
        
        
     return <div class = "techInterviewPosts">
                        <h1 >Technical Interviews 
                            <div data-testid = 'test3'>
                        {Posts}
                        </div>
                        </h1>
                    
    
                        </div>
    } 
    
export default TechInterview;
