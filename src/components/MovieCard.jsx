import "../css/MovieCard.css";
import { MovieProvider, useMovieContext } from "../contexts/MovieContext";
import { useMatch } from "react-router-dom";

function MovieCard({movie}){

    const {favourites,addToFavourites,removefromFavourites, isFavourite}  =useMovieContext();
    const favourite = isFavourite(movie.id);

    function onfavclick(e){
      // alert("clicked");
      e.preventDefault();
      if(favourite) removefromFavourites(movie.id);
      else
         addToFavourites(movie);
      

    }

   return <div  className="movie-card">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  alt ={movie.title}></img>
           <div className="movie-overlay" >

              <button className={`favourite-btn  ${favourite? "active": ""}`} onClick={onfavclick}> 
                 ♥
                
              </button>
           </div>
      </div>  
       <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
         
       </div>
   </div>

}

export default MovieCard