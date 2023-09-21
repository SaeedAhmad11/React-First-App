import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1  from './navbar.js';
import Login from './login';
import TextArea1 from './textArea';
import About from './About';

function App() {
  return (
    <>
    <Navbar1 title="App"/>
    <div className='container'>
      {/* <About/> */}
      <TextArea1 heading='Enter Text to Analyze' Up='Convert to uppercase' Lo="Convert to Lowercase" clearbtn='Clear' preview = "Preview"/>
    </div>
      
    </>
    
  );
}

export default App;
