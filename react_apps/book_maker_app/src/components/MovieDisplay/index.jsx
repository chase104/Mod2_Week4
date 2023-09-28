
const MovieDisplay = ({movies}) => {
  return (
    <div>
      {movies.map((book) => {
        return (
          <div key={book.id}>
            <h3>{book.title}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default MovieDisplay