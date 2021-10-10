import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import CreatePost from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import TechInterview from './components/TechInterview';
import StudyRes from './components/StudyRes';
import Register from './components/Register';
import Login from './components/Login';





function App() {


  //we will need to return:
  //Navbar '
  //Home page
  //Projects page
  //Technical Interview page
  //Study Rescource page
  //About page
  return (
    
    
    <Router>
       
       <Navbar/>

      
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
          <Route path= "/Login">
           <Login/>
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
        </Switch>
      
    </Router>
      
   );  
   
   
   

   
}


export default App;
