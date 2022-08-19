// import React, {useEffect,useState} from 'react'
// import axios from "axios"
// import gif from "../assest/loader-orange.gif"

// function TestEffect() {
//     const [allUsers, setallUsers] = useState([])
//     const url = "https://jsonplaceholder.typicode.com/users"

//     const url2 = "https://api.github.com/users"
//     const url3 = "https://imdb-api.com/en/API/Trailer/k_12345678/tt1375666"
//     const [isLoading, setisLoading] = useState(true)

//     useEffect(()=>{
//         makeRequest()
//     },[])

//     const makeRequest = ()=>{
//         axios.get(url3).then((res)=>{
//             if(res.status==200){
//                 console.log(res.data)
//                 setallUsers(res.data)
//                 setisLoading(false)
//             }else{
//                 console.log(`an error occured`)
//             }
            
//         }).catch((err)=>{
//             console.log(`Guys there's an error`);
//         })
//     }

//   return (
    
//     <>
//         <div className='container '>
//             <div>TestEffect</div>
//             <button className='' onClick = {makeRequest}>Make Request</button>

//             {isLoading ?<img src={gif} height={"50px"}  style={{marginTop:"200px",}}/>:
            
//             allUsers.map((user, index)=>(
//             <div >
//                 <div> {user.videoId}</div>
//                 <div>
//                     {/* <img src={user.avatar_url} height={"200px"} style={{width:"200px"}}/> */}
//                 </div>
                
//             </div>
            
//             ))
            
//             }
//         </div>
        
//     </>
//   )
// }

// export default TestEffect