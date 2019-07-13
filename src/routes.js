import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Login from './pages/Login'
import Tarefas from './pages/Tarefas'
import  Cadastra from"./pages/cadastrar"
import NovaTarefa from"./pages/adicionaTarefas"
import EditarTarefa from './pages/editarTarefa'


function Routes(){
    return(
        <Switch> 
            <Route path="/" exact component={Login} />
            <Route path="/tarefas" component={Tarefas} />
            <Route path="/cadastrar" component={Cadastra} />
            <Route path="/novaTarefa" component={NovaTarefa} />
            <Route path="/editarTarefa/:id" component={EditarTarefa} />

        </Switch>
    )

}

export default Routes;