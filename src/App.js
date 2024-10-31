import './App.css';
import { useState, useEffect } from 'react';
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

//import firebase auth 
import {
    getAuth,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth"
import { Signout } from './pages/Signout';

//initialize app
const FBapp = initializeApp(FirebaseConfig)

//initialize firebase auth
const FBauth = getAuth(FBapp)

//function to create user account
const signup = (email, password) => {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(FBauth, email, password)
            .then((userCredential) => resolve(userCredential))
            .catch((error) => reject(error))
    })
}

const signin = (email,password) =>{
    return new Promise ((resolve, reject) =>{
        signInWithEmailAndPassword(FBauth, email, password)
        .then((userCredential) => resolve(userCredential.user))
        .catch((error) => reject(error))
    })
}

const signoutUser = () => {
    return new Promise((resolve, reject) => {
        signOut(FBauth)
            .then(() => resolve(true))
            .catch((error) => reject(error))
    })

}

const NavData = [
    { name: "Home", path: "/", public: true },
    { name: "About", path: "/about", public: true },
    { name: "Contact", path: "/contact", public: true },
    { name: "Sign Up", path: "/signup", public: true },
    { name: "Sign In", path: "/signin", public: true },
]

const NavDataAuth = [
    { name: "Home", path: "/", public: true },
    { name: "About", path: "/about", public: true },
    { name: "Contact", path: "/contact", public: true },
    { name: "Sign out", path: "/signout", public: true }
]

function App() {

    const [auth, setAuth] = useState()
    const [nav, setNav] = useState(NavData)

    //an observer to determine user's authentication status 
    onAuthStateChanged(FBauth, (user) => {
        if (user) {
            setAuth(user)
            setNav(NavDataAuth)
        }
        else {
            setAuth(null)
            setNav(NavData)
        }
    })

    return (
        <div className="App">
            <Header title="SAWS" headernav={nav} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/signup' element={<Signup handler={signup} />} />
                <Route path='/signout' element={<Signout handler={signoutUser} auth={auth} />} />
                <Route path='/signin' element={<Signin handler ={signin}/>} />
            </Routes>
            <Footer year="2024" />
        </div>
    );
}

export default App;
