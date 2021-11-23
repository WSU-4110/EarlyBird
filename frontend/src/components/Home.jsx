import React from "react";
import './Home.css'
 
//The Home function shows the three images for Projects, Study Resources, Create Posts pages. When the user clicks on the images. It will take them to those pages.
function Home() {
   return <div>
       <div class = "link">
           <div class = "image">
               <a href = "/Projects">
               <h1>Projects</h1><img  class= "i" src="https://www.kindpng.com/picc/m/390-3904786_digital-marketing-agency-mission-animation-banner-hd-png.png" width ="400" height = "480" title = "Projects" alt = "Projects"></img>
               </a>
           </div>
           <div class= "image">
               <a href="/StudyRes">
               <h1>Study Resourcs</h1><img class= "i" src="https://www.pngitem.com/pimgs/m/7-78326_kisspng-cartoon-animation-clip-art-cartoon-books-5aa7d9b3c343d6.png" width ="400" height = "480" title = "Study Resources" alt = "Study Resources"></img>
               </a>
           </div>
           <div class = "image">
               <a href="./CreatePost">
               <h1>Create Posts</h1><img class= "i" src="https://images.clipartlogo.com/files/istock/previews/9436/94369965-typing-with-laptop-blank-screen-for-text-space.jpg" width ="400" height = "480" title = "Create Post" alt = "Create Posts"></img>
               </a>
           </div>
       </div>
   </div>
}
 
export default Home;
