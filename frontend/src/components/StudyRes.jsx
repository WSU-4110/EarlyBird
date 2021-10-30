import React from "react";
import './StudyRes.css';




function showForm(){
    document.getElementById('show').innerHTML= document.getElementsById("postButton")


}


function StudyRes() {

    return <div>
       <div class="button col-auto">
                <button type="button" id = "postButton" onClick = "showForm();" className="createStudResPost">Create Post</button>
                </div>
                
                <form id= 'show'>
                    <label>Create Study Resource Post</label>
                    <input type = "text" name = "input" ></input>
                    <br></br>
                    <input type = "submit" value = "Post" name = "post"></input>
                    <input type = "reset" value = "Reset" name = "reset"></input>
                    <button type = "button" value = "Cancel" name= "cancButton"><a href = "./StudyRes"></a></button>
                </form>
            
              
                    

              

        </div>
           
   
}

export default StudyRes;