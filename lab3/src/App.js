import HomePage from './components/HomePage.js';
import ReactDom from 'react-dom';

function App() {
  return (
    ReactDom.render(<HomePage firstName="Katishka Walton"/>, document.getElementById('root'))
  )
}

export default App;
