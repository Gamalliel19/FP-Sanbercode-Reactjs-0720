import axios from "axios"
import React, {useState, useEffect} from "react"
import {Button} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import StyledTableCell from '@material-ui/core/TableCell'
import StyledTableRow from '@material-ui/core/TableRow';

// import Style from './style.css'
const TablePage=()=>{
    const [movie,setMovie]=useState(null)
    const [game,setGame]=useState(null)
    const [edited,setEdited]=useState(null)
    const [searchMovie,setSearchMovie]=useState(null)
    const [searchGame,setSearchGame]=useState(null)
    const [find,setFind]=useState(null)
    const [findG,setFindG]=useState(null)
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
        if(game===null){
            axios.get(`https://backendexample.sanbersy.com/api/games`)
            .then((res)=>{
                setGame(
                    res.data.map((item)=>{
                        return{
                            id:item.id,
                            name:item.name,
                            genre:item.genre,
                            singlePlayer:item.singlePlayer,
                            multiplayer:item.multiplayer,
                            platform:item.platform,
                            release:item.release
                        }
                    })
                )
            })
        }
        if(edited!==null){
            if(edited==='mtitle'){
                movie.sort(function(a, b){ if (a.title < b.title) return -1;
                    if (a.title > b.title) return 1; return 0;
                })
            }
            if(edited==='mdescription'){
                movie.sort(function(a, b){ if (a.description < b.description) return -1;
                    if (a.description > b.description) return 1; return 0;
                })
            }
            if(edited==='mgenre'){
                movie.sort(function(a, b){if (a.genre < b.genre) return -1;
                    if (a.genre > b.genre) return 1; return 0;
                })
            }
            if(edited==='mreview'){
                movie.sort(function(a, b){ if (a.review < b.review) return -1;
                    if (a.review > b.review) return 1; return 0;
                })
            }
            if(edited==='mrating'){
                movie.sort(function(a, b){return a.rating-b.rating})
            }
            if(edited==='myear'){
                movie.sort(function(a, b){return a.year-b.year})
            }
            if(edited==='gname'){
                game.sort(function(a, b){ if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1; return 0;
                })
            }
            if(edited==='ggenre'){
                game.sort(function(a, b){if (a.genre < b.genre) return -1;
                    if (a.genre > b.genre) return 1; return 0;
                })
            }
            if(edited==='gplatform'){
                game.sort(function(a, b){if (a.platform < b.platform) return -1;
                    if (a.platform > b.platform) return 1; return 0;
                })
            }
            if(edited==='gsingle'){
                game.sort(function(a, b){return a.singlePlayer-b.singlePlayer})
            }
            if(edited==='gmulti'){
                game.sort(function(a, b){return a.multiplayer-b.multiplayer})
            }
            if(edited==='grelease'){
                game.sort(function(a, b){return a.release-b.release})
            }
            setEdited(null)
        }
    })
    const handleSort=(event)=>{
        let temp=event.target.value;
        setEdited(temp)
    }
    const handleChange1=(event)=>{
        setSearchMovie(event.target.value);
    }
    const handleSearch1=(event)=>{
        event.preventDefault()
        let data=movie.find(el=>el.title===searchMovie)
        setFind({title:data.title,
            description:data.description,
            year:data.year,
            genre:data.genre,
            rating:data.rating,
            review:data.review
        })
        setSearchMovie("")
    }
    const handleChange2=(event)=>{
        setSearchGame(event.target.value);
    }
    const handleSearch2=(event)=>{
        event.preventDefault()
        let data=game.find(el=>el.name===searchGame)
        if(data!==null){
        setFindG({name:data.name,
            singlePlayer:data.singlePlayer,
            release:data.release,
            genre:data.genre,
            multiplayer:data.multiplayer,
            platform:data.platform
        })}
        setSearchGame("")
    }
    return(
        <>
        <section>
            <div className="dashboard">
            <div style={{padding:"100px"}}>
                <div style={{backgroundColor:"#ffffff"}}>
         
        <h1>Movies</h1>
        <Table>
            <TableHead>
                <TableRow>
                    <StyledTableCell align="left">Title</StyledTableCell>
                    <StyledTableCell align="left">Description</StyledTableCell>
                    <StyledTableCell align="left">Year</StyledTableCell>
                    <StyledTableCell align="left">Genre</StyledTableCell>
                    <StyledTableCell align="left">Rating</StyledTableCell>
                    <StyledTableCell align="left">Review</StyledTableCell>
                </TableRow>
            </TableHead>
            
            
            <tr>
                <td><Button variant="contained" color="primary" onClick={handleSort} value={"mtitle"}>sort</Button></td>
                <td><Button variant="contained" color="primary" onClick={handleSort} value={"mdescription"}>sort</Button></td>
                <td><Button variant="contained" color="primary" onClick={handleSort} value={"myear"}>sort</Button></td>
                <td><Button variant="contained" color="primary" onClick={handleSort} value={"mgenre"}>sort</Button></td>
                <td><Button variant="contained" color="primary" onClick={handleSort} value={"mrating"}>sort</Button></td>
                <td><Button variant="contained" color="primary" onClick={handleSort} value={"mreview"}>sort</Button></td>
            </tr>
        {
            movie!==null&&movie.map((el)=>{

                
                return(
                    <>
                    <TableBody>
                        <StyledTableRow key={el.title}>
                            <StyledTableCell component="th" scope="el">
                                {el.title}
                            </StyledTableCell>
                            <StyledTableCell align="left">{el.description}</StyledTableCell>
                            <StyledTableCell align="left">{el.year}</StyledTableCell>
                            <StyledTableCell align="left">{el.genre}</StyledTableCell>
                            <StyledTableCell align="left">{el.rating}</StyledTableCell>
                            <StyledTableCell align="left">{el.review}</StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                    </>
                )
            })
        }
        </Table>
        {/* <form onSubmit={handleSearch1}><br/>
            <label>Title Movie : </label>
            <input type="text" value={searchMovie} onChange={handleChange1}/>
            <button>Search</button>
        </form>
        {searchMovie!==null&&find!==null &&
            <p>
                Title: {find.title}<br/>
                Description : {find.description}<br/>
                Year : {find.year}<br/>
                Genre : {find.genre}<br/>
                Rating : {find.rating}<br/>
                Review : {find.review}<br/>
            </p>
        } */}
        </div></div>
        <div style={{padding:"100px"}}>
        <div style={{backgroundColor:"#ffffff"}}>
        <h1>Games</h1>
        <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="left">Name</StyledTableCell>
                        <StyledTableCell align="left">Genre</StyledTableCell>
                        <StyledTableCell align="left">Single Player</StyledTableCell>
                        <StyledTableCell align="left">Multi Players</StyledTableCell>
                        <StyledTableCell align="left">Platform</StyledTableCell>
                        <StyledTableCell align="left">Release</StyledTableCell>
                    </TableRow>
                </TableHead>
            <tr>
                <td><Button variant="contained" color="primary" onClick={handleSort} value={"gname"}>sort</Button></td>
                <td><Button variant="contained" color="primary" onClick={handleSort} value={"ggenre"}>sort</Button></td>
                <td><Button variant="contained" color="primary" onClick={handleSort} value={"gsingle"}>sort</Button></td>
                <td><Button variant="contained" color="primary" onClick={handleSort} value={"gmulti"}>sort</Button></td>
                <td><Button variant="contained" color="primary"onClick={handleSort} value={"gplatform"}>sort</Button></td>
                <td><Button variant="contained" color="primary" onClick={handleSort} value={"grelease"}>sort</Button></td>
            </tr>
        {
            game!==null&&game.map((el)=>{
                return(
                    <>
                    <StyledTableRow key={el.name}>
                        <StyledTableCell component="th" scope="el">
                            {el.name}
                        </StyledTableCell>
                        <StyledTableCell align="left">{el.genre}</StyledTableCell>
                        <StyledTableCell align="left">{el.singlePlayer}</StyledTableCell>
                        <StyledTableCell align="left">{el.multiplayer}</StyledTableCell>
                        <StyledTableCell align="left">{el.platform}</StyledTableCell>
                        <StyledTableCell align="left">{el.release}</StyledTableCell>
                    </StyledTableRow>
                    </>
                    
                )
            })
        }
        </Table>
        {/* <form onSubmit={handleSearch2}><br/>
            <label>Name Game : </label>
            <input type="text" value={searchGame} onChange={handleChange2}/>
            <button>Search</button>
        </form>
        {searchGame!==null&&findG!==null &&
            <p>
                Name: {findG.name}<br/>
                Genre : {findG.genre}<br/>
                Singleplayer : {findG.singlePlayer}<br/>
                Multiplayer : {findG.multiplayer}<br/>
                Platform : {findG.platform}<br/>
                Release : {findG.release}<br/>
            </p>
        } */}
        </div></div>
        </div>
        </section>
        </>
    )
}
export default TablePage;