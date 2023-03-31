import { Link } from "react-router-dom"

import imdbLogo from "../images/imdb.svg"
import instagramLogo from "../images/instagram.svg"
import unitedCrewLogo from "../images/crew-united.svg"

const Footer = () => {
  return (
    <footer>
      <div className="contact-container">
        <div>
          <p><span>Based in</span> Shangai, China</p>
          <p><span>Languages</span> English, German, Mandarin</p>
        </div>

        <div>
          <p><span>Email</span> Chinachris@memostothefuture.com</p>
          <p><span>Phone</span> (+86) 186 1613 9292</p>
        </div>
      </div>

      <div className="social-media-container">
        <Link to={"https://www.imdb.com/name/nm9484765/"} target="_blank">
          <img src={imdbLogo} alt="IMDB logo" />
        </Link>

        <Link to={"https://www.crew-united.com/en/Christian-Petersen-Clausen_586704.html"} target="_blank">
          <img src={unitedCrewLogo} alt="Crew united logo" />
        </Link>

        <Link to={"https://www.instagram.com/ihavepandablood/"} target="_blank">
          <img src={instagramLogo} alt="Instagram logo" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
