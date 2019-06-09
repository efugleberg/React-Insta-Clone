import React from 'react';


const withAuthenticate = PostsPage => Login =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
            loggedIn: false,
            usernameText: '',
            passwordText: ''
        }
    }
        componentDidMount() {
            this.setState({
                loggedIn : false,
            });
        }

        handleChanges = e => {
            this.setState({[e.target.name]: e.target.value})
        }

        username = e => {
            this.setState({ usernameText: e.target.value })
        }
        password = e => {
            this.setState({ passwordText: e.target.value })
        }

        signIn = e => {
            e.preventDefault();
            localStorage.setItem('username', 'jerry');
            localStorage.setItem('password', 'seinfeld');
            this.setState({ loggedIn: true, })
        }

        
        render() {
            if (this.state.loggedIn) {
                return <PostsPage />;
                } else {
                return <Login 
                    username={this.state.usernameText}
                    password={this.state.passwordText}
                    signIn={this.signIn}
                    />;
                    }
                
        }
    }

export default withAuthenticate;