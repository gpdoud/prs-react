import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../header';
import Menu from '../../Menu';

const uri = "http://localhost:5000/api/users";

const callUserGet = async (id) => {
    console.debug(`${uri}/${id}`);
    const res = await fetch(`${uri}/${id}`);
    const user = await res.json();
    console.debug("User:", user);
    return user;
}


const Userchange = () => {
    const [user, setUser] = useState({});
    const params = useParams();
    console.debug(params);
    const navigate = useNavigate();
    
    useEffect(() => {
        callUserGet(params.id)
        .then(res => setUser(res))
    }, []);
    
    const handleChange = (event) => {
        let field = event.target.name;
        let value = event.target.value;
        user[field] = value;
    }

    const save = async () => {
        user.isReviewer = user.isReviewer === "on" ? true : false;
        user.isAdmin = user.isAdmin === "on" ? true : false;
        console.debug("User B4:", user);
        const res = await fetch(`${uri}/${user.id}`, {
            method: 'PUT',
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(user)
        });
        if(res.status === 204) {
            console.log("Change Successful!");
        } else {
            console.error("Error:", res);
        }
        navigate("/user/list");
    }
    
    return (
        <main>
            <Menu />
            <Header pageTitle="User Change" />
            <table className='table table-sm table-70'>
                <tbody>
                    <tr>
                        <td>Id</td>
                        <td><input name="id" defaultValue={user.id} onChange={handleChange} disabled /></td>
                    </tr>
                    <tr>
                        <td>Username</td>
                        <td><input name="username" defaultValue={user.username} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password" name="password" defaultValue={user.password} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td>Firstname</td>
                        <td><input name="firstname" defaultValue={user.firstname} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td>Lastname</td>
                        <td><input name="lastname" defaultValue={user.lastname} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td><input name="phone" defaultValue={user.phone} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td><input name="email" defaultValue={user.email} onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td>Reviewer?</td>
                        <td><input type="checkbox" name="isReviewer" onChange={handleChange} 
                            defaultChecked={user.isReviewer} /></td>
                    </tr>
                    <tr>
                        <td>Admin?</td>
                        <td><input type="checkbox" name="isAdmin" onChange={handleChange}
                            defaultChecked={user.isAdmin} /></td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button onClick={save} className="btn btn-primary btn-sm">Save</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>
    );
}

export default Userchange;