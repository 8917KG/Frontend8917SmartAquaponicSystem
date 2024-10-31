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

    const submitHandler = (event) => {
        //stop from refreshing the page
        event.preventDefault()
        //capture data from form 
        const data = new FormData(event.target)
        props.handler( data.get("useremail"), data.get("userpw"))
        .then(() => console.log('success'))
        .catch((error) => console.log('opps'))
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <form className="col-md-4 offset-md-4" onSubmit={submitHandler}>
                    <h2>Sign up for an account here</h2>
                    <div className="mb-3">
                        <label htmlFor="useremail">Email (please input valid email)</label>
                        <input 
                            type="email" 
                            id="useremail" 
                            name = "useremail"
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
                            name = "userpw"
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