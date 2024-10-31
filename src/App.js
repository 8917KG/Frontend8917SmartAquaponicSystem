import './App.css';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Routes, Route } from 'react-router-dom';

//import page components
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin';

//import firebase 
import { initializeApp } from 'firebase/app';
import { FirebaseConfig } from './config/FirebaseConfig';

//initialize app
const app = initializeApp(FirebaseConfig)

const NavData = [
    {name: "Home", path: "/", public: true},
    {name: "About", path: "/about", public: true},
    {name: "Contact", path: "/contact", public: true},
    {name: "Sign Up", path: "/signup", public: true},
    {name: "Sign in", path: "/signin", public:true}
]

function App() {
  return (
    <div className="App">
        <Header title = "SAWS" headernav={NavData}/>
        <Routes>
            <Route path='/' element =  {<Home/>}  />
            <Route path='/about' element =  {<About/>}  />
            <Route path='/contact' element = {<Contact/>} />
            <Route path='/signup' element = {<Signup/>} />
            <Route path='/signin' element = {<Signin/>} />
        </Routes>
        <Footer year = "2024"/>
    </div>
  );
}

export default App;
