import React, { Component } from 'react'
import api from '../service/api'
import Header from "../components/Header"
import { Link } from "react-router-dom"
class Tarefas extends Component {

    async componentDidMount() {
        const user = JSON.parse(window.localStorage.getItem("user")).usuario
        const get = await api.get(`/tarefas/${user._id}`)

        this.setState({ tarefas: get.data })

        console.log(this.state.tarefas)
    }
    constructor(props) {

        super(props);

        const user = JSON.parse(window.localStorage.getItem("user")).usuario

        this.state = {
            tarefas: [],
            usuario: user._id ? user._id : "",
            status: false,
            nome: "",
            descricao: "",
            inicio: new Date(),
            terminoPrevisto: new Date(),
            userName: user.nome
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    async handleSubmit(event) {

        event.preventDefault();

        const formData = {
            "usuario": this.state.usuario,
            "nome": this.state.nome,
            "descricao": this.state.descricao,
            "terminoPrevisto": this.state.terminoPrevisto,
            "status": this.state.status
        }
        const postApi = await api.post(`/tarefas`, formData)

        console.log(postApi.data)
        const user = JSON.parse(window.localStorage.getItem("user")).usuario

        const get = await api.get(`/tarefas/${user._id}`)

        this.setState({ tarefas: get.data })
        // const addTarefas= this.state.tarefas;
        // addTarefas.push(postApi.data)
        // console.log(addTarefas)
        // this.setState({tarefas:addTarefas})
    }


    async deletarTarefa(id,index){
        await api.delete(`/tarefas/${id}`)

        const tarefas= this.state.tarefas;

        this.state.tarefas.splice(index,1)

        this.setState({tarefas:tarefas})
    }

    render() {

        return (
            <div>

                <Header name={this.state.userName} />
                {this.state.tarefas.map((data, index) => {
                    return <div key={data._id} className="row">
                        <div className="col m12 ">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">{data.nome}</span>
                                    <p>{data.descricao}</p>
                                </div>
                                <div className="card-action">
                                    <Link to={`/editarTarefa/${data._id}`}><button className="btn" >Editar</button></Link>
                                    <button className="btn red" onClick={()=>this.deletarTarefa(data._id,index)} >Deletar</button>

                                </div>
                            </div>
                        </div>
                    </div>
                })}


            </div>


        )
    }


}

export default Tarefas;