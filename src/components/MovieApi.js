import { useEffect } from "react"
import React from "react"
import { useState } from "react"
import axios from "axios"
import bootstrap from "bootstrap"
import bloodSisters from '../image/flip.jpg';
import flash from '../image/flip1.jpg';
import strangeT from '../image/flip2.jpg';
import netFlixLogo from '../image/flip3.jpg';
import searchIcon from '../image/flip4.jpg';
import avatarIcon from '../image/flip5.jpg';
import bellIcon from '../image/flip6.jpg';
import beauty from '../image/flip7.jpg';
import info from '../image/flip8.jpg';
import play from '../image/flip9.jpg';
import volume from '../image/flip.jpg';
import gif from "../image/flip.jpg"



function MovieApi() {
    const [allUsers, setallUsers] = useState([])
    const url =" https://imdb-api.com/en/API/Top250Movies/k_151nv41x"
    const url2 = "https://api.themoviedb.org/3/discover/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb"
    
    const [isLoading, setisLoading] = useState(true)
    
    

    useEffect(()=>{
        showVidoes()
    },[])

    const showVidoes = ()=>{
        axios.get(url2).then((res)=>{
            console.log(res.data.results);
            if(res.status==200){
                console.log(res.data.results)
                setallUsers(res.data.results)
                setisLoading(false)
            }else{
                console.log("err")
            }
        }).catch((err)=>{
            console.log(`An Error Occured`);
        })
    } 

  return (

    <>
       
        <div className="" style={{backgroundColor:"black"}}>
           
            <div id="carouselExampleDark container-fluid" className="carousel carousel-light slide" data-bs-ride="carousel">
                
              
                <div class="carousel-inner container-fluid">
                    <nav className="navbar navbar-expand-lg fixed-bottom navbar-light bg-dark">
                    <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={netFlixLogo} height={"50px"}/></a>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active text-light border-bottom border-5 border-danger" aria-current="page" href="#" style={{fontWeight:"700",}} onClick={()=>showVidoes()}>Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-light" href="#">TV Shows</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Movies
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Action & Adventures</a></li>
                            <li><a className="dropdown-item" href="#">Romance International Channels</a></li>
                            <li><a className="dropdown-item" href="#">Blockbusters</a></li>
                            <li><a className="dropdown-item" href="#">Anime</a></li>
                            <li><a className="dropdown-item" href="#"></a></li>
                        </ul>
                        </li>
                        <li clasNames="nav-item">
                        <a className="nav-link  text-light" href="#" tabindex="-1" aria-disabled="true">New & Poppular</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-light" href="#">My List</a>
                        </li>

                      
                        
                    </ul>
                    
                    <div className="float-right d-flex">
                        <li className="nav-item">
                        <a className="nav-link text-light" href="#"><span><img src={searchIcon} height={"20px"}/></span></a>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link text-light" href="#"><span><img src={bellIcon} height={"20px"}/></span></a>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link text-light" href="#"><span><img src={avatarIcon} height={"20px"}/></span></a>
                        </li>
                    </div>
                       
                        
                        
                    
                    </div>
                    </div>
                    </nav>

                   

                    <div className="carousel-item active " data-bs-interval="5500">
                        <img src={bloodSisters} className="d-block " alt="..." height={"100%"} style={{width:"100%"}}/>
                        <div class="carousel-caption d-none d-md-block">
                        <div className="row col-lg-12" style={{marginTop:"-0px"}}>
                            
                            <div className="container-fluid col-lg-9 float-left p-2" style={{marginLeft:"-350px"}}>
                                <span className="btn btn-light m-1"><img src={play} height={"20px"}/> <span className="text-dark">Play</span></span>
                                <span className=" btn btn-secondary" style={{backgroundColor:"black",opacity:"0.5"}}><img src={info} height={"20px"}/> <span>More info</span> </span>
                            </div>
                            <div className=" container-fluid col-lg-3 float-left" style={{transform:"translateX(300px)"}}>
                                <span>
                                <span className="btn btn-outline-light rounded-circle m-1 "><img src={volume} height={"20px"}/></span> 
                                <span className="btn  border-5 border-start " style={{opacity:"0.5",width:"100px",backgroundColor:"black"}}><b className="text-light">16+</b></span>
                                </span>
                                
                            </div>
                           
                        </div>

                        <h3>-Blood Sisters-</h3>
                            <hr/>
                        <p className="my-5">Blood Sisters primarily tells the story of two best friends, Sarah and Kemi, who become fugitives after murdering a man.
                         They find themselves running away from the law and the ruthless family of their victim..</p>
                    
                    </div>
                     </div>

                    <div className="carousel-item" data-bs-interval="5500">
                    <img src={flash} className="d-block" alt="..." height={"100%"} style={{width:"100%"}}/>
                    <div class="carousel-caption d-none d-md-block">

                        <div className="row col-lg-12" style={{marginTop:"-250px"}}>
                            
                            <div className="container-fluid col-lg-9 float-left " style={{marginLeft:"-350px"}}>
                            
                                <span className="m-1 btn btn-light"><img src={play} height={"20px"}/> <span className="text-dark">Play</span></span>
                                <span className=" btn btn-secondary" style={{backgroundColor:"black",opacity:"0.5"}}><img src={info} height={"20px"}/> <span>More info</span> </span>
                            </div>
                            <div className=" container-fluid col-lg-3 float-left" style={{transform:"translateX(300px)"}}>
                                <span><span className="btn btn-outline-light rounded-circle "><img src={volume} height={"20px"}/></span> <span className="btn  border-5 border-start" style={{backgroundColor:"black",opacity:"0.5",width:"100px"}}><b className="text-light">16+</b></span></span>
                                
                            </div>
                        </div>
                            <h3>-The Flash-</h3>
                            <hr/>
                        <p className="my-5">After a particle accelerator causes a freak storm, 
                        CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, 
                        granting him the ability to move through Central City like an unseen guardian angel.</p>
                       
                    </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="5500">
                    <img src={beauty} className="d-block" alt="..." height={"100%"} style={{width:"100%"}}/>
                    <div class="carousel-caption d-none d-md-block">
                    <div className="row col-lg-12" style={{marginTop:"-250px"}}>
                            
                        <div className="container-fluid col-lg-9 float-left " style={{marginLeft:"-350px"}}>
                                <span className="m-1 btn btn-light"><img src={play} height={"20px"}/> <span className="text-dark">Play</span></span>
                                <span className=" btn btn-secondary" style={{backgroundColor:"black",opacity:"0.5"}}><img src={info} height={"20px"}/> <span>More info</span> </span>
                            </div>
                            <div className=" container-fluid col-lg-3 float-left" style={{transform:"translateX(300px)"}}>
                                <span><span className="btn btn-outline-light rounded-circle "><img src={volume} height={"20px"}/></span> <span className="btn text-light border-5 border-start" style={{backgroundColor:"black",opacity:"0.5",width:"100px"}}><b>16+</b></span></span>
                                
                            </div>
                        </div>
                        <h3>-Beauty & The Beast-</h3>
                        <hr/>

                       <p className="my-5">Having lived a life in selfishness,
                        young Prince Adam is cursed by a mysterious enchantress to having the appearance of a monstrous beast.
                        His only hope is to learn to love a young woman and earn her love in return in order to redeem himself.</p>
                    </div>
                    </div>

                    <div className="carousel-item container-fliud trial" data-bs-interval="5500">
                    <img src={strangeT} className="d-block" alt="..." height={"100%"} style={{width:"100%"}}/>
                    <div class="carousel-caption d-none d-md-block">
                        <div className="row col-lg-12" style={{marginTop:"-250px"}}>
                            
                            <div className="container-fluid col-lg-9 float-left " style={{marginLeft:"-350px"}}>
                                <span className="m-1 btn btn-light"><img src={play} height={"20px"}/> <span className="text-dark">Play</span></span>
                                <span className=" btn btn-secondary" style={{backgroundColor:"black",opacity:"0.5"}}><img src={info} height={"20px"}/> <span>More info</span> </span>
                            </div>
                            <div className=" container-fluid col-lg-3 float-left" style={{transform:"translateX(300px)"}}>
                                <span><span className="btn btn-outline-light rounded-circle "><img src={volume} height={"20px"}/></span> <span className="btn text-light border-5 border-start" style={{backgroundColor:"black",opacity:"0.5",width:"100px"}}><b>16+</b></span></span>
                                
                            </div>
                        </div>
                            <h3>-Strange Things-</h3>
                            <hr/>

                            <p className="my-5">When Joyce's 12-year-old son Will goes missing, she launches a terrifying 
                                investigation into his disappearance with local authorities. As they search for answers,
                                they unravel a series of extraordinary mysteries involving secret government experiments,
                                unnerving supernatural forces and a very unusual little girl.
                            </p>
                    </div>
                    </div>
                </div>
                    
               <div className="container-fluid m-0">
                   
                    <div className="row m-0">
                        <h6 className="text-light m-2 p-3"> * Action & Adventures *</h6>

                        {isLoading?<p className="text-align-center"><img src={gif} height={"200px"}  style={{width:"fit-content"}}/></p>: 
                        
                             allUsers.map((user)=>(
                            <div className=" show" style={{width:"12rem"}}>
                                <p className="text-light" style={{fontSize:"10px"}}>{user.title}</p>
                                <img src={`https://image.tmdb.org/t/p/original/`+user.backdrop_path} class="card-img-top" alt="..."/>
                            </div>
                        ))
                        
                        }
                        
                       

                        
                       
                    </div>

                   
                    
                </div>     

                
               
            </div>


            
        </div>  

    </>
          

        
                

  )
}

export default MovieApi