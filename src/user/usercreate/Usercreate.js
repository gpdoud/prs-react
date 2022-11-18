import React, { Fragment } from 'react';
import Menu from '../../Menu';
import withRouter from '../../withRouter';
import './Usercreate.css';
import Header from '../../header';

class Usercreate extends React.Component {
    constructor(props) {
        super(props);
        console.log("props.params.id:",props.params.id)
        this.state = {
            userId: props.params.id,
            user: null,
            isLoaded: false,
            error: null
        }
    }
    componentDidMount() {
        let userId = this.state.userId;
        fetch(`http://localhost:5000/api/users/${userId}`)
            .then((res) => res.json())
            .then((user) => {
                console.log("Async call complete");
                this.setState({ user: user, isLoaded: true });
            });
    }
    delete() {
        console.debug("Delete()");
    }
    render() {
        let user = this.state.user;
        let isLoaded = this.state.isLoaded;
        if(!isLoaded) {
            return <p>Loading ...</p>
        } else {
            return (
                <Fragment>
                    <Menu />
                    <Header pageTitle="User Detail" />
                    <table className='table table-sm table-70'>
                        <tbody>
                            <tr>
                                <td>Id:</td>
                                <td><input value={user.id} type="number" disabled /></td>
                            </tr>
                            <tr>
                                <td>Username:</td>
                                <td><input value={user.username}  /></td>
                            </tr>
                            <tr>
                                <td>First name:</td>
                                <td><input value={user.firstname}  /></td>
                            </tr>
                            <tr>
                                <td>Last name:</td>
                                <td><input value={user.lastname}  /></td>
                            </tr>
                            <tr>
                                <td>Phone:</td>
                                <td><input value={user.phone !== null ? user.phone : ''}  /></td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td><input value={user.email !== null ? user.email : ''}  /></td>
                            </tr>
                            <tr>
                                <td>Reviewer?:</td>
                                <td><input checked={user.isReviewer ? 'checked' : ''} type="checkbox"  /></td>
                            </tr>
                            <tr>
                                <td>Admin?:</td>
                                <td><input checked={user.isAdmin ? 'checked' : ''} type="checkbox"  /></td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Fragment>
            )
        }
    }
}


export default withRouter(Usercreate);