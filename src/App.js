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

  // TODO
  // #1 write state model & initiatilize state for form
  // #2 write the structure of the form
  // #3 write handle change handler
  // #4 write handleSubmit function & pass on handle submit to Form
  // #5 write submit button that calls handleSubmit


  handleSubmit = (character) => {
    //take state from form and add to app state
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