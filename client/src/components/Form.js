import React, { useState } from 'react';
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';
import { navigate } from '@reach/router';
const styles = {
    paper: {
        width: "20rem", padding: "1rem"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}

const Form = (props) => {
    const { initialName, onSubmitProp, initialErrors } = props;
    const [name, setName] = useState(initialName)
    const theSubmitButtonHasBeenClicked = (e) => {
        e.preventDefault();
        onSubmitProp({ name });
    }
    return (
        <Paper elevation={3} style={styles.paper}>
            <h2>Author's Name</h2>
            <form onSubmit={theSubmitButtonHasBeenClicked}>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Name:</InputLabel>
                    <OutlinedInput value={name} type="text" onChange={(event) => setName(event.target.value)} />
                    {initialErrors && (
                        <span style={{ color: "red" }}>
                            {/* ?. is called optional chaining, NEW feature in JS */}
                            {initialErrors?.title?.properties?.message}
                        </span>
                    )}
                </FormControl>
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={(event) => { navigate("/authors") }}>
                        Cancel
                    </Button>
                    {" "}
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </div>
            </form>
        </Paper>
    )
}
export default Form;