import React, { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser, {precessNodes, convertNodeToElement, htmlparser2} from 'react-html-parser';
import './CreatePost.css'

function CreatePost() {
    //  create const keep track of the input
    const [input, setInput] = useState({
        category: '',
        title: '',
        content: ''

    })

    //  funtion to hanle the change in the input area
    function handleChange(event) {

        const {name, value};
    }

    return (
        <div className='createArea container-md'>
            <h4>Create a post</h4>
            <form className="row g-3">
                <div className="form-group col-md-6">
                    <select className="selections form-select">
                        <option selected>Choose a post type</option>
                        <option>Project</option>
                        <option>Technical Interview</option>
                        <option>Study Rescource</option>
                    </select>
                </div>
                <div className="form-group">
                    <input onChange={handleChange} name="title" value={input.title} className='title form-control' placeholder="Title" ></input>
                </div>

                <div className="form-group editor">
                    <CKEditor
                        className="form-control"
                        editor={ClassicEditor}
                        data={text}
                        onChange={(event, editor) => {
                            const data = editor.getData()
                            setText(ReactHtmlParser(data))
                        }}
                    />
                </div>

                <div class="button col-auto">
                <button type="button" className="cancelBtn btn-light">CANCEL</button>
                <button onClick={handleClick} type="submit" className="submitBtn btn btn-secondary">POST</button>  
                </div>
            </form>
        </div>)
}

export default CreatePost;