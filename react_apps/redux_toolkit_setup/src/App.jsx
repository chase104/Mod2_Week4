import './App.css';
import MovieForm from './components/BookForm';
import { decrement, increment, reset } from './redux/slices/counterSlice';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'

function App() {

  //  HOW TO GET STATE
  const count = useSelector((store) => store.counter);
  const movies = useSelector((store) => store.movies);
  console.log(movies);

  const dispatch = useDispatch(); // dispatch means activate / do

  const handleClick = () => {
    dispatch(increment());
  }

  return (
    <>
    <h1>count:</h1>
      <div>{count}</div>
      <button onClick={handleClick}>Plus One!</button>
      <button onClick={() => dispatch(decrement())}>Minus One!</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <MovieForm />

      {/* map movies */}
      {movies.map((movie) => {
        return <div key={movie.title}>{JSON.stringify(movie)}</div>
      })}
    </>
  )
}

export default App
