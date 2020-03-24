import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';


const DetailView = props => {
    const { id } = props;
    const [pirate, setPirate] = useState({});
    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates/' + id)
        .then(res => {
            setPirate(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    })
    return (
        <div>
            <h1>View pirate: {pirate.name}</h1>
            <p># of Treasure Chests: {pirate.numberOfTreasureChests}</p>
            <p>Catch Phrase: {pirate.catchPhrase}</p>
            <p>Crew Position: {pirate.crewPosition}</p>
            <p>Disability: </p>
            <DeleteButton id={pirate._id}/>
        </div>
    )
}

export default DetailView;