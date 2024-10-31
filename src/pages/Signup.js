import { useState, useEffect } from "react"

export function Signup(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [validPassword, setValidPassword] = useState(false)

    useEffect(() => {
        //check the vaule of email
        if( email.length >= 5 && email.indexOf("@") ){
            setValidEmail( true )
        }
        else{
            setValidEmail( false )
        }
    },[email])

    useEffect (() => {
        if(password.length >= 8){
            setValidPassword( true )
        }
        else {
            setValidPassword( false )
        }
    }, [password])

    return (
        <div className="container-fluid">
            <div className="row">
                <form className="col-md-4 offset-md-4">
                    <h2>Sign up for an account here</h2>
                    <div className="mb-3">
                        <label htmlFor="useremail">Email (please input valid email)</label>
                        <input 
                            type="email" 
                            id="useremail" 
                            placeholder="you@domain.com" 
                            className="form-control" 
                            value={ email }
                            onChange={ (event) => setEmail(event.target.value) }
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="userpw">Password (minimum 8 characters)</label>
                        <input 
                            type="password" 
                            id="userpw" 
                            placeholder="**********" 
                            className="form-control" 
                            value={password}
                            onChange={(event) => setPassword(event.target.value)} 
                        />
                    </div>
                    <div className="d-grid ">
                        <button 
                            type = "submit" 
                            className = "btn btn-success"
                            disabled = { (validEmail && validPassword) ? false: true}
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}