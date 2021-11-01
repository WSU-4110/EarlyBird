import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import CreatePost from './components/CreatePost';
import Home from './components/Home';
import Projects from './components/Projects';
import TechInterview from './components/TechInterview';
import StudyRes from './components/StudyRes';
import Register from './components/Register';
import Login from './components/Login';
import Search from './components/Search';
import Results from './components/Results';
import Post from './components/Post';
import Footer from './components/Footer';



function App() {

  return (
    
    
    <Router>
       
       <Navbar/>
       <Search/>
      
        <Switch>
        <Route path= "/Home">
           <Home/>
          </Route>
          <Route path= "/Projects">
           <Projects/>
          </Route>
          <Route path= "/TechInterview">
           <TechInterview/>
          </Route>
          <Route path= "/StudyRes">
           <StudyRes/>
          </Route>
          <Route path= "/CreatePost">
           <CreatePost/>
          </Route>
          <Route path= "/Results">
           <Results/>
          </Route>
          <Route path= "/Post">
           <Post/>
          </Route>
          <Route path= "/Login">
           <Login/>
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
        </Switch>
    
    
     <Footer/>
      
    </Router>
     
   );  
   
   
   

   
}


export default App;
