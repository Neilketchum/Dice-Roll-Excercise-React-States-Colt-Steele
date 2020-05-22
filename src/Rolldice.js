import React, { Component } from 'react'
import Dice from './Dice'
import './Dice.css'
class RollDice extends Component{
    static defaultProps = {
        slides:['one','two','three','four','five','six']
    }
    constructor(props){
        super(props)
        this.state = {
            die1:'one',
            die2:'two',
            isRolling:false
        }
        this.roll = this.roll.bind(this)
    }
    roll(){
        // Pick 2 new Roll
        // Set State with new Rolls
        let index1= Math.floor(Math.random() * this.props.slides.length)
        let index2= Math.floor(Math.random() * this.props.slides.length)
        this.setState({
                die1:this.props.slides[index1],
                die2:this.props.slides[index2],
                isRolling:true
            }
        )
            //Wait One Second and the set rolling to True 
        setTimeout(() => {
            this.setState({
                isRolling:false
            })
        }, 1000);    
    }
    render(){
        return(
            <div className = 'container'>
               <div className="row container">
                    <div className="col-md-6 p-5  ml-10">
                            <Dice face ={this.state.die1} isShaking = {this.state.isRolling}/>               
                    </div>
                    <div className="col-md-6 p-5 justify-content-center">
                            <Dice face ={this.state.die2} isShaking = {this.state.isRolling}/>               
                    </div>
                </div>
                <button disabled = {this.state.isRolling} className = 'my_btn btn btn-secondary  btn-lg' onClick={this.roll}>{this.state.isRolling?"Rolling!":"Roll Dice"}</button>
            </div>
        )
    }
}
export default RollDice;