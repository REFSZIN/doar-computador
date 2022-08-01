
import React, { useState, useEffect } from "react";
import { H2, Formulario, Conteiner,FormComputadores,FormUser} from './Main.module'; 

interface server {
    
}

export default function Main(props: server){
    const [respondido, setRespospondido] = useState(false);
    useEffect(() => {

		}, []);
    return (
        <Conteiner>
            { !respondido ?
                <FormUser>
                <H2>Formulario do Usuario</H2>
                <span>{respondido}</span>
                <Formulario action="">
                    <div>                    
                        <label>Nome: </label>
                        <input type="name" name="" id="" />
                    </div>
                    <div>
                        <label>E-mail: </label>
                        <input type="email" name="" id="" />
                        </div>
                    <div>
                        <label>Telefone: </label>
                        <input type="fone" name="" id="" />
                        </div>
                    <div>
                        <label>CEP: </label>
                        <input type="cep" name="" id="" />
                        </div>
                    <div>
                        <label>Cidade: </label>
                        <input type="city" name="" id="" />
                        </div>
                    <div>
                        <label>Rua: </label>
                        <input type="street" name="" id="" />
                        </div>
                    <div>
                        <label>Numero: </label>
                        <input type="number" name="" id="" />
                    </div>
                    <div>
                        <label>Quantos equipamentos serão doados: </label>
                        <input type="number" name="" id="" />
                    </div>
                    <button type="submit" onClick={ () => setRespospondido(true)}>Enviar</button>
                </Formulario>
                </FormUser>:
                <FormComputadores>
                    <H2>Formulario de Detalhes</H2>
                    <Formulario action="">
                        <div>                    
                            <label >Notebook: </label>
                            <input type="checkbox" id="notebook" name="notebook" />
                            <select id="notebook" name="carlist" form="carform">
                                <option value="working">Tem todas as partes, liga e funciona normalmente</option>
                                <option value="notWorking">Tem todas as partes, mas não liga mais</option>
                                <option value="broken">Faltam peças, funciona só as vezes ou está quebrado</option>
                            </select>
                        </div>
                        <div>
                            <label >Desktop: </label>
                            <input type="checkbox" id="Desktop" name="Desktop" />
                            <select id="notebook" name="carlist" form="carform">
                                <option value="working">Tem todas as partes, liga e funciona normalmente</option>
                                <option value="notWorking">Tem todas as partes, mas não liga mais</option>
                                <option value="broken">Faltam peças, funciona só as vezes ou está quebrado</option>
                            </select>
                        </div>
                        <div>
                            <label>Netbook</label>
                            <input type="checkbox" id="Netbook" name="Netbook" />
                            <select id="Netbook" name="Netbook" form="Netbook">
                                <option value="working">Tem todas as partes, liga e funciona normalmente</option>
                                <option value="notWorking">Tem todas as partes, mas não liga mais</option>
                                <option value="broken">Faltam peças, funciona só as vezes ou está quebrado</option>
                            </select>
                        </div>
                        <div>
                            <label >Monitor</label>
                            <input type="checkbox" id="Netbook" name="Netbook" />
                            <select id="Monitor" name="Monitor" form="Monitor">
                                <option value="working">Tem todas as partes, liga e funciona normalmente</option>
                                <option value="notWorking">Tem todas as partes, mas não liga mais</option>
                                <option value="broken">Faltam peças, funciona só as vezes ou está quebrado</option>
                            </select>
                        </div>
                        <div>
                            <label >Impressora</label>
                            <input type="checkbox" id="Netbook" name="Netbook" />
                            <select id="Impressora" name="Impressora" form="Impressora">
                                <option value="working">Tem todas as partes, liga e funciona normalmente</option>
                                <option value="notWorking">Tem todas as partes, mas não liga mais</option>
                                <option value="broken">Faltam peças, funciona só as vezes ou está quebrado</option>
                            </select>
                        </div>
                        <div>
                            <label>Scanner</label>
                            <input type="checkbox" id="Netbook" name="Netbook" />
                            <select id="Scanner" name="Scanner" form="Scanner">
                                <option value="working">Tem todas as partes, liga e funciona normalmente</option>
                                <option value="notWorking">Tem todas as partes, mas não liga mais</option>
                                <option value="broken">Faltam peças, funciona só as vezes ou está quebrado</option>
                            </select>
                        </div>
                        <button type="submit" onClick={ () => setRespospondido(false)}>Enviar</button>
                    </Formulario>
                </FormComputadores>}
        </Conteiner>
    )
}

