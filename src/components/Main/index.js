import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import MessageList from '../MessageList'

class Main extends Component{
    constructor(){
        super()
        this.state = {
            messages: [{text: 'Mensaje del Tweet',
                        picture : "http://1.bp.blogspot.com/-cdGTYu7VgC8/UZDnDgewA7I/AAAAAAAAALQ/aXNvweHrxn8/s1600/pocoyize_00230004000100030003000100010013000200010001000700050004.png",
                        displayName : "Walter Mir",
                        userName : "WalterM",
                        date : Date.now()
                    },
                {text: 'Mensaje del Tweet',
                        picture : "https://cdn.dribbble.com/users/588874/screenshots/2291915/dribbble.png",
                        displayName : "Pepe",
                        userName : "PepeP",
                        date : Date.now()
                    }]
        }
    }

    render(){
        return  (
            <div>
                <ProfileBar
                    picture={this.props.user.photoURL}
                    username={this.props.user.email.split('@')[0]}
                    onOpenText={this.handleOpenText.}
                />
                <MessageList messages = {this.state.messages}/>
            </div>
        )
    }
}

export default Main