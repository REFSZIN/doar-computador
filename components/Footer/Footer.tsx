import React from "react";
import { Nav, Conteiner,Creditos, AppMasters} from './Footer.module';
interface server {

}

export default function Footer(props: server){
    return (
        <Conteiner>
                <Nav>
                    <Creditos>©™ Yan - Refszin   
                        <AppMasters href="https://www.appmasters.io/">App Masters</AppMasters>
                    </Creditos>
                </Nav>
        </Conteiner>
    )
}

