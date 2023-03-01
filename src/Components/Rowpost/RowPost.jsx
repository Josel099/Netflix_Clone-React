import React,{useEffect,useState} from 'react'
import "./RowPost.css"
import youtube  from "react-youtube"
import axios from "../constants/axios"
import { imageUrl } from '../constants/constant' 
import YouTube from 'react-youtube'
function RowPost(props) {
  const [movies,setMovies] = useState([])
      useEffect(() => {
        axios.get(props.url).then(response =>{
          setMovies(response.data.results)
        })
      
       
      }, [])
      const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
      

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>

          {movies.map((obj)=>{
           <img className={props.isSmall ? "smallPoster" : "poster" } alt="poster" src={`${imageUrl.obj.backdrop_path}`}></img>
          })}
       </div>
      <YouTube opts={opts} videoId="2g811Eo7K8U"/>
    </div>
  )
}

export default RowPost
