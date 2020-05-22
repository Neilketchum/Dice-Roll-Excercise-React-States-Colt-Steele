import React, { Component } from 'react'
import './Dice.css'
class Dice extends Component{
    render(){
        let cls = `fas fa-dice-${this.props.face} ${this.props.isShaking?'shaking':''} fa-7x`
        console.log(cls)
        return(
            
            <div>
                <i className={cls}></i>  
            </div>
           
        )
    }
}
export default Dice;