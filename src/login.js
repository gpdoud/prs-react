import React from 'react';
import Menu from './Menu';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <Menu />
                <p>Login works!</p>
            </div>
        )
    }
}

export default Login