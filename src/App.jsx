 
import "./css/App.css";
import MovieCard from './components/MovieCard';
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import { MovieProvider } from "./contexts/MovieContext";
import {Routes ,Route} from "react-router-dom";

import NavBar  from './components/NavBar';

function App() {

  return (
        <MovieProvider>
               <NavBar/>
               <main className='main-content'>
                  <Routes>
                      <Route path="/" element={<Home/>}/>
                    <Route path="/favourites" element={<Favourites />} />
                  </Routes>
              </main>
        </MovieProvider>
  );
}

export default App;


   {/*<Home/>*/}
      {/*  const movieNumber =1;
      {movieNumber===2 ? (
        < MovieCard movie ={{title: "jab we met " ,release_date : "2000 "}}/>
      ):(
        < MovieCard movie ={{title: "mahadev " ,release_date : "2013 "}}/>
      )}*/} 

     {/*or we can do it like this also
      
      
      < MovieCard movie ={{title: "jab we met " ,release_date : "2000 "}}/>
      < MovieCard movie ={{title: "mahadev " ,release_date : "2013 "}}/>*/}


//props is nothing but the properties that we pass to a function( say component ,coz component has function itself)
//in jsx we can comment using {/* */} <-- this syntax
// this is called conditional rendering in react.js the first showed one {movieNumber===2 ?}
// and you can do it like this also 
   //  This is called shortcircuiting in javascript : {movieNumber===1 && < MovieCard movie ={{title: "jab we met " ,release_date : "2000 "}}/>}
   //E:\React_tutorial\frontend\src\App.jsx    E:\React_tutorial\frontend\src\css\App.css