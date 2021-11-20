import React from 'react';
import ReactDOM from 'react-dom';
import CreatePost from './CreatePost';


it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>,div)
})

