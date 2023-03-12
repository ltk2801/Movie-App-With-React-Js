import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import SearchIcon from "./SerchIcon.js";

const Navbar = (props) => {
  const navigate = useNavigate();
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      if (currentScrollPosition >= 100) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const homeHandleClick = () => {
    navigate("/");
  };
  const searchHandlerClick = () => {
    navigate("/search");
  };

  const navbarClasses = isTransparent
    ? `${styles.navbar} + ${styles.transparent} `
    : `${styles.navbar} + ${styles["not-transparent"]} `;

  return (
    <div className={navbarClasses}>
      <h3 className={styles["navbar-brand"]} onClick={homeHandleClick}>
        Movies App
      </h3>
      <SearchIcon
        className={styles["navbar-icon"]}
        onClick={searchHandlerClick}
      />
    </div>
  );
};

export default Navbar;
