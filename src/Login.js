import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Service from './Service'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const[userId,setUserId]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate()

    const[error,setError]=useState(false)

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(userId.length===0 || password.length===0){
            setError(true)
        }
        if(userId && password){
            console.log("this is our data "+ userId +"   "+ password )
        const data = {
            "userId": userId,
            "password": password
        }
        Service.loginuser(data).then((response)=>{
            console.log("this is the response " + response.data)
            if(!response.data){
                alert("Invalid User Id or password");
            }else{
                alert("Login Successfull");
                navigate('/Sample')

            }
        }).catch(error=>{
            console.log(error)
        })


        }
        else{
            alert("Please Fill the fields...")
        }
        
    }


     return (
       <><br></br>
       <h1 className='text-center'style={{color:"olive"}}><b>This is Login Page</b></h1>
       <br></br>
      <div className='signup_container w-100 d-flex justify-content-center'>
        <div  style={{background:"lightblue"}} className='signup_form mt-5 w-50'>
            <div className='form mt-3'>

              <form onSubmit={handleSubmit}className='border p-3'>
              <label style={{color:"brown"}}>Email ID:</label>
              <input type="email"
              placeholder="Enter your user id" 
              className='form-control'
              value={userId} 
              onChange={(e)=>setUserId(e.target.value)}/>
              {error&& userId.length<=0?
              <label style={{color:"red"}}>Email should not be Empty!</label>:""}
              <br></br>

              <label style={{color:"brown"}}>Password:</label>
              <input type="password" 
              placeholder="Enter your password" 
              className='form-control'
              value={password} 
              onChange={(e)=>setPassword(e.target.value)}/>
              {error && password.length<=0?
              <label style={{color:"red"}}>password should not be empty!</label>:""}
              <br></br>
               <br></br>
              <label>Don't have an account?</label>
              <Link to={'/register'}> New Register</Link>
              <button type="submit"style={{marginLeft:"620px"}}className='btn btn-success'>Login</button>
           
             </form>

            </div>
        </div>
        

      </div></>
  )
}

export default Login