import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Work from "./components/Work";
import {Routes,Route} from "react-router-dom";
import Certificates from "./components/Certificates";
import Education from "./components/Education";

function App() {
  return (
    <div >
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/education' element={<Education/>}/>
            <Route path='/Certificates' element={<Certificates/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/work' element={<Work/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </div>
  );
}

export default App;
