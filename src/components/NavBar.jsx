import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink className={styles.navItem} to="/">
            Homepage
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navItem} to="/about">
            About
          </NavLink>
        </li>
        {/* <li>
          <img>account image</img>
          <h1>account address</h1>
        </li> */}
      </ul>
    </nav>
  );
}
