//Importing React and everything it contains
import React from 'react';
//Importing MarketItem and everything it contains
import MarketItem from '../MarketItem';

class Market extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }
    render () {
        return (
            <button onClick= {() => {
                const items = this.state.items;
                items.push(<MarketItem count={items.length} key={items.length} />);
                this.setState({items: item});
            }}>Click Me to Add an Item</button>
        );
    }
}

export default Market;