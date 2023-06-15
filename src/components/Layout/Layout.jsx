import React from "react";
import { Link } from "react-router-dom";
import design from "./Layout.module.css";

const Layout = ({ children }) => {
  const url = document.location.pathname;
  return (
    <div>
      <header className={design.navbar}>
        <div>
          <Link to="/">
            <h3>logo</h3>
          </Link>
        </div>
        <nav className={design.nav}>
          <ul>
            <li>
              <Link
                to="/home"
                className={url === "/home" ? design.navActive : design.navNot}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={url === "/blog" ? design.navActive : design.navNot}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={url === "/about" ? design.navActive : design.navNot}
              >
                About
              </Link>
              
            </li>
            <li>
            <Link
                to="/tasks"
                className={url === "/tasks" ? design.navActive : design.navNot}
              >
                Tasks
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={design.container}>{children}</main>
      <footer className={design.footer}>
        <p>@this is a footer section...</p>
      </footer>
    </div>
  );
};

export default Layout;
