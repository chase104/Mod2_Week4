import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../../redux/slices/moviesSlice';

function MovieForm() {

    const dispatch = useDispatch()
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
        dispatch(addMovie(formData))
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                ></textarea>
            </div>

            <div>
                <label htmlFor="duration">Duration:</label>
                <input
                    type="text"
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="actor">Actor:</label>
                <input
                    type="text"
                    id="actor"
                    name="actor"
                    value={formData.actor}
                    onChange={handleChange}
                />
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default MovieForm;