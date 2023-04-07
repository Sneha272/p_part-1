import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import _ from 'lodash'

function MovieDetails() {
  const [users, setUsers] = useState([])
  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(true)

  const params = useParams()

  useEffect(() => {
    setLoading(true)
    fetchData()
    setLoading(false)
  }, [])

  async function fetchData() {
    const response = await fetch(`https://api.tvmaze.com/shows/${params.id}`)
    const data = await response.json()
    setMovie(data)
  }

  if (loading) {
    return (
      <h1>Loading...</h1>
    )
  }

  // return this after loading is finished
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img src={_.get(movie, 'image.original')} className="card-img-top" alt="..." />
        <div className="card-body">
          <div>Movie Name: {movie.name}</div>
          <div>Movie Summary: {movie.summary}</div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails