import React from 'react';

class ColorPage extends React.Component {
    render() {
        return (
            <h3>My favorite colors are {this.props.color1} and {this.props.color2}.</h3>
        );
    }
}

export default ColorPage;