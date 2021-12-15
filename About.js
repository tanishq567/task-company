
import { ThemeProvider } from '@material-ui/core';
import React, { Component } from 'react'
import { Redirect } from 'react-router'


class About extends React.Component {
        userData;

        constructor(props) {
                super(props)

                this.state = {
                        email: "",
                        password: "",
                        mobileNumber: "",
                        address: "",

                        loggedIn: false,
             
                        
                }
        }

        componentDidMount() {
                this.userData = JSON.parse(localStorage.getItem('user'));
        
                if (localStorage.getItem('user')) {
                    this.setState({
                       
                        email: this.userData.email,
                        phone: this.userData.phone
                    })
                } else {
                    this.setState({
                       
                        email: '',
                        phone: ''
                    })
                }
            }
        
            componentWillUpdate(nextProps, nextState) {
                localStorage.setItem('user', JSON.stringify(nextState));
            }



        handleEmail = (e) => {
                this.setState({
                        email: e.target.value
                })
        }

        handlePassword = (e) => {
                this.setState({
                        password: e.target.value
                })
        }
        handleaddress = (e) => {
                this.setState({
                        address: e.target.value
                })

        }
        handlemobile = (e) => {
                this.setState({
                        mobileNumber: e.target.value
                })
        }
        handleLogin = () => {
   

                if (this.state.email == "tanishq@gmail.com" && this.state.password == "abcd")
                        this.setState({
                                loggedIn: true,
                      
                        })

        }
                               
        render() {
                if(this.state.loggedIn== true){
                        return <Redirect to="/Home" />
                    }
                
                return (
                        <div>
                                <input
                                        label="email"
                                        fullWidth
                                        value={this.state.email}
                                        placeholder='enter your email'
                                        onChange={this.handleEmail}

                                       
                                />
                              

                                <input
                                       
                                        value={this.state.password}
                                        placeholder='enter your password'
                                        onChange={this.handlePassword} />
                                

                                <input
                                        value={this.state.address}
                                        placeholder='enter ypur address'
                                        onChange={this.handleaddress} />


                                <input text="number"
                                        placeholder='enter your mobile number'
                                        value={this.state.mobileNumber}
                                        onChange={this.handlemobile} />

                                <button
                                        onClick={this.handleLogin}>
                                        Login</button>

                                        

                        </div>


                )
        }
}
export default About;








