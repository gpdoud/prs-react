import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../../Menu';
import Header from '../../header';
import './Usercreate.css';
import { User } from '../user';

const uri = "http://localhost:5000/api/users";


const Usercreate = () => {
    const [id, setId] = useState(0);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);
    const [isReviewer, setIsReviewer] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        let field = event.target.name;
        let value = event.target.value;
        console.debug(field, value);
        switch(field) {
            case "id": setId(event.target.value); break;
            case "username": setUsername(event.target.value); break;
            case "password": setPassword(event.target.value); break;
            case "firstname": setFirstname(event.target.value); break;
            case "lastname": setLastname(event.target.value); break;
            case "phone": setPhone(event.target.value); break;
            case "email": setEmail(event.target.value); break;
            case "isReviewer": setIsReviewer(event.target.checked); break;
            case "isAdmin": setIsAdmin(event.target.checked); break;
        }
    }
    const save = async () => {
        let user = new User();
        user.id = id;
        user.username = username;
        user.password = password;
        user.firstname = firstname;
        user.lastname = lastname;
        user.phone = phone;
        user.email = email;
        user.isReviewer = isReviewer;
        user.isAdmin = isAdmin;
        console.debug("User B4:", user);
        const res = await fetch(`${uri}`, {
            method: 'POST',
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(user)
        });
        if(res.status === 201) {
            console.log("Create Successful!");
        } else {
            console.error("Error:", res);
        }
        navigate("/user/list");
    }

    return (
        <main>
            <Menu />
            <Header pageTitle="User Create" />
            <table className='table table-sm table-70'>
                <tbody>
                    <tr>
                        <td>Id</td>
                        <td><input name="id" defaultValue={id} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td>Username</td>
                        <td><input name="username" defaultValue={username} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password" name="password" defaultValue={password} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td>Firstname</td>
                        <td><input name="firstname" defaultValue={firstname} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td>Lastname</td>
                        <td><input name="lastname" defaultValue={lastname} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td><input name="phone" defaultValue={phone} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td><input name="email" defaultValue={email} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td>Reviewer?</td>
                        <td><input type="checkbox" name="isReviewer" onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td>Admin?</td>
                        <td><input type="checkbox" name="isAdmin" onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button onClick={save} className="btn btn-primary btn-sm">Save</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>
    )
}


export default Usercreate;