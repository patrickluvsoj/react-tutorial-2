import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';
import Login from './Login';

class App extends Component {    
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      }
    ]
  }

  removeCharacter = index => {
    const {characters} = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return index !== i
      })
    })
  }


  handleSubmit = (character) => {
    //take state form and add to app state
    const {characters} = this.state

    this.setState(
      {
        characters: [...characters, character]
      }
    )
  }

  render() {
    const {characters} = this.state

    return (
        <div className="container">
            <Table characterData = {characters} removeCharacter = {this.removeCharacter}/>
            <Form handleSubmit={this.handleSubmit}/>
            <Login />
        </div>
    )
  }
}

export default App;