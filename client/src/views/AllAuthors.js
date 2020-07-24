import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link, navigate } from "@reach/router";
import DeleteButton from "../components/DeleteButton";
import NotFound from "./NotFound";

const AllAuthors = (props) => {
    const [authors, setAuthors] = useState(null)
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors")
            .then((res) => {
                setAuthors(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // If there are no authors display this
    if (authors == null) {
        return (<NotFound />)
    }

    const eraseMe = ((idOfTheThingIWantToDelete) => {
        const filteredAuthors = authors.filter((author) => {
            return author._id !== idOfTheThingIWantToDelete;
        });
        setAuthors(filteredAuthors);
    });

    return (
        <div>
            <Link to="/authors/new">Add an Author</Link>
            <p>We have quotes by:</p>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.sort((a, b) => a.name.localeCompare(b.name)).map((author) => {
                        return (
                            <tr key={author._id}>
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
                        )
                    })}
                </tbody>
            </table>
        </div>
    )


}
export default AllAuthors;