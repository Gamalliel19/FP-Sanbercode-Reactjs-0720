import React, {useState, useEffect} from "react"
import axios from "axios"
// import Style from './style.css'
const MoviesPage=()=>{
    const [movie,setMovie]=useState(null)
    useEffect(()=>{
        if(movie===null){
            axios.get(`https://backendexample.sanbersy.com/api/movies`)
            .then((res)=>{
                setMovie(
                    res.data.map((item)=>{
                        return{
                            id:item.id,
                            title:item.title,
                            genre:item.genre,
                            year:item.year,
                            description:item.description,
                            rating:item.rating,
                            review:item.review,
                            image_url:item.image_url
                        }
                    })
                )
            })
        }
    })
    return(
        <><div> 
        <section>
            <h1>Daftar Film</h1>
            <div id="article-list">
            { movie!==null&&movie.map((movie) => {
                return(
                <div key={movie.id}>
                    <div className="card">
                        <img src={movie.image_url} alt="film"></img>
                        <div className="review">
                            <a href><h3>{movie.title}</h3></a>
                            <h4>Rating : {movie.rating}<br/>
                                Year : {movie.year}<br/>
                                Genre : {movie.genre}
                            </h4>
                            <p>
                                <b>Deskripsi :</b> {movie.description}
                            </p><br/>
                            <p>
                                <b>Review :</b> {movie.review}
                            </p>
                        </div>
                    </div>
                </div>
                )})
            }
            </div>
            </section>
            </div>
        </>
    )
}
export default MoviesPage;