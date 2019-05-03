import React from "react";
import "./NavHeader.css";
import { Link, NavLink } from "react-router-dom";

const navHeader = () => {
  return (
    <div className="NavHeader">
      <header>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/posts"
                exact
                activeClassName="active"
                activeStyle={{ color: "#fa923f", textDecoration: "underline" }}
              >
                Posts
              </NavLink>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/new-post"
                }}
              >
                New Post
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default navHeader;
