import React from 'react'
import './LoginForm.css'
export default function LoginForm() {
    return (
        <div>
            <form>
                <h1>Sign in</h1>
                <div className="form-group">
                    <label htmlFor="username">Email address</label>
                    <input type="text" className="form-control" placeholder='Your name' id="username" aria-describedby="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" placeholder='***********' id="exampleInputPassword1" />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Keep me signed in</label>
                </div>
                <button type="submit" className="btn">Signin to Coders-x </button>
                <div>
                    <a href=""> Forgot username?</a>
                    <a href=""> Forgot password?</a>
                </div>
            </form>
        </div>
    )
}
