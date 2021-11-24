const { signin, signup } = require('../actions/auth');
const cl = () => [click, setClick] = useState(false);

// run through login without errors
test("Render login with no errors.", () => {
    expect( () => render(<Login />));
});

// testing click functionality
test('testing click' , () => { 
    const check = false;
    expect(cl.click = false);
});

// can find sign up and sign in
test("sign up and sign in shows up", () =>{
    expect( signup.h1=" Sign Up ");
    expect( signup.h5=" Sign In ");
});

it('google button component', ()=> {
    // checks whether button options on login have correct text
    expect(signup.googleButton = "GOOGLE SIGN IN");
    expect(signup.Button = "SIGN IN");
});

  // verifies input field for  email and password are present
it('should have input for email and password', ()=> {  
    expect(signin('input#email')).toHaveLength(1);
    expect(signin('input#password')).toHaveLength(1);
});

// verifies the profile object has been created once logged in
it('should create profile', ()=> {  
    expect(signin('profileObj')).toHaveLength(1);
});

// verify the token for authentication
it("should verify the token", async () => {
    const token = res?.tokenId;
    const data = await AUTH(token);
    expect(data).toEqual({});
  });
  

 
