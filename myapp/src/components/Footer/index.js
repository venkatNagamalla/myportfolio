import { Link } from "react-scroll";
import "./index.css";

const Footer = () => (
  <footer>
    <Link offset={-100} smooth={true} spy={true} to="hero">
      <button type="button">Go to top</button>
    </Link>
    <p className="copyright">
      Copyright <i class="fa-regular fa-copyright"></i>2024; Designed by VENKAT
    </p>
  </footer>
);

export default Footer;
