import React, { useState, useEffect } from 'react';
import DeleteButton from '../components/DeleteButton';
import { Link } from '@reach/router';
import axios from 'axios';

const IndexView = props => {
    const [pirates, setPirates] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
            .then((res) => {
                /**
                 * res.data = {
                 *  pirates: []
                 * }
                 */
                setPirates(res.data.pirates);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <div>
            <h1>Pirates</h1>
            <Link to = "/create">Add pirate</Link>
            <ul>
                {pirates.map((pirate, i) => {
                    return (
                        <li key={i}>
                            <Link to={"/" + pirate._id}>{pirate.name}</Link> | 
                            <Link to={"/" + pirate._id + "edit"}>Edit</Link> | 
                            <DeleteButton id={pirate._id}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default IndexView;