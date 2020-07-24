import React, { useState } from "react";

import axios from "axios";
import { navigate } from "@reach/router";
import Form from '../components/Form'

const NewProduct = (props) => {
    const [errors, setErrors] = useState(null);

    const whyDontYouLoveMe = (item) => {
        axios
            .post("http://localhost:8000/api/authors", item)
            .then((res) => {
                console.log(res);
                navigate("/authors");
            })
            .catch((err) => {
                // this catch happens because of the res.status(400) in the controller
                setErrors(err.response.data.errors);
                console.log(err.response);
            });
    };

    return (
        <div>
            <Form onSubmitProp={whyDontYouLoveMe} initialName="" intiialErrors={errors} />
            {errors && (
                <span style={{ color: "red" }}>
                    {/* ?. is called optional chaining, NEW feature in JS */}
                    {errors?.name?.properties?.message}
                </span>
            )}
        </div>
    );
};

export default NewProduct;