import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import CreatePost from './components/CreatePost';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import TechInterview from './components/TechInterview';
import StudyRes from './components/StudyRes';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import Search from './components/Search';
import Footer from './components/Footer';
import Results from './components/Results';


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
       <Search/>
        <Switch>
        <Route path='/' exact component={Home}>
           <Home/>
          </Route>
          <Route path='/About' exact component={About}>
           <About/>
          </Route>
          <Route path='/projects' exact component={Projects}>
           <Projects/>
          </Route>
          <Route path='/TechInterview' exact component={TechInterview}>
           <TechInterview/>
          </Route>
          <Route path='/StudyRes' exact component={StudyRes}>
           <StudyRes/>
          </Route>
          <Route path='/CreatePost' exact component={CreatePost}>
           <CreatePost/>
          </Route>
          
          <Route path= "/Results">
           <Results/>
          </Route>
      
          <Route path='/Login' exact component={Login}>
           <Login/>
          </Route>
          <Route path='/Register' exact component={Register}>
            <Register />
          </Route>
        </Switch>

        
           <Footer/>
      
    </Router>
     
   );     
}


export default App;
