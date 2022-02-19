import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "../components/UserList";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const User = () => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    console.log(user);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
        .then(response => {
            console.log(response);
            setUser(response.data);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
    }, [user])

    return (
        <>
            <h1>User Info</h1>
            {loading ? <Spinner /> : null}
        </>
    )
}

export default User;