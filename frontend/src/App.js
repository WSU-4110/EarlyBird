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
import LgIn from './components/LgIn';
import Search from './components/Search';
import Footer from './components/Footer';
import Comments from './components/Comments';

/**Imports for public and private */
import PublicPage from './components/PublicPage';
import PublicRouter from './components/PublicRouter';
import PrivatePage from './components/PrivatePage';
import PrivateRouter from './components/PrivateRouter';


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
      
          <Route path='/LgIn' exact component={LgIn}>
           <LgIn/>
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
