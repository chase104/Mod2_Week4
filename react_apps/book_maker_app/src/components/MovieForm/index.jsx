import { useState } from 'react';
// import { uuidv4 as uuid } from 'uuidv4';
import { v4 as uuidv4 } from 'uuid';
import {Button, TextField} from '@mui/material';

function MovieForm({setMovies}) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        duration: '',
        actor: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);

        // check for errors
        // validator


        setMovies((prev) => {
            return [ 
                ...prev,
                {
                    id: uuidv4(),
                    ...formData
                }
            ]
        })
    };

    let fields = ["title", "description", "duration", "actor", "director"];

    let divs = fields.map((item) => {
        if (item === "description") {
            return (
                <div key={item}>
                    <label htmlFor={item}>{item}:</label>
                    <textarea
                        type="text"
                        id={item}
                        name={item}
                        value={formData[item]}
                        onChange={handleChange}
                    ></textarea>
                </div>
            )
        } else {
            return (
                <div key={item}>
                    <label htmlFor={item}>{item}:</label>
                    <TextField
                        type="text"
                        id={item}
                        name={item}
                        variant="outlined"
                        label="item"
                        value={formData[item]}
                        onChange={handleChange}
                    />
                </div>
            )
        }
    });

    return (
        <form onSubmit={handleSubmit}>
            {divs}
            <div>
                <Button variant="outlined" type="submit">Submit</Button>
            </div>
        </form>
    );
}

export default MovieForm;