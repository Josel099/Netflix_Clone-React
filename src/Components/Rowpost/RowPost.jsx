import React,{useEffect,useState} from 'react'
import "./RowPost.css"
import youtube  from "react-youtube"
import axios from "../constants/axios"
import { imageUrl,API_KEY } from '../constants/constant' 
import YouTube from 'react-youtube'
function RowPost(props) {
  const [urlId,setUrlId] = useState('');
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
          autoplay: 1,
        },
      };
      
const handleMovie  = (id)=>{
axios.get(' link from the imdb youtube').then(response=>{
if(response.data.results.length != 0){
  setUrlId(response.data.results[0])
}
else{
  console.log("Array empty")
}
})
}

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
  {movies.map((obj) => {
    return <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? "smallPoster" : "poster"} alt="poster" src={`${imageUrl.obj.backdrop_path}`}></img>;
  })}
</div>

     {urlId && <YouTube opts={opts} videoId={urlId.key}/> }
    </div>
  )
}

export default RowPost
