import React from 'react';
import { Component } from "react";
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';  
// import instagramlogo from '../../Assets/instagramlogo.png'
import './register.css'


class Register extends Component {
    state = { email: '', password: '', fullName:'', username:'' }


    onSubmitForm = async (event) => {
        event.preventDefault()
        const { email, password,username,fullName } = this.state
        const userDetails = { email,fullName,username, password }
        console.log(JSON.stringify(userDetails))
        const url = "/sign-up"
        const options = {
            method: 'POST',
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

    onChangeFullname = (event) => {
        this.setState({ fullName: event.target.value })
    }

    onChangeUsername = (event) => {
        this.setState({ username: event.target.value })
    }

    render() {
        const { email, password,username,fullName } = this.state
    
        return (
            <div className="register-form-container">
                <div className='register-form-card-container'>
                    <div className='form-header-container'>
                        <img src="https://tse4.mm.bing.net/th?id=OIP.UfDoleKdz9lEvgCkZIIB_wAAAA&pid=Api&P=0" alt="text logo" className='register-logo' />
                        <p className='register-description'>Register to see photos and videos from your friends.</p>
                    </div>
                    <form className="register-form" onSubmit={this.onSubmitForm} >
                        <input value={email} className="input-field" type="email" placeholder="Email or Phone" onChange={this.onChangeEmail}/>
                        <input value={fullName} className="input-field" type="text" placeholder="Full Name" onChange={this.onChangeFullname}/>
                        <input value={username} className="input-field" type="text" placeholder="Username" onChange={this.onChangeUsername}/>
                        <input value={password} className="input-field" type="password" placeholder="Password" onChange={this.onChangePassword}/>
                        <p className='description'>People who use our service may have uploaded your contact information to Instagram. Learn More</p>
                    <p className='description'>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
                    <button className='register-button' type='submit' >Register</button>
                    </form>
                    
                </div>
                <div className='register-form-card-container'>
                    <p className='login-text'>Have an account? <Link className="login-link" to="/login">Login</Link></p>
                </div>
            </div>
        )
    }
}

export default Register