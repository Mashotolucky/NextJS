import React from 'react';
import { useState, useEffect } from "react";


function Card() {
    const [users, setUsers] = useState([]);

    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setUsers(data);

            })
    }

    useEffect(() => {
        fetchData();

    }, []);
    

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="mt-4 d-flex">
                            { users.map((user) =>
                            <div key={user.id}  className="card p-2 mx-2 col-2">
                                <div className="card-body">
                                    <h4 className="card-title">{user.name}</h4>
                                    <p className="card-text">{user.email}</p>
                                </div>
                                </div>
                            )

                            }
                        
                    </div>
                </div>

            </div>
        </>
    )
}

export default Card