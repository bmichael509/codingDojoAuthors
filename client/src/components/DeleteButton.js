import React from 'react'
import axios from 'axios';
export default props => {
    const { authorId, successCallback } = props;
    const deleteAuthor = () => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                successCallback();
            })
            .catch((err) => {
                // this catch happens because of the res.status(400) in the controller
                console.log(err.response);
            });
    }
    return (
        <button onClick={deleteAuthor}>
            Delete
        </button>
    )
}