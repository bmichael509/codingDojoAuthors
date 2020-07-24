import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import Form from "../components/Form";
import NotFound from "./NotFound";

const EditAuthor = (props) => {
    const [author, setAuthor] = useState(null);
    const [errors, setErrors] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors/" + props.id)
            .then((res) => {
                console.log(res.data);
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch((err) => {
                // this catch happens because of the res.status(400) in the controller
                setErrors(err.response.data.errors);
            });
    }, []);

    const updateAuthor = (event) => {
        axios
            .put("http://localhost:8000/api/authors/" + props.id, event)
            .then((res) => {
                navigate("/authors");
            })
            .catch((err) => {
                // this catch happens because of the res.status(400) in the controller
                setErrors(err.response.data.errors);
                console.log(err.response);
            });
    };

    if (author === null) {
        return <NotFound />
    }

    return (
        <div>
            <h2>Update a Author</h2>
            {loaded && (
                <Form
                    onSubmitProp={updateAuthor}
                    initialName={author.name}
                    initialErrors={errors}
                />
            )}
            {errors && (
                <span style={{ color: "red" }}>
                    {/* ?. is called optional chaining, NEW feature in JS */}
                    {errors?.name?.properties?.message}
                </span>
            )}
        </div>
    );
};

export default EditAuthor;