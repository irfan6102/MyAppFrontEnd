import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import PropTypes from 'prop-types'

const Todos = props => {
    const handleClick1=(e)=>{
        e.preventDefault();
        const user={
        password: password,
        username: username
        }
        console.log(user);
        fetch("http://localhost:8080/user/saveUser",{
            method:"POST",
            headers:{   "Accept": "application/json","Content-Type":"application/json"},
            body:JSON.stringify(user)
        }).then(()=>{
            console.log("New user added");
          })
    }
    const [alluser, setAlluser] = useState([])
    
    
     
      useEffect(() => {
        
        fetch("http://localhost:8080/user/getAll")
        .then(res=>res.json())
        .then((result)=>{
          
          setAlluser(result);
        
          
               
    })
  }
    ,[])
  

    
    

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  return (
    <>
    <div style={{width:"400px",marginLeft:"350px",marginTop:"100px"}}>
        <form>
  <div className="form-group">
 
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="username">username</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" value={username}
    onChange={(e)=>setUsername(e.target.value)} />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick1}>Submit</button>
  {/* <button type="submit" className="btn btn-primary" onClick={handleClick2}>GetAllUser</button> */}
</form>
    </div>
    <p>Username {username}</p>
    <p>Password {password} </p>
    <h1 className='text-center'>User List</h1>
    <div className='border' style={{width:"400px",marginLeft:"600px"}}>
      {alluser.map(alluser=>(
        <div className='border'>
       <p>Id: {alluser.id} </p>
      <p>  Password: {alluser.password} </p>
       <p> Username: {alluser.username} </p>
        </div>

      ))
         
         
      }
      </div>
    </>
  )
}

Todos.propTypes = {}

export default Todos