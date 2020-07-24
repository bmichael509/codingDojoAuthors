import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link, navigate } from "@reach/router";
import DeleteButton from "../components/DeleteButton";
import NotFound from "./NotFound";

const OneAuthor = (props) => {
    const [author, setAuthor] = useState(null)
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors" + props.id)
            .then((res) => {
                setAuthor(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // If there are no authors display this
    if (author == null) {
        navigate(`/authors`)
    }

    const eraseMe = ((idOfTheThingIWantToDelete) => {
        axios
            .delete("http://localhost:8000/api/authors/" + idOfTheThingIWantToDelete)
            .then((res) => {
                navigate(`/authors`)
            })
            .catch((err) => {
                console.log(err);
            });
    });

    if (author == null) {
        return (<NotFound />)
    }

    return (
        <div key={author._id}>
            <Link to="/authors/new">Add an Author</Link>
            <p>We have quotes by:</p>
            <table>
                <thead>
                    <th>Author</th>
                    <th>Actions Available</th>
                </thead>
                <tr>
                    <td>{author.name}</td>
                    <td>
                        <button onClick={(event) => {
                            navigate(`/authors/${author._id}/edit`)
                        }}
                        >Edit</button>
                        <DeleteButton
                            authorId={author._id}
                            successCallback={() => { eraseMe(author._id) }}
                        />
                    </td>
                </tr>
            </table>
        </div>
    );
};
export default OneAuthor;