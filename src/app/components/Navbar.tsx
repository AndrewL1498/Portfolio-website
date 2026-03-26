"use client";

import react from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
 const router = useRouter();

    return (
        <nav className={styles.navbar}>
<ul className={styles.navList}>
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#skills">Skills</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#contacts">Contact</a></li>
</ul>
        </nav>
    );
}