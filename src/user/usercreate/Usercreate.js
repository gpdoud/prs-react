import React, { Fragment } from 'react';
import Menu from '../../Menu';
import withRouter from '../../withRouter';
import './Usercreate.css';
import Header from '../../header';

class Usercreate extends React.Component {
    constructor(props) {
        super(props);
        // console.log("props.params.id:", props.params.id)
        this.state = {
            user_id: 0,
            user_username: "ABC",
            user_password: "",
            user_firstname: "",
            user_lastname: "",
            user_phone: "",
            user_email: "",
            user_isReviewer: false,
            user_isAdmin: false,
            error: null
        }
    }
    handleChangeUsername(event) {
        this.setState({ user_username: event.target.value });
        console.log(this.state);
    }
    save() {
        console.log("Username:", this.state.user_username);
    }
    render() {
        
        console.log(this.state);
        return (
            <Fragment>
                <Menu />
                <Header pageTitle="User Detail" />
                <table className='table table-sm table-70'>
                    <tbody>
                        <tr>
                            <td>Id:</td>
                            <td><input value={this.state.user_id} type="number" disabled /></td>
                        </tr>
                        <tr>
                            <td>Username:</td>
                            <td><input defaultValue={this.state.user_username} type="text" name="username" onChange={this.handleChangeUsername} /></td>
                        </tr>
                        <tr>
                            <td>First name:</td>
                            <td><input defaultValue={this.state.user_firstname} /></td>
                        </tr>
                        <tr>
                            <td>Last name:</td>
                            <td><input defaultValue={this.state.user_lastname} /></td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td><input defaultValue={this.state.user_phone !== null ? this.state.user_phone : ''} /></td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td><input defaultValue={this.state.user_email !== null ? this.state.user_email : ''} /></td>
                        </tr>
                        <tr>
                            <td>Reviewer?:</td>
                            <td><input defaultChecked={this.state.user_isReviewer ? 'checked' : ''} type="checkbox" /></td>
                        </tr>
                        <tr>
                            <td>Admin?:</td>
                            <td><input defaultChecked={this.state.user_isAdmin ? 'checked' : ''} type="checkbox" /></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button onClick={this.save} className="btn btn-primary">Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Fragment>
        )

    }
}


export default withRouter(Usercreate);