import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            loggedIn: false
        }
    }

    login = e => {
        e.preventDefault();
        if (localStorage.getItem('loggedIn')) {
            localStorage.removeItem('loggedIn');
            this.setState({ 
                loggedIn: true
            })
        } else {
            localStorage.setItem('loggedIn', true);
            this.setState({
                loggedIn: true
            })
        }
        window.location.reload();
    }

    render() {
        return (
            <div>
                <form>
                <input
                placeholder='name'
                username=''
                />
                <input
                placeholder='password'
                password=''
                />
                
                <button onSubmit={this.login}>Login</button>
                </form>
            </div>

        );
    }
}

export default Login;