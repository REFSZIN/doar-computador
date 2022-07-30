
import React from "react";
import { H1 ,Logo , Aa , Conteiner} from './Header.module';
interface server {
    data: Boolean
}

export default function Header(props: server){
    return (
        <Conteiner>
                <Aa >
                    <Logo alt="Logo"/>
                    <H1>CINEFLEX</H1>
                    <span>API {props.data ? "On" : "Off"}</span>
                </Aa>
        </Conteiner>
    )
}

