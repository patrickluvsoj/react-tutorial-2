import React, {Component} from "react";

const TextInput = props => {

    const handleChange = (event) => {
        props.updateState(event.target.value, props.unit)
    }

    return (
        <fieldset>
            <legend>Enter temp in {props.unit}</legend>
            <input value={props.degree} onChange={handleChange}/>
        </fieldset>
    )
}

const BoilingVerdict = (props) => {
    if (props.celsius >= 100) {
        return <label>It is boiling</label>    
    } else {
        return <label>It is not boiling</label>    
    }
}


function celsiusToF(degree) {
    return (degree * 9/5) + 32
}


function fahrenheitToC(degree) {
    return (degree -31) * 5/9
}


function tryConvert(degree, convertFunc) {
    const floatDegree = parseFloat(degree)
    
    if (isNaN(degree)) {
        return ''
    }

    const convertedDegree = convertFunc(floatDegree)
    const roundDegree = Math.round(convertedDegree * 1000) / 1000

    return roundDegree.toString()
}


class App extends Component {
    state = {
        degree: 70,
        unit: 'f'
    }

    updateState = (degree, unit) => {
        this.setState({
            degree: degree,
            unit: unit
        })
    }

    render() {
        const {degree, unit} = this.state
        const celsius = unit === 'f' ? tryConvert(degree, fahrenheitToC) : degree 
        const fahrenheit = unit === 'c' ? tryConvert(degree, celsiusToF) : degree 

        return (
            <div>
                <label>Is it boiling?</label>
                <TextInput 
                    unit={'f'} 
                    degree={fahrenheit} 
                    updateState={this.updateState}/>
                <TextInput 
                    unit={'c'} 
                    degree={celsius} 
                    updateState={this.updateState}/>
                <BoilingVerdict celsius={parseFloat(celsius)}/>
            </div>
        )
    }
}

export default App