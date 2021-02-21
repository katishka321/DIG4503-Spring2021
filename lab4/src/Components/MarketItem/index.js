//Render a <div> containing a single <p> with the word "Item" followed by the props.count value such that each item will render "item x" where x is its current number.

function MarketItem(props) {
    return (
        <div>
            <p>Item {props.count}</p>
        </div>
    );
}

export default MarketItem;