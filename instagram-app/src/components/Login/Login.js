import React from 'react';

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
                    
                    <button>Login</button>
                </form>
            </div>

        );
    }
}

export default Login;