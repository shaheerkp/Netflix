import axios from '../../axios'
import React,{useState,useEffect} from 'react'
import { ApiKey,imageUrl } from '../../constants/constants'
import "./Rowpost.css"
import YouTube from 'react-youtube'






function Rowpost({title,url,isSmall}) {
    const[movies,setMovie]=useState([]) 
    const[urlId,setUrlId]=useState('') 

    useEffect(() => {
        axios.get(url).then(response=>{
            console.log(response.data );
            setMovie(response.data.results)
            
        }).catch(err=>{
            //  
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

      const clickHandler=(id)=>{
          axios.get( `movie/${id}/videos?api_key=${ApiKey}&language=en-US`).then(response=>{
              if(response.data.results.length!==0){
                setUrlId(response.data.results[0].key); 
                console.log(response.data.results[0]); 

              }else{
                  alert("no video available")
              }
              
          })
          

      }
    
    return (
        <div className='row'>
        <h2>{title}</h2>
        <div className='posters'>
            {movies.map((movie)=>
                <img onClick={()=>clickHandler(movie.id)} className={isSmall?"small_poster":"poster"} alt='poster' src={`${imageUrl+movie.backdrop_path}`} />

            )}
        </div>
        
 { urlId &&  <YouTube opts={opts} videoId={urlId} />}  

    </div>
    )
}

export default Rowpost
