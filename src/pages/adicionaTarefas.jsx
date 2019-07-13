import React from 'react'
import api from"../service/api"


class CadastrTarefas extends React.Component {

    constructor(props) {
        super(props)

        const user = JSON.parse(window.localStorage.getItem("user")).usuario

        this.state = {
            tarefas: [],
            usuario: user._id ? user._id : "",
            status: false,
            nome: "",
            descricao: "",
            inicio: new Date(),
            terminoPrevisto: new Date(),
   
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

        this.props.history.push('/tarefas')


  
        // const addTarefas= this.state.tarefas;
        // addTarefas.push(postApi.data)
        // console.log(addTarefas)
        // this.setState({tarefas:addTarefas})
    }

    render() {
        return (
            <div>
            
                <form id="new-Tarefas" onSubmit={this.handleSubmit}>

                    <input type="text"
                        name="nome"
                        value={this.state.nome}
                        onChange={this.handleChange}
                        placeholder="Digite o nome da Tarefa"
                    />
                    <input type="text"
                        name="descricao"
                        value={this.state.descricao}
                        onChange={this.handleChange}
                        placeholder="Digite a descricao da Tarefa"
                    />

                    <button className="btn" type="submit">Adicionar</button>


                </form>

            </div>
        );
    }
}

export default CadastrTarefas;