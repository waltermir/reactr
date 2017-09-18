import styles from './app.css'
import React, {Component} from 'react'
import Header from '../Header'
import Main from '../Main'
import 'normalize-css'


export default class App extends Component{

    constructor(){
        super()
        this.state = {
            user: {
                photoURL : "http://1.bp.blogspot.com/-cdGTYu7VgC8/UZDnDgewA7I/AAAAAAAAALQ/aXNvweHrxn8/s1600/pocoyize_00230004000100030003000100010013000200010001000700050004.png",
                email : "walterm@swissmedical.com.ar",
                onOpenText : false
            }
        }
    }
    render(){
        return (
           <div>
               <Header />
               <Main />
           </div>
        )
    }

}