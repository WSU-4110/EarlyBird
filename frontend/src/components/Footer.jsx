import React from "react";
import './Footer.css';

const Footer = () => (


        <div className="footer">
        
        <table class="center">
        <tr>
           <th>Contact Us</th>
           <th>Top Projects</th>
        </tr>

        <tr>
        <td data-testid="test1">  
              We are Online!<br></br>
              Phone: nice try<br></br>
              <a  href="mailto:csc4110EarlyBird@gmail.com?subject=Mail fron Website">Email</a>
        </td> 

        <td>
        <a href="#!">Project 1</a><br></br>
        <a href="#!">Project 2</a><br></br>
        <a href="#!">Project 3</a><br></br>
        </td>

        </tr>
     </table>

  <div class="footer-copyright text-center py--3" color="white">© 2021 Copyright
  </div>
</div>
);

export default Footer;
