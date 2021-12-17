import logo from './logo.svg';
import './App.css';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact me/Contact';
import { Route, Router, Routes, Navigate } from 'react-router-dom';
import Projects from './component/Projects/Projects';
// import {Route, Redirect, Switch} from 'react-router-dom'
// import {Router,Route, Switch, Routes} from 'react-router-dom';


function App() {
  return (
      <div className="App">
        <Routes>
          {/* <Route path="/" exact>
            <Navigate to="/about_me" />
          </Route> */}
          <Route path="*" element={<Navigate to ="/about_me"/>} />
          <Route path="/about_me" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </div>
  );
}

export default App;
