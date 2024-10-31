import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"

export function Signup(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validEmail, setValidEmail] = useState(false)
  const [validPassword, setValidPassword] = useState(false)
  const [error, setError] = useState()
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    //check the vaule of email
    if (email.length >= 5 && email.indexOf("@")) {
      setValidEmail(true)
    }
    else {
      setValidEmail(false)
    }
  }, [email])

  useEffect(() => {
    if (password.length >= 8) {
      setValidPassword(true)
    }
    else {
      setValidPassword(false)
    }
  }, [password])

  useEffect(() => {
    if(success){
      navigate('/')
    }
  },[success])

  const submitHandler = (event) => {
    //stop from refreshing the page
    event.preventDefault()
    //capture data from form 
    setError(null)
    const data = new FormData(event.target)
    props.handler(data.get("useremail"), data.get("userpw"))
      .then(() => setSuccess(true))
      .catch((error) => {
        handleErrors(error.code)
      })
  }

  const handleErrors = (code) => {
    // turn firebase errors into plain error msg for the visitor
    if ("auth/email-already-in-use") {
      setError("The email is already in use.")
    }
  }

  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="row">
        <form className="col-md-4 offset-md-4" onSubmit={submitHandler}>
          <h2>Create an account here</h2>
          <div className="mb-3">
            <label htmlFor="useremail">Email (please input valid email)</label>
            <input
              type="email"
              id="useremail"
              name="useremail"
              placeholder="you@domain.com"
              className="form-control"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="userpw">Password (minimum 8 characters)</label>
            <input
              type="password"
              id="userpw"
              name="userpw"
              placeholder="**********"
              className="form-control"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="d-grid ">
            <button
              type="submit"
              className="btn btn-success"
              disabled={(validEmail && validPassword) ? false : true}
            >
              Create Account
            </button>
            <div>{error}</div>
          </div>
        </form>
      </div>
      <div className="row">
        <div className="col text-center">
          <Link classsName="btn btn-link" to="/signin">Have an account? Sign in here. </Link>
        </div>
      </div>
    </div>
  )
}