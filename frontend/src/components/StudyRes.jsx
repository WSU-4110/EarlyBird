import React from "react";
import './StudyRes.css';




function showForm(){
    document.getElementById('show').innerHTML= document.getElementsById("postButton")


      }
      
      

     const Posts = StudyResPost.map((p) => {
          return <Post
          title = {p.title}
          content = {p.content}
          />  
      })
    
              
                    

              

                    </div>
}
export default StudyRes;