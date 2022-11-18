import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/user/list"}>Users</Link></li>
                    <li><Link to={"/login"}>Login</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Menu;