import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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

const removeUser = async (id) => {
    console.debug("Remove user id:", id);
    const res = await fetch(`${uri}/${id}`, { method: 'DELETE', mode: 'cors' });
    console.debug("res:", res);
}

const Userdetail = () => {
    const [user, setUser] = useState({});
    const params = useParams();
    console.debug(params);
    
    useEffect(() => {
        callUserGet(params.id)
        .then(res => setUser(res))
    }, []);
    
    const remove = () => {
        console.debug("remove()");
        removeUser(params.id)
            .then(res => console.debug("Remove res:", res));
    }
    
    return (
        <main>
            <Menu />
            <Header pageTitle="User Detail" />
            <table className='table table-sm table-70'>
                <tbody>
                    <tr>
                        <td>Id</td>
                        <td>{user.id}</td>
                    </tr>
                    <tr>
                        <td>Username</td>
                        <td>{user.username}</td>
                    </tr>
                    <tr>
                        <td>Firstname</td>
                        <td>{user.firstname}</td>
                    </tr>
                    <tr>
                        <td>Lastname</td>
                        <td>{user.lastname}</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>{user.phone}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td>Reviewer?</td>
                        <td>{user.isReviewer ? "Y" : "N"}</td>
                    </tr>
                    <tr>
                        <td>Admin?</td>
                        <td>{user.isAdmin ? "Y" : "N"}</td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button onClick={remove} className="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>
    );
}

export default Userdetail;