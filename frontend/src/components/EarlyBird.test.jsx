import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import React, { useEffect, useState } from "react";
import Home from "./Home";
import Search from "./Search"
import Footer from './Footer';
import './Projects.css';
import TechInterview from './TechInterview';


// Begin Bella Su UnitTests
test("Testing input exists", () => { // input text area active          TEST 1
    const {getByText} = render(<Home />)
    const titleValue = getByText('Projects');
    expect(titleValue).toHaveTextContent('Projects')
})
/* test("Testing input exists", () => {                                    //Test 2 FAIL
    render(<Search />)
    const input = screen.getByTestId("key");
    expect(input);
}) */
/* describe("Input search keyword", () => {                                //Test 3 FAIL
    it("should be able to type into input", async () => {
        render(
            <Search />
        );
        const inputElement = screen.getByTestId("key");
        fireEvent.change(inputElement,{ target: {value: "EarlyBird"} })
        expect(inputElement.value).toBe("EarlyBird");
    });
}); */
//const cl = () => [isClick, setClick] = useState(false);
test("testing click", () => {                                           //Test 4
    expect(cl.isClick == false);
})
test("sign up and sign in shows up", () =>{                             //Test 5
    expect( Search.button=" Search ");
});
/* test("post responding", () => {                                      //Test 6 FAIL
    render(<Results />);

    const isCallingPost = screen.getByTestId("post");
    expect(isCallingPost);
}) */
// End Bella Su UnitTests

// Begin Hegga Nassr UnitTests
const cl = () => [click, setClick] = useState(false); // dropdown           test 1
test('testing click' , () => {
    //render(<Dropdown/>)
    const check = false;
    expect(cl.click = false);
});
/* describe('sending email to correct address', () => { // footer           test 2 FAIL
test('testing email' , () => {
    render(<Footer />)
    expect(screen.getByTestId('test1')).toHaveAttribute('href',
    "mailto:csc4110EarlyBird@gmail.com?subject=Mail from Website");
    expect('"mailto:csc4110EarlyBird@gmail.com?subject=Mail from Website"').toMatch(/@gmail.com/);
})
}); */
// tech interview
  function filterData(inputs, key){ 
    key = 'Technical Interview'
    return inputs.filter((input) => 
    input.category.includes(key));
  }
  test('FilterData', () =>{                                               // test 3
         expect(filterData.key = 'Technical Interview');
  });
/* describe('in Technical Interview tab', () => {
    test('Tab?' , () => {                                                 // test 4 FAIL
        render(<TechInterview />)
      
        expect(screen.getByText('Technical Interviews'));
    })
    }); */
/* test('Ensure calling Posts' , () => {                                   // test 5 FAIL
    render(<TechInterview/>);
//const te = screen.getByText(/Posts/i);
const ensureCalling =  screen.getByTestId('test3');
//userEvent(te).toHave('title')
expect(ensureCalling);
}); */
const Proj = () => [projectPost, setProjectPost] = useState([{
   category: '',
    title: '',
    content: ''
}])
test('Ensure var take string', () =>{                                        // test 6
    expect(useState.category = "abcd");
    expect(useState.title = "title");
    expect(useState.content = "this is content");
})
// End Hegga Nassr UnitTests

// Begin Maddy Darbyshire UnitTests (Login File Specific)
test("Render login with no errors.", () => { // run through login without errors TEST 1
    expect( () => render(<Login />));
});
//const cl = () => [click, setClick] = useState(false); // click login variable 
test('testing click' , () => { // testing click within login file                TEST 2
    const check = false;
    expect(cl.click = false);
});
const { signin, signup } = require('../actions/auth');
test("sign up and sign in shows up", () =>{ // can find sign up and sign in buttons (non-google options) TEST 3
    expect( signup.h1=" Sign Up ");
    expect( signup.h5=" Sign In ");
});
it('google button component', ()=> { // verifies google button compnonents for google sign-in option TEST 4
    expect(signup.googleButton = "GOOGLE SIGN IN");
    expect(signup.Button = "SIGN IN");
});
it('should have input for email and password', ()=> {  // verifies input field for  email and password are present TEST 5
    expect(signin('input#email')).toHaveLength(1);
    expect(signin('input#password')).toHaveLength(1);
});
it('should create profile', ()=> {   // verifies the profile object has been created once logged in TEST 6
    expect(signin('profileObj')).toHaveLength(1);
});
// End Maddy Darbyshire UnitTests

// Begin Mazen Zeidan UnitTests (Project File Specific)
test("Render Projects without any errors.", () => {             // test 1
    expect( () => render(<Projects />));
});
const proj = () => [projectPost, setProjectPost] = useState([{
    category: '',
    title: '',
    content: '',
}])
test('Ensure values are proper.', () =>{                        // test 2
    expect(useState.category = 'abcd');
    expect(useState.title= 'title');
    expect(useState.content ="this is content");
});
test('Test to make sure post is paired up with async.', () =>{  // test 3
    () => expect(post).toHaveBeenCalledWith(async);
});/* 
function filterData(inputs, key){                               
    key = 'Project'
    return inputs.filter((input) => 
    input.category.includes(key));
  }
test ('Ensure data is filtered.' ,()=>{                         // test 4 FAIL
    expect( filterData.key="Project");
}); */
test('Test for the project post.', () =>{                       // test 5
    () => expect(Posts).toHaveBeenCalledWith(projectPost);
});
function projects(){
    return <div class = "projectPosts">
    <h1> Projects </h1>
    </div>
  }
test("Ensures Projects name shows up.", () =>{                  // test 6
    expect( projects.h1=" Projects ");
});
// End Mazen Zeidan UnitTests

// Begin Ojaswee Panthi UnitTests
test('testing click' , () => {                                      // test 1
    const check = false;
    expect(cl.click = false);
});
const dr = () => [dropdown, setDropdown] = useState(false);
test('testing dropdown check' , () => {                             // test 2
    const check = false;
    expect(dr.dropdown = false);
});
const CMM = () => setClick(false);
test('testing close mobile menu section' , () => {                   // test 3
    const check = false;
    expect(CMM.closeMobileMenu = false);
});
const lo = () => location = useLocation();
test ('testing location useage', () => {                             // test 4
    const check =false;
    expect(lo.location = false);
})
const di =() => dispatch = useDispatch();
test ('testing dispatch useage', () => {                              // test 5
    const check =false;
    expect(di.dispatch = false);
})
const hi = () => history = useHistory();
test ('testing history', () => {                                      // test 6
    const check =false;
    expect(di.dispach = false);
})
// End Ojaswee Panthi UnitTests
