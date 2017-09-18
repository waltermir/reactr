import React, {Component} from 'react'
import Styles from './message.css'
import moment from 'moment'

class Message extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let dateformat = moment(this.props.date).fromNow()
        return (
            <div className={Styles.root}>
                <div className={Styles.user}>
                    <figure>
                        <img className={Styles.avatar} src={this.props.picture}/>
                    </figure>
                    <spam className={Styles.displayName} >{this.props.displayName}</spam>
                    <spam className={Styles.userName} >{this.props.userName}</spam>
                    <spam className={Styles.date} >{dateformat}</spam>
                </div>
                <h3>{this.props.text}</h3>
                <div className={Styles.buttons}>
                    <div className={Styles.icon}> 
                        <span className='fa fa-reply'></span>
                    </div>
                    <div className={Styles.icon}> 
                        <span className='fa fa-retweet'></span>
                    </div>
                    <div className={Styles.icon}> 
                        <span className='fa fa-star'></span>
                    </div>
                    <span></span>
                </div>


            </div>
        )

    }
}

export default Message