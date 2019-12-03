import React from 'react';
import './SignIn.scss';

class SignIn extends React.Component{
    constructor(props){
        super();

        this.state = {
            email: '',
            password: ''
        }
    }


    handleSubmit = (event) =>{
        event.preventDefault();
        this.setState({email:'', password:''})
    }

    handleChange = (event) => {
        let {value, name} = event.target;
        this.setState({[name]:value})
    }


    render(){
        return(
        <div className='SignIn'> 
            <h2>I've already have an account</h2>
            <span>Sign in with you email and password</span>

            <form onSubmit={this.handleSubmit}>
                <input 
                    name='email' 
                    type='email'
                    placeholder = 'xx@yy.com' 
                    value={this.state.email}
                    onChange = {this.handleChange}/>
                <input 
                    name='password' 
                    type='password' 
                    placeholder = 'your password'
                    value={this.state.password}
                    onChange={this.handleChange}/>
                <input name='submit' type = 'submit' value = 'Login'/>
            </form>
        </div>
        )
    }
}

export default SignIn;