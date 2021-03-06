import React from 'react';

class AboutPage extends React.Component {
    render() {
        return (
            <h3>I am {this.props.age}-years-old!</h3>
        );
    }
}

export default AboutPage;