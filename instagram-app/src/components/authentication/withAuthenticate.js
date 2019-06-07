import React from 'react';


const withAuthenticate = PostsPage => Login =>
    class extends React.Component {
        state = {
            loggedIn: false,
            usernameText: '',
            passwordText: ''
        }

        username = e => {
            this.setState({ usernameText: e.target.value })
        }
        password = e => {
            this.setState({ passwordText: e.target.value })
        }

        signIn = e => {
            e.preventDefault();
            localStorage.setItem('username', this.state.usernameText);
            localStorage.setItem('password', this.state.passwordText);
            localStorage.setItem('loggedIn', true)
            this.setState({ loggedIn: true})
        }

        
        render() {
            if (this.state.loggedIn) {
                return <PostsPage />;
                } else {
                return <Login 
                    username={this.props.username}
                    password={this.props.password}
                    signIn={this.signIn}
                    />;
                    }
                
        }
    }

export default withAuthenticate;