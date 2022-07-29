
import React from "react";
import styles from '../styles/Header.module.css';

interface server {
    data: Boolean
}

export default function Header(props: server){
    return (
        <header className={styles.header}>
            <nav>
                <h1>DOAR COMPUTADORES</h1>
                <span>API {props.data ? "On" : "Off"}</span>
            </nav>
        </header>
    )
}

