import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { TbBrandAbstract } from "react-icons/tb";

import "./Header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  return (
    <header>
      <div className="head-left">
        <div className="brand">
          <TbBrandAbstract className="logo" />
          <p>Abstract</p>
        </div>
        <a href="#">Help Center</a>
      </div>
      <div className="head-right">
        <a href="#" className="search" onClick={() => setShowSearch(true)}>
          <FaSearch />
        </a>
        <a
          href="#"
          className="menu"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          {showMenu ? <IoClose /> : <IoMenu />}
        </a>
        <input type="text" placeholder="Search" />
        <button id="request">Submit a request</button>
        <button id="sign-in">Sign In</button>

        {showMenu && (
          <ul className="min-menu">
            <li>
              <a href="#">Submit a request</a>
            </li>
            <hr />
            <li>
              <a href="#">Sign In</a>
            </li>
          </ul>
        )}
      </div>
      {showSearch && (
        <div className="search-div">
          <input type="text" placeholder="Search" />
          <button onClick={() => setShowSearch(false)}>
            <IoClose />
          </button>
        </div>
      )}
    </header>
  );
};
export default Header;
