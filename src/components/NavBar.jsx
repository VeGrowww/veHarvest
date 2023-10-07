import React from "react";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <a className={styles.navElements} href="#">
        Home
      </a>
      <a className={styles.navElements} href="#">
        About
      </a>
      <a className={styles.navElements} href="#">
        Services
      </a>
      <a className={styles.navElements} href="#">
        Contact
      </a>
    </div>
  );
}
