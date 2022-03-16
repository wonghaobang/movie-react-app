import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./MovieDetail.css"

const MovieDetail = () => {
  const { imdbID } = useParams()

  const [currentMovie, setCurrentMovie] = useState({})

  useEffect(() => {
    const getMovie = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=5038683f&i=${imdbID}&plot=full`
      )
      const data = await response.json()
      console.log(data)
      setCurrentMovie(data)
    }

    getMovie()
  }, [])

  return (
    <div className="movie-detail">
      <div className="movie-detail-main">
        <p className="movie-detail-title">{currentMovie.Title}</p>
        <div className="movie-number-info">
          <p className="color-dark-blue">
            IMDB Rating <i className="fa-solid fa-star"></i> :{" "}
            {currentMovie.imdbRating}
          </p>
          <p className="color-dark-blue">
            IMDB Votes <i className="fa-solid fa-thumbs-up"></i> :{" "}
            {currentMovie.imdbVotes}
          </p>
          <p className="color-dark-blue">
            Runtime <i className="fa-solid fa-film"></i> :{" "}
            {currentMovie.Runtime}
          </p>
          <p className="color-dark-blue">
            Year <i className="fa-solid fa-calendar"></i> : {currentMovie.Year}
          </p>
        </div>

        <p>{currentMovie.Plot}</p>
        <div className="movie-non-number-info">
          <div>
            <p>Director</p>
            <p>Stars</p>
            <p>Genre</p>
            <p>Languages</p>
            <p>Awards</p>
          </div>

          <div className="color-dark-blue">
            <p>{currentMovie.Director}</p>
            <p>{currentMovie.Actors}</p>
            <p>{currentMovie.Genre}</p>
            <p>{currentMovie.Language}</p>
            <p>{currentMovie.Awards}</p>
          </div>
        </div>
      </div>

      <img
        src={
          currentMovie.Poster !== "N/A"
            ? currentMovie.Poster
            : "https://via.placeholder.com/400"
        }
        alt={currentMovie.Title}
        className="currentMovie-poster"
      />
    </div>
  )
}

export default MovieDetail
