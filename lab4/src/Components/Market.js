//Importing React and everything it contains
import React, {Component} from 'react';
//Importing MarketItem and everything it contains
import MarketItem from './MarketItem';

class Market extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }
    render () {
        return (
            <div>
                <MarketItem counter={this.state.counter}/>
            
                <button onClick={() => {this.setState({counter: this.state.counter +1});}}>Click Me to Add an Item!</button>
            </div>
        )
    }
}

export default Market;