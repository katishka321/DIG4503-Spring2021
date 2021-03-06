import React from 'react';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ColorPage from './components/ColorPage';

class App extends React.Component {
  render() {
    return (
      <HomePage firstName= "Katishka" />,
      <AboutPage age= "23"/>,
      <ColorPage color1 = "red" color2= "black"/>
    );
  }
}

export default App;
