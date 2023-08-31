
import './App.css';
import Gallery from './Component/Gallery';

import NavBar from './Component/NavBar';
import Section from './Component/Section';

function App() {
  return (
    <div className="App">

      <NavBar/>
      <div className='container-gral '>
          <Gallery/>
          <Section/>
          
      </div>


    </div>
  );
}

export default App;
