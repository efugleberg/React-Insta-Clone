import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;`;

class Login extends React.Component {
    state= {
        loggedIn: false,
        username: '',
        password: ''
        }
    

    login = e => {
        const username = this.state.username;
        const password = this.state.password;
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        this.setState({ loggedIn: true});
        window.location.reload();
    }

    handleChanges = e => this.setState({ [e.target.name]: e.target.value })

    render() {
        return (
            <div>
                <form onSubmit={this.props.signIn}>
                    <input
                    name='username'
                    placeholder='name'
                    username='username'
                    type='text'
                    value={this.state.username}
                    onChange={this.handleChanges}
                    />

                    <input
                    name='password'
                    placeholder='password'
                    password='password'
                    type='text'
                    value={this.state.password}
                    onChange={this.handleChanges}
                    />
                    
                    <Button>Login</Button>
                </form>
            </div>

        );
    }
}

export default Login;