import React from 'react'
import { useEffect } from 'react'
import { API_KEY } from '../constants/constant'
import axios from '../constants/axios'
import "./Banner.css"
import { useState } from 'react'
function Banner() {
  const [movie,setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      setMovie(response.data.results[0])
    })
  }, [])

  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'> {movie ? movie.title: ""} </h1>
            <div> 
                <button className='button'>play</button>
                <button className='button'>myList</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""} </h1>
        </div>
        <div className="fade_bottom">
            
        </div>
    </div>
  )
}

export default Banner