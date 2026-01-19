import Wrapper from '../assets/wrappers/Navbar';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">MixMaster</span>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="newsletter" className="nav-link">
            Newsletter
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
