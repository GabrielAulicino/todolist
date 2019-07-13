import React from 'react'
import api from "../service/api"


class EditarTarefa extends React.Component {

    constructor(props) {
        super(props)


        const user = JSON.parse(window.localStorage.getItem("user")).usuario

        this.state = {
            usuario: user._id ? user._id : "",
            status: false,
            nome: "",
            descricao: "",
            id: this.props.match.params.id,
            inicio: new Date(),
            terminoPrevisto: new Date(),

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getTarefa()
    }


    async getTarefa() {
        console.log(this.state.id)
        const getData = await api.get(`/tarefa/${this.state.id}`)
        const tarefa =getData.data;
        console.log(tarefa)
        this.setState({inicio:tarefa.inicio,descricao:tarefa.descricao, nome:tarefa.nome, status:tarefa.status,terminoPrevisto:tarefa.terminoPrevisto})

    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    async handleSubmit(event) {

        event.preventDefault();

        const formData = {

            usuario: this.state.usuario,
            status: this.state.status,
            nome: this.state.nome,
            descricao: this.state.descricao,
            inicio: this.state.inicio,
            terminoPrevisto: this.state.terminoPrevisto,

        }


        const putApi = await api.put(`/tarefas/${this.state.id}`, formData)

        console.log(putApi.data)

        this.props.history.push('/tarefas')


   
    }

    render() {
        return (
            <div>

                <form id="new-Tarefas" onSubmit={this.handleSubmit}>

                    <input type="text"
                        name="nome"
                        value={this.state.nome}
                        onChange={this.handleChange}
                        placeholder="Digite o novo nome da Tarefa"
                    />
                    <input type="text"
                        name="descricao"
                        value={this.state.descricao}
                        onChange={this.handleChange}
                        placeholder="Digite a nova Descricao da Tarefa"
                    />

                    <button className="btn" type="submit">Editar</button>


                </form>

            </div>
        );
    }
}

export default EditarTarefa;