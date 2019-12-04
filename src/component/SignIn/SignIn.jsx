import React from 'react';
import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

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
                <FormInput 
                    name='email' 
                    type='email'
                    placeholder = 'email' 
                    value={this.state.email}
                    handleChange = {this.handleChange}/>
                <FormInput 
                    name='password' 
                    type='password' 
                    placeholder = 'your password'
                    value={this.state.password}
                    handleChange={this.handleChange}/>
                <CustomButton type = 'submit'>Login</CustomButton>
            </form>
        </div>
        )
    }
}

export default SignIn;