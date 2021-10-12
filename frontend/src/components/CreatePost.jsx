import React, { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser, {precessNodes, convertNodeToElement, htmlparser2} from 'react-html-parser';
import './CreatePost.css'

function CreatePost() {
    const [text, setText] = useState("");

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
                    <input className='title form-control' placeholder="Title" name="title"></input>
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
                <button type="submit" className="submitBtn btn btn-secondary">POST</button>  
                </div>
            </form>
        </div>)
}

export default CreatePost;