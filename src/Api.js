import React, {Component} from 'react'

const ListItems = (props) => {
    return (
        props.data.map((value, index) => {
            return (<li key={index}>{value}</li>)
        })
    )
}

class App extends Component {
    state = {
        data: []
    }
    
    componentDidMount() {
        //Add API fetching logic here
        fetch('https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*')
            .then(response => response.json())
            .then(data => this.setState({
                data: data
            }))
    }
    
    render() {
        const {data} = this.state

        return(
            <ul>
                <ListItems data={data}/>
            </ul>
        )
    }
}

export default App