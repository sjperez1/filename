import React, {Component} from 'react';
class PersonComponent extends Component{
    // Why constructor? Overrides default so we can set the state object.
    constructor(props){
        // Why super? It passes on the default constructor functionality
        super(props);
        this.state = {
            age : this.props.age
        }
    }
    increaseAge = () => {
        this.setState({age : this.state.age + 1})
    }
    render() {
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.increaseAge}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        );
    }
}

export default PersonComponent;