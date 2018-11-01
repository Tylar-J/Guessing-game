import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';
import HighScore from './HighScore';
import './_main-view.css';

export default class MainView extends Component {
  constructor() {
    super()
    this.state = { 
      mode: null,
      number: null,
      guess: null,
      message: null,
      tries: 0,
      highScoreStandard: null,
      highScoreExpert: null,
    }
  }
  onClickStandard = () => {
    const number = Math.floor(Math.random() * 10) + 1
    console.log(number)
    this.setState({mode:'Standard', number})
  }
  onClickExpert = () => {
    const number = Math.floor(Math.random() * 100) + 1
    console.log(number)
    this.setState({mode:'Expert', number})
  }
  onChangeValue = (e) => {
    //the + converts string value into number type (coercion)
    const guess = +e.target.value
    console.log(guess)
    this.setState({guess})
  }
  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.guess, this.state.number)

    const tries = this.state.tries + 1
    let highScoreStandard, highScoreExpert, newHighScore

    if (this.state.guess === this.state.number){

      if (this.state.mode === 'Standard') {
        // if this.state.highSScoreStandard does not exist yet OR if this.state.highScoreStandard exists and the tries are 
        // less than the current value, then set it equal to number of tries
        if (!this.state.highScoreStandard || tries < this.state.highScoreStandard) {
          highScoreStandard = tries
          newHighScore = true
        } 
      }

      if (this.state.mode === 'Expert') {
        // if this.state.highSScoreExpert does not exist yet OR if this.state.highScoreExpert exists and the tries are 
        // less than the current value, then set it equal to number of tries
        if (!this.state.highScoreExpert || tries < this.state.highScoreExpert) {
          highScoreExpert = tries
          newHighScore = true
        } 
      }

      this.setState({
        message:`Congratulations you won in ${tries} guesses${newHighScore ? ' and you have a new high score' : ''}!`, 
        tries: 0, 
        highScoreStandard, 
        highScoreExpert
      })
    } else if (this.state.guess > this.state.number){
      this.setState({message:'Guess was to High', tries})
    } else {
      this.setState({message:'Guess was to Low', tries})
    }
  }
  render() {
    return (
      <div className="App">
      <header>
        <h1>Start Game</h1>
      </header>
      <HighScore mode="Standard" score={this.state.highScoreStandard}/>
      <HighScore mode="Expert" score={this.state.highScoreExpert}/>
      <Button label="Standard" onClick={this.onClickStandard}/>
      <br/>
      <Button label="Expert" onClick={this.onClickExpert}/>
      <br/>
      <Input mode={this.state.mode} onChange={this.onChangeValue} onSubmit={this.onSubmit}/>
      <p>{this.state.message}</p>
      <p>Try: {this.state.tries}</p>
      </div>
    );
  }
}


