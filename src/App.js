//import logo from './logo.svg';

import './App.css';
import Dashbored from './components/dashbored/Dashbored';
import Header from './components/dashbored/Header';
import Navbar from './components/dashbored/Navbar';





function App() {

  
  return (
    <div className="App">
       <Navbar/>
       <Header/>
       {/* <ModalWindow/> */}
      
     <Dashbored/>
    
    
    </div>
  );
}

export default App;
