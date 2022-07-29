
import React from "react";
import styles from '../styles/Header.module.css';
interface Propis{
};

export default function Header(props: any){
  return (
    <header className={styles.header}>
        <nav>
            <h1>DOAR COMPUTADORES</h1>
            <span></span>
        </nav>
    </header>
    )
};

