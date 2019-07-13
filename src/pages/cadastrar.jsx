import React from "react"
import "./cadastra.css"
import axios from "../service/api"
class Cadastrar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            login: "",
            senha: "",
            nome: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }



    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    async Cadastra(data) {
        console.log(data)
        try{
            const login = await axios.post("/usuario", data)
            console.log(login)
            
            this.props.history.push('/')
        }catch(error){
            console.log(error)
        } 
     
      
    }

    handleSubmit(event) {
        event.preventDefault();
        const data={
            login: this.state.login,
            senha:this.state.senha,
            nome:this.state.nome
        }

        this.Cadastra(data)
    }


    render() {
        return <div className="row fomulario" >

            <form id="new-login" className="col m6" onSubmit={this.handleSubmit}>
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

                <input type="text"
                    name="nome"
                    value={this.state.nome}
                    onChange={this.handleChange}

                    placeholder="Digite seu nome"
                />

                <button className="btn buttonNew" type="submit" >cadastra</button>

            </form>
        </div>
    }

}

export default Cadastrar