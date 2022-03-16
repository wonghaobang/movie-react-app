import React from "react"
import { useHistory } from "react-router-dom"

const MovieCard = ({ movie: { Year, Poster, Title, Type, imdbID } }) => {
  const history = useHistory()

  return (
    <div className="movie" onClick={() => history.push(`movie/${imdbID}`)}>
      <p className="movie-year">{Year}</p>

      <img
        src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
        alt={Title}
        className="movie-poster"
      />

      <div className="movie-info">
        <span className="movie-type">{Type}</span>
        <h3 className="movie-title">{Title}</h3>
      </div>
    </div>
  )
}

export default MovieCard
