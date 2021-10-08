import React, { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function CreatePost() {
    const [text, setText] = useState("")

    return (
        <div className='container-md'>
            <h4>Create a post</h4>
            <form className="row g-3">
                <div className="form-group col-md-6">
                    <select class="form-select">
                        <option selected>Choose a post type</option>
                        <option>Project</option>
                        <option>Technical Interview</option>
                        <option>Study Rescource</option>
                    </select>
                </div>
                <div className="form-group">
                    <input className='form-control' placeholder="Title"></input>
                </div>

                <div className="form-group editor">
                    <CKEditor
                        editor={ClassicEditor}
                        data={text}
                        onChange={(event, editor) => {
                            const data = editor.getData()
                            setText(data)
                        }}
                    />
                </div>

                <div class="col-auto">
                    <button type="submit" class="btn btn-secondary">POST</button>
                </div>
            </form>
        </div>)
}

export default CreatePost;