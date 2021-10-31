import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Post from './Post';


function Results() {
  const [posts, setPosts] = useState([])
  const [searchTerm, setTerm] = useState("")
  const location = useLocation();

  // set the search term that pass from the search component
  useEffect(() => {
    console.log(location.state)
    setTerm(location.state.searchTerm)
  },[]);

  // pass the search term to the router to search the post
  useEffect(() =>{
    axios.get("http://localhost:3001/searchPosts")
    .then(res => {
      setPosts(filterData(res.data, searchTerm))
    })
    .catch(err => {
      console.log(err);
    })
  });

  // helper function to filter the search Term
  function filterData(inputs, key){
    return inputs.filter((input) => 
    input.title.includes(key));
  }
  
  return (
    <div>
      {posts.map((postItem, index) => {
        return (
          <Post
            key={index}
            _id={postItem._id}
            title={postItem.title}
            category={postItem.category}
            content={postItem.content}
          />
        );
      })}
    </div>
  );
}


export default Results;