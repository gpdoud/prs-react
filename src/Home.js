import React from 'react';
import Menu from './Menu';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <Menu />
                <p>Home works!</p>
            </div>
        )
    }
}

export default Home;