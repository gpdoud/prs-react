import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../Menu';
import './Userlist.css';
import Header from '../../header';

class Userlist extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            error : null,
            isLoaded : false,
            users : [] 
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:5000/api/users")
            .then(res => res.json())
            .then(
                (result) => {
                    console.debug("Sucessful AJAX call!", result);
                    this.setState({ 
                        isLoaded: true,
                        users: result
                    });
                },
                (error) => {
                    this.setState({
                        error,
                        isLoaded: false
                    });
                }
            );
    
    }

    generateRows() {
        const users = this.state.users;
        let trs = [];
        users.forEach((u,i) => {
            let tr = (
                <tr key={'tr'+i}>
                    <td>{u.id}</td>
                    <td>{u.username}</td>
                    <td>{u.firstname}</td>
                    <td>{u.lastname}</td>
                    <td>{u.isReviewer ? "Yes" : "No"}</td>
                    <td>{u.isAdmin ? "Yes" : "No"}</td>
                    <td>
                        <Link to={`/user/detail/${u.id}`}>Detail</Link>
                        <span> | </span>
                        <span>Edit</span>
                    </td>
                </tr>
            )
            trs.push(tr);
        })
        return trs;
    }

    render() {
        const isLoaded = this.state.isLoaded;
        const error = this.state.error;
        if(error) { 
            console.error(error);
            return <p>Error</p>
        } else if(!isLoaded) {
            return <p>Loading ...</p>
        } else {
            const rows = this.generateRows();
            return (
                <Fragment>
                    <Menu />
                    <Header pageTitle="User List" linkComponent="ABC" linkDisplay="XYZ" />
                    <Link to={"/user/create"}>Create New</Link>
                    <table className="table table-sm">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Username</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Reviewer</th>
                                <th>Admin</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </Fragment>
            )
        }
    }
}

export default Userlist;