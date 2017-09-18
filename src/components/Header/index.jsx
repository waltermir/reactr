import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Styles from './header.css'

class Header extends Component {
    render(){
        return  (
            <header className = {Styles.root} >
                <h1 className = {Styles.logo} > Reacttr </h1>
            </header>
        )
    }

}

export default Header
