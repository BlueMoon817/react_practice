import React, {Component} from "react";
import './App.css';
import BoxClass from "./components/BoxClass2.js"
import Rock from "./images/rock.svg"
import Scissors from "./images/scissors.svg"
import Papers from "./images/papers.svg"
import { FlagIcon } from "react-flag-kit";

const choice = {
  rock: {
    name: "Rock",
    img: Rock
  },
  papers: {
    name: "Papers",
    img: Papers,
  },
  scissors: {
    name: "Scissors",
    img: Scissors
  }
};
let count=0;

export default class AppClass extends Component {

  constructor() {
    super();
    this.state={
      reactCount: 0,
      userSelect:null,
      computerSelect:null,
      result: "",
    }
  }
  play = (userChoice) => {
    let computerChoice= this.randomChoice();
    this.setState(
      { 
        reactCount :this.state.reactCount +1,
        userSelect: choice[userChoice],
        computerSelect: computerChoice,
        result: this.judgement(choice[userChoice], computerChoice), 
      });
      console.log("reactCount :" + this.state.reactCount, "count:" + this.count);
  };
  randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체에 키값만 뽑아서 어레이로 만들어주는 함수
    let randomItem = parseInt((Math.random()) * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }
  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "Tie"
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "Lose" : "Win"
    else if (user.name === "Scissors")
      return computer.name === "Papers" ? "Lose" : "Win"
    else if (user.name === "Papers")
      return computer.name === "Rock" ? "Lose" : "Win"
  }
  render(){
    return(
      <div className="wrap">
        <FlagIcon code="AX" size={24} />;
        <h1>"가위바위보"</h1>
        <div className='test_box'>
          <span className='test_desc'>{this.count+1}</span>
          <span className='test_desc'>{this.state.reactCount}</span>
        </div>
        <div className='game_board'>
          <BoxClass user="You" item={this.state.userSelect} result={this.state.result} />
          <BoxClass user="Computer" item={this.state.computerSelect} result={this.state.result} />
        </div>
        <div className='button_group'>
          <button className="btn_play btn_scissors" onClick={() => this.play("scissors")}></button>
          <button className="btn_play btn_rock" onClick={() => this.play("rock")}></button>
          <button className="btn_play btn_papers" onClick={() => this.play("papers")}></button>
        </div>
      </div>
    )
  }
}