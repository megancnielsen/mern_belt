import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import PirateForm from '../components/PiratesForm';
import DeleteButton from '../components/DeleteButton';

const EditView = props => {
    const { id } = props;
    const [pirate, setPirate] = useState({});
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates/' + id)
        .then(res => {
            setPirate(res.data)
            setLoaded(true);
        })
        .catch(err => {
            console.log(err)
        });
    })
    const onSubmitHandler = (e, data) => {
        axios.put("http://localhost:8000/api/pirates" + id, data)
        .then(res => {
            navigate('/');
        })
        .catch(err => {
            console.log("OHHH NOOOOOOO!!", err);
        })
    }
    return (
        <div>
            <h1>Edit pirate: {pirate.name}</h1>
            {loaded &&
                <PirateForm 
                    onSubmitHandler={onSubmitHandler}
                    initalName={pirate.name}
                    initalCrewPosition={pirate.crewPosition}
                    initalNumberOfTreasureChests={pirate.numberOfTreasureChests}
                    initalCatchPhrase={pirate.catchPhrase}
                    initalDisability={pirate.disability}
                />
            }
            <DeleteButton id={pirate._id}/>
        </div>
    )
}

export default EditView;