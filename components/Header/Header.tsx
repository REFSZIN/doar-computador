
import React from "react";
import { H1 , Nav , Conteiner} from './Header.module'; 

interface server {
    data: Boolean
}

export default function Header(props: server){
    return (
        <Conteiner>
                <Nav>
                    <H1>DOAR<br/>COMPUTADOR API {props.data ? "On" : "Off"}</H1>
                </Nav>
        </Conteiner>
    )
}

