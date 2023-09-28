import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';


const MovieDisplay = ({movies}) => {



  let arrayOfJSX =movies.map((book) => {
    return (
      <div key={book.id}>
        <h3>{book.title}</h3>
        <p>{book.description}</p>
      </div>
    )
  })
  console.log(arrayOfJSX);
  return (
    <div>
      <AliceCarousel  items={arrayOfJSX} />
    </div>
  )
}

export default MovieDisplay