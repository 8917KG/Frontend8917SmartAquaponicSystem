export function Signup(props) {
    return (
        <div className="container">
            <div className="row">
                <form className="col-md-4 offset-md-4">
                    <h2>Sign up for an account here.</h2>
                    <div className="mb3">
                        <label htmlFor="useremail">Email:</label>
                        <input type="email" id="useremail" placeholder="you@domain.com" className="form-control" />
                    </div>
                    <div className="mb3">
                        <label htmlFor="userpw">Password:</label>
                        <input type="password" id="userpw" placeholder="**********" className="form-control" />
                    </div>
                </form>
            </div>
        </div>
    )
}