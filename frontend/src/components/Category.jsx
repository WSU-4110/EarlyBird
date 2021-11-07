import React, {useState,useEffect} from "react";
import axios from 'axios';
import CreatePost from "./CreatePost.jsx";

function Category(){
    const projectKey = "Projects";
    const techInterKey = "Technical Interviews";
    const studResKey = "Study Resources";

    const [input, setInput] = useState([{
        category: '',
        title: '',
        content: ''
    }])
    

      
      

function getCategory() {
    if (input.category == projectKey){
        const Posts = input.map((p) => {
            return <div>
            <h2>{p.title}</h2>
            <p>{p.content}</p>
            </div>  
        })
    }
    else if (input.category== techInterKey){
        const Posts = input.map((p) => {
            return <div>
            <h2>{p.title}</h2>
            <p>{p.content}</p>
            </div>  
        })
    }
    else if (input. category== studResKey){
        const Posts = input.map((p) => {
            return <div>
            <h2>{p.title}</h2>
            <p>{p.content}</p>
            </div>  
        })

    }
        
    }
    
}



export default Category;