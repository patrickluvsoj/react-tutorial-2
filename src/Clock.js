import React, {Component} from "react";

class App extends Component {
    state = {
        date: new Date()
    }

    componentDidMount() {
        //Why does this need to be passed as arrow function?
        //https://sebhastian.com/this-setstate-is-not-a-function/
        this.timerId = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        const {date} = this.state

        return (
            <div>
                <h1>Current Time</h1>
                <h2>{date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default App