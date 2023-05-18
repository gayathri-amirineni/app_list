import { Link } from 'react-router-dom';

const NavBar = () => {
 return (
 <nav>
       <ul>
          <li>
             <Link to="/">Form</Link>
          </li>
          <li>
             <Link to="/card">Cards</Link>
          </li>
       </ul>
 </nav>
 );
};

export default NavBar;