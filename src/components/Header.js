import React from 'react'
import {Link} from'react-router-dom'

class HeaderComponent extends React.Component{

    // constructor(props) {
    //     super(props)
    
    // }
    

    render(){
        return (
            <nav>
                <div className="nav-wrapper">
                    <section className="brand-logo right">{this.props.name}</section>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li> <Link to="novaTarefa"> <p
                         href={undefined}>Cadastra</p> </Link> </li> 
                        {/* <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li> */}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default HeaderComponent;