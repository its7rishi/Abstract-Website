import "./Hero.css";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="hero">
      <h1>How can we help?</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};
export default Hero;
