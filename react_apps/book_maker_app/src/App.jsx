import { useState } from 'react'
import './App.css'
import MovieDisplay from './components/MovieDisplay'
import MovieForm from './components/MovieForm'

function App() {

  const [movies, setMovies] = useState([])
  console.log(movies);
  return (
    <>
      <MovieForm movies={movies} setMovies={setMovies}  />
      <MovieDisplay movies={movies} />
    </>
  )
}

export default App
