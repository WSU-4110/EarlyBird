import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from 'axios';

//import { CKEditor } from '@ckeditor/ckeditor5-react';
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//import ReactHtmlParser, {precessNodes, convertNodeToElement, htmlparser2} from 'react-html-parser';
import './CreatePost.css'


function CreatePost() {

    

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const history = useHistory();
    const location = useLocation();

    //  create const keep track of the input
    const [input, setInput] = useState({
        category: '',
        title: '',
        content: ''

    })

    //if user exsits, we check the token
    useEffect(() => {
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')));
        if(!user){
            history.push('/Login');
        }
    }, [location]);

  


    //funtion to handle the change in the input area

    function handleChange(event) {
        const { name, value } = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })

    }
    

    // function to handle the post click
    function handleClick(event) {
        event.preventDefault();
        const newPost = {
            category: input.category,
            title: input.title,
            content: input.content
        }

    


        axios
            .post('http://localhost:3001/postCreation', newPost)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    function handleRoute() {
        history.push("/");
        }

    return (
        <div className='createArea container-md'>
            <h4>Create a post</h4>
            <form className="row g-3">
                <div data-testid="test1" className="form-group col-md-6">
                    <select onChange={handleChange} name="category" value={input.category} className="selections form-select">
                        <option selected>Choose a post type</option>
                        <option>Project</option>
                        <option>Technical Interview</option>
                        <option>Study Rescource</option>
                    </select>
                </div>
                <div className="form-group">
                    <input onChange={handleChange} name="title" value={input.title} className='title form-control' placeholder="Title" ></input>
                </div>



                <div className="form-group ">
                    <input onChange={handleChange} name="content" value={input.content} className='content form-control' placeholder="Content" ></input>
                </div>


                <div  class=" col-auto">
                    <button onClick={handleRoute} type="button" className="cancelBtn btn-light">CANCEL</button>
                    <button onClick={handleClick} type="submit" className="submitBtn btn btn-secondary">POST</button>
                </div>
            </form>
        </div>)

}

export default CreatePost;
