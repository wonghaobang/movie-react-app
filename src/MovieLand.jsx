import React, { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import SearchIcon from "./search.svg"
import "./MovieLand.css"

const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}`

const MovieLand = () => {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const searchMovies = async (title) => {
    localStorage.setItem("titleSearched", title)
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    console.log(data)
    setMovies(data.Search)
  }

  useEffect(() => {
    const initialSearch = localStorage.getItem("titleSearched")
    if (initialSearch) {
      searchMovies(initialSearch)
    } else {
      searchMovies("superman")
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    searchMovies(searchTerm)
  }

  return (
    <>
      <div className="app">
        <h1 className="app-name">MovieLand</h1>

        <form className="search" onSubmit={handleSubmit}>
          <input
            placeholder="Search for movies..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt="search"
            className="search-icon"
            onClick={() => searchMovies(searchTerm)}
          />
        </form>

        {movies?.length > 0 ? (
          <div className="movie-container">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID} />
            ))}
          </div>
        ) : (
          <h2 className="empty-message">No movies found</h2>
        )}
      </div>
    </>
  )
}

export default MovieLand
