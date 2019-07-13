import React, { Component } from 'react'
import api from '../service/api'
import "./Login.css"
import {Link} from "react-router-dom"

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            login: "",
            senha: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.postLogin = this.postLogin.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }


    handleSubmit(event) {
        event.preventDefault();
        this.postLogin()
    }

    async postLogin() {
        const dataSubimt = {
            login: this.state.login,
            senha: this.state.senha
        }

        try {
            const resultApi = await api.post("/login", dataSubimt);
            window.localStorage.setItem("user", JSON.stringify(resultApi.data.data))
            this.props.history.push('/tarefas')

        } catch (eror) {
            alert("usuario ou senha invalido")
        }
    }



    render() {
        return (
            <div className="row fomulario" >

                <form id="new-login" className="col m6" onSubmit={this.handleSubmit()}>
                    <input type="text"
                        name="login"
                        value={this.state.login}
                        onChange={this.handleChange}
                        placeholder="Digite seu Login"

                    />
                    <input type="password"
                        name="senha"
                        value={this.state.senha}
                        onChange={this.handleChange}

                        placeholder="Digite sua senha"
                    />

                    <button className="btn buttonNew" type="submit" >Acessar</button>
                    <Link to="/cadastrar"><button className="btn buttonNew" type="submit" >Cadastrar</button></Link>

                </form>
            </div>
        )
    }
}

export default Login;