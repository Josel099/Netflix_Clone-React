import React,{useEffect,useState} from 'react'
import "./RowPost.css"
import axios from "../constants/axios"
import { API_KEY,imageUrl } from '../constants/constant' 
function RowPost() {
  const [movies,setMovies] = useState([])
      useEffect(() => {
        axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then(response =>{
          setMovies(response.data.results)
        })
      
       
      }, [])
      

  return (
    <div className='row'>
        <h2>Netflix orginals</h2>
        <div className='posters'>

          {movies.map((obj)=>{
           <img className="poster" alt="poster" src={`${imageUrl.obj.backdrop_path}`}></img>
          })}
     
     
       </div>
    </div>
  )
}

export default RowPost
