import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import PirateForm from '../components/PiratesForm';

const CreateView = props => {
    // const [errors, setErrors] = useState([]);
    const onSubmitHandler = (e, data) => {
        e.preventDefault();
        console.log(data);
        axios.post("http://localhost:8000/api/pirates/create", data)
        .then(res => {
            navigate('/');
        })
        .catch(err => {
            console.log("ERRORRRRRRRRRRRR", err);
            // const errorResponse = err.response.data.errors;
            // const errorArr = [];

            // for (const key of Object.keys(errorResponse)) {
            //     errorArr.push(errorResponse[key].message);
            // }
            // setErrors(errorArr);
        })
    }
    return (
        <div>
            <h1>Create a new pirate</h1>
            {/* {errors.map((error, index) => {
                return (
                    <p key={index}>{error}</p>
                )
            })} */}
            <PirateForm 
                    onSubmitHandler={onSubmitHandler}
                    initalName=""
                    initalCrewPosition="captain"
                    initalNumberOfTreasureChests=""
                    initalCatchPhrase=""
                    //initalDisability=""
                />
        </div>
    ) 
}

export default CreateView;