import React from 'react'
import api from"../service/api"
import "./adicionaTarefa.css"

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
            horario:"00:00",
            data:"2019-08-29",
   
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    
    handleChange(event) {
        console.log(event.target.value)
        this.setState({ [event.target.name]: event.target.value });
    }

    async handleSubmit(event) {
        event.preventDefault();

        this.formatDate()
        // event.preventDefault();

        // const formData = {
        //     "usuario": this.state.usuario,
        //     "nome": this.state.nome,
        //     "descricao": this.state.descricao,
        //     "terminoPrevisto": this.state.terminoPrevisto,
        //     "status": this.state.status
        // }
        // const postApi = await api.post(`/tarefas`, formData)

        // console.log(postApi.data)

        // this.props.history.push('/tarefas')


  
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
                    <div>
                        <input type="date" value={this.state.data} onChange={this.handleChange} onSelect={this.handleChange} name="data" />
                        <input type="time" value={this.state.horario} onChange={this.handleChange} onSelect={this.handleChange} name="horario"   />
                    </div>

                    <button className="btn" type="submit">Adicionar</button>


                </form>

            </div>
        );
    }

    formatDate(){
        const data= this.state.data.split('-')
        const hora= this.state.horario.split(':')
        console.log(data)
        console.log(hora)
        const setDate= new Date()


        setDate.setDate(parseInt(data[2]))
        setDate.setMonth(parseInt(data[1])-1 )
        setDate.setFullYear(parseInt(data[0]))
        setDate.setHours(parseInt(hora[0]))
        setDate.setMinutes(parseInt(hora[1]))
        console.log(setDate.toLocaleDateString())

    }
}

export default CadastrTarefas;