import React from "react";
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">YOURBOOKSTORE</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/backecover" className="text-white hover:text-gray-300">
              BackCover
            </Link>
          </li>
          <li>
            <Link to="/Frontcover" className="text-white hover:text-gray-300">
              FrontCover
            </Link>
          </li>
          <li>
            <Link to="/page" className="text-white hover:text-gray-300">
              Page
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
