
import React from "react";
import styles from '../styles/Header.module.css';
import { H1 ,Logo , Aa } from './Header.module';
interface server {
    data: Boolean
}

export default function Header(props: server){
    return (
        <header className={styles.header}>
                <Aa >
                    <Logo className={styles.H1} alt="Logo"/>
                    <H1>CINEFLEX</H1>
                    <span>API {props.data ? "On" : "Off"}</span>
                </Aa>
        </header>
    )
}

