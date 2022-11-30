import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../header';
import Menu from '../../Menu';

const uri = "http://localhost:5000/api/users";

const callUserList = async () => {
    const res = await fetch(uri);
    const users = await res.json();
    console.debug("Users:", users);
    return users;
}

function Userlist() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        callUserList()
            .then(res => setUsers(res))
    }, []);

    let trs = [];
    for (let u of users) {
        trs.push(
            <tr key={'key'+u.id}>
                <td>{u.id}</td>
                <td>{u.username}</td>
                <td>{u.firstname}</td>
                <td>{u.lastname}</td>
                <td>{u.phone ?? "(null)"}</td>
                <td>{u.email ?? "(null)"}</td>
                <td>{u.isReviewer ? "Y" : "N"}</td>
                <td>{u.isAdmin ? "Y" : "N"}</td>
                <td>
                    <Link to={`/user/detail/${u.id}`}>Detail</Link>
                    <span> | </span>
                    <Link to={`/user/change/${u.id}`}>Change</Link>
                </td>
            </tr>
        )
    }

    return (
        <main>
            <Menu />
            <Header pageTitle="User List" />
            <Link to={"/user/create"}>Create New</Link>
            <table className='table table-sm'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Reviewer?</th>
                        <th>Admin?</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
        </main>
    );
}

export default Userlist;