import React from 'react'
import { useEffect } from 'react'
import { API_KEY } from '../constants/constant'
import axios from '../constants/axios'
import "./Banner.css"
function Banner() {
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      
    })
  }, [])
  
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'> movie Name </h1>
            <div>
                <button className='button'>play</button>
                <button className='button'>myList</button>
            </div>
            <h1 className='description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi dolores itaque quam quas atque ipsum, doloremque debitis neque repellendus, voluptatibus veritatis molestias quae. Veritatis voluptate consequatur odit placeat corporis.</h1>
        </div>
        <div className="fade_bottom">
            
        </div>
    </div>
  )
}

export default Banner