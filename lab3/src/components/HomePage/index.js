import React from 'react';

class HomePage extends React.Component {
    render() {
        return (
            <h2>Hello, I am {this.props.firstName}!</h2>
        );
    }
}

export default HomePage;