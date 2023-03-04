import React from 'react';
import { AiFillFacebook } from 'react-icons/ai'
import { Component } from "react";
import { Link } from 'react-router-dom'
import './login.css'


class Login extends Component {
    state = { email: '', password: '' }


    onSubmitForm = async (event) => {
        event.preventDefault()
        const { email, password } = this.state
        const userDetails = { email, password }
        const url = "/login"
        const options = {
            method: 'POST',
            headers:{
                'Content-Type':"application/json"
            },
            body: JSON.stringify(userDetails)
        }

        const response = await fetch(url, options)
        // const data = await response.json()
        if (response.ok === true) {
            console.log("data posted successfully!")
            // this.onSubmitsuccess(data.jwt_token)
        }
    }

    onChangeEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    onChangePassword = (event) => {
        this.setState({ password: event.target.value })
    }

    render() {
        return (
            <div className="login-form-container">
                <div className='login-form-card-container'>
                    <div className='login-form-header-container'>
                        <img src="https://tse4.mm.bing.net/th?id=OIP.UfDoleKdz9lEvgCkZIIB_wAAAA&pid=Api&P=0" alt="text logo" className='login-logo' />
                    </div>
                    <form className="login-form" onSubmit={this.onSubmitForm}>
                        <input id="email" className="login-input-field" type="text" placeholder="Phone number,username, or email" onChange={this.onChangeEmail} />
                        <input id="password" className="login-input-field" type="password" placeholder="Password" onChange={this.onChangePassword} />
                        <div className='checkbox-container'>
                            <input type="checkbox" className='checkbox-input' id="agree" />
                            <label className='label' htmlFor='agree' >Save login info</label>
                        </div>
                        <button className='login-button' type='submit'>Login</button>
                    </form>

                    <Link className='login-with-facebook-container'>
                        <AiFillFacebook className="icon" id='facebook' />
                        <label htmlFor='facebook' className='login-with-facebook'>Login with facebook</label>
                    </Link>
                    <Link to="" className='forgaot-password'>Forgot Password?</Link>
                </div>
                <div className='login-form-card-container'>
                    <p className='register-text'>Don't have an account? <Link className="register-link" to="/register">Sign Up</Link></p>
                </div>
            </div>
        )
    }
}

export default Login