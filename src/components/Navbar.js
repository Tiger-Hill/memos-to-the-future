import { Link } from "react-router-dom";
import logo from "../images/mttf-logo.png"

const Navbar = () => {
  return (
    <nav>

      <div className="navbar--main-content">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>

        <h1>
          <span className="author-name">CHRISTIAN PETERSEN-CLAUSEN</span>
          &nbsp;is a director based in Shanghai who creates documentary films and
          commercials.
        </h1>
      </div>
      <p className="phone-number">(+86) 186 1613 9292</p>
    </nav>
  );
}

export default Navbar;
