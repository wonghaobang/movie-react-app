import React from "react"
import { BrowserRouter, Route, Redirect } from "react-router-dom"
import MovieDetail from "./MovieDetail"
import MovieLand from "./MovieLand"

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <MovieLand />
      </Route>

      <Route path="/movie/:imdbID">
        <MovieDetail />
      </Route>

      <Redirect to="/" />
    </BrowserRouter>
  )
}

export default App
