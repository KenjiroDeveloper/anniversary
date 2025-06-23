
import {Link, Outlet} from 'react-router-dom';
export const About = () =>{
    return (
        <>
        <nav>
            <ol>
               
                <li><Link to="aboutus">About Us</Link></li>
                <li><Link to="ourmission">Our Mission</Link></li>
            </ol>
        </nav>
        <div>
            <h1>-------------------------</h1>
            <h1>About Page</h1>
            <Outlet />
        </div>
        </>
    );
};
