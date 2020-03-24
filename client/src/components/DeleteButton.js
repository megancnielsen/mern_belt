import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const DeleteButton = props => {
    const { id } = props;
    const onClickHandler =e => {
        axios.delete('http://localhost:8000/api/pirates/delete' + id)
        .then(res => {
            console.log(res);
            navigate('/');
        })
        .catch(err => {
            console.log("RUH-ROH RAGGY!", err);
        })
    }
    return (
        <button onClick={onClickHandler}>Delete</button>
    )
}
    
    export default DeleteButton;