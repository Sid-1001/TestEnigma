import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { AiOutlineSearch } from 'react-icons/ai'; 
import fb from "../assets/img1-PhotoRoom.png"


const Header = () => {
  return (
    <nav>
      <img src={fb} alt="Football" />
      <h1>Enigma</h1>
      <main>
      {/* <input
          type="text"
          placeholder=" Search..."
        //   value={searchKeyword}
        //   onChange={(e) => setSearchKeyword(e.target.value)}
        /> */}
        {/* <button><AiOutlineSearch /> Adding the Search icon</button> */}
        <Link to={"/matches"}>Matches </Link>
        <Link to={"/fixtures"}>Fixtures</Link>
        <HashLink to={"/#contact"}>Contact</HashLink>
      </main>
    </nav>
  );
};

export default Header;