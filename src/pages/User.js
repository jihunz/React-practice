import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "../components/UserList";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const User = () => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
        .then(response => {
            console.log(response);
            setUser(response.data);
            setLoading(false);
        });
    }, []);
    
    const userDetail = loading ? <Spinner /> : (
        <div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
        </div>
    )

    return (
        <>
            <h1>User Info</h1>
            {userDetail}
        </>
    )
}

export default User;