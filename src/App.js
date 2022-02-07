import React,  { Component } from 'react';
import {CardsList} from "./components/cards-list/cards-list.component";
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
      player: [],
      searchField: ""
    };
  }

  handleChange = e =>{
    this.setState({searchField: e.target.value})
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(newValue => this.setState({player : newValue}));
  }

  render(){
    const { player, searchField } = this.state;
    const filteredPlayers = player.filter(player => player.name.toLowerCase().includes(searchField.toLocaleLowerCase()))

    return(
      <div className="App">
      <h1>Players DB</h1>
        <SearchBox placeholder = "search players" searchHandle={this.handleChange}/>
        <CardsList player={filteredPlayers}/>
      </div>
    )
  }
}

export default App;
