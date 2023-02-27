import React from 'react'
import "./Banner.css"
function Banner() {
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