import React from 'react'
import { useEffect } from 'react'
import { API_KEY ,imageUrl} from '../constants/constant'
import axios from '../constants/axios'
import "./Banner.css"
import { useState } from 'react'
function Banner() {
  const [movie,setMovie] = useState()
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      setMovie(response.data.results[currentIndex])
    })
  }, [currentIndex])  ;

  useEffect(()=>{
    const interval =setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return prevIndex === movie.length - 1 ? 0 : prevIndex +1;
      });
    },5000)
    return () => clearInterval(interval);
  },[movie]);

  return (
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'> {movie ? movie.title: ""} </h1>
            <div> 
                <button className='button'>play</button>
                <button className='button'>my List</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""} </h1>
        </div>  
        <div className="fade_bottom">
            
        </div>
    </div>
  )
}

export default Banner