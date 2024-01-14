import React, { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";

function Header() {
  const location = useLocation();
  useEffect(() => {
    const header = document.querySelector(".mainHeader");
    const scrollToTopHandler = () => {
      header.style.backgroundColor = "white";
    };
    const scrollToTransparentHandler = () => {
      header.style.backgroundColor = "transparent";
    };

    header.addEventListener("scrollToTop", scrollToTopHandler);
    header.addEventListener("scrollToTransparent", scrollToTransparentHandler);

    return () => {
      header.removeEventListener("scrollToTop", scrollToTopHandler);
      header.removeEventListener(
        "scrollToTransparent",
        scrollToTransparentHandler
      );
    };
  }, []);

  const loginPath = location.pathname === "/login";
  const registerPath = location.pathname === "/register";

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      <header className={`mainHeader ${isAuthPage ? "authHeader" : ""}`}>
        <NavLink to="/">
          <img
            src="https://apexnetwork.co/_nuxt/logo.c3221d32.png"
            alt="logo"
            className="logo"
          />
        </NavLink>
        <nav className="mainNavigation">
          <ul className="authNav">
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/rates">Rates</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
          </ul>
        </nav>
        <button type="button" className="btn bouton-header">
          {loginPath ? (
            <NavLink to="/register">Open an Account</NavLink>
          ) : (
            <NavLink to="/register">Login</NavLink>
          )}
        </button>
        <button type="button" className="btn1 bouton1">
          {registerPath ? (
            <NavLink to="/login">Login</NavLink>
          ) : (
            <NavLink to="/register">Open an Account</NavLink>
          )}
        </button>
      </header>
      <div className="container my-3">
        <Outlet />
        {!isAuthPage && <Footer />}
      </div>
    </>
  );
}

export default Header;
