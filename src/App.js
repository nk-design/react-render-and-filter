import { useState, useEffect } from "react";
import SearchBox from "./component/search-box/search-box.component";
import CardList from "./component/cards-list/cards-list.component";
import './App.css';


const App = () => {
  const [searchInputValue, setInputValue] = useState("");
  const [monsters, setFilteredMonsters] = useState([]);
  const [newMonster, setNewMonsters] = useState(monsters);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=> response.json())
    .then((users) => setFilteredMonsters(users))
  },[])

  useEffect(()=>{
    const filteredMonsters = monsters.filter((el) =>{
      return el.name.toLowerCase().includes(searchInputValue.toLowerCase())
    });
    setNewMonsters(filteredMonsters)
  },[monsters, searchInputValue])


  const searchInput = (event) =>{
    const searchInputString = event.target.value.toLowerCase();
    setInputValue(searchInputString)
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters rolodex</h1>
      <SearchBox searchInput={searchInput}/>
      <CardList monsters={newMonster} />
    </div>
  );
}

export default App;
