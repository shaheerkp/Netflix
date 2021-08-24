import React,{useEffect,useState}from 'react'
import "./Banner.css"
import {ApiKey,imageUrl} from '../../constants/constants'
import axios from '../../axios'


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


function Banner() {
    const [state,setState]=useState([])

   

    useEffect(() => {
        axios.get( `trending/all/week?api_key=${ApiKey}&language=en-US`).then((response)=>{
            console.log(response.data);
            setState(response.data.results[getRandomInt(21)])
           // console.log(response.data.results[getRandomInt(20)].title);
            
        })
        
    }, [])
    return (
        <div style={{backgroundImage: `url(${state.backdrop_path? imageUrl+state.backdrop_path:""})`}}
         className='banner'>
            <div className='content' >
                <h1 className='title'>{state.title ? state.title :"Movies"}  </h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{state.overview ? state.overview :" "}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
