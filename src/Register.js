import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Service from './Service'
const Register = () => {
    const[register,setRegister]=useState({
        name:"",
        email:"",
        password:"",
    })
    const[error,setError]=useState(false)

    const handleChange = (e) => {
      setRegister({
          ...register,
          [e.target.name]:e.target.value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault(); 
        if(register.name.length===0 || register.email.length===0 || register.password.length===0){
          setError(true)
        }
        if(register.name && register.email && register.password){
          console.log(register)

          Service.registeruser(register).then((response)=>{
              console.log(response.data)
              alert("User added successfully..")
          }).catch(error=>{
              console.log(error)
          })

        }
        else{
          alert("Please Enter the Fields...")
        }
    }
  return (
    
    <div className='signup_container w-100  d-flex justify-content-center'>
      <div style={{background:"pink"}}className='signup_form mt-5 w-5'>
        <form onSubmit={handleSubmit}className='border p-5'>
        <h2 className='text-center'style={{color:"blue"}}>Register</h2>

        <label>Name:</label>
        <br></br>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className='form-control'
          value={register.name}
          onChange={handleChange}
        />
        {error&&register.name.length<=0?
        <label style={{color:"red"}}>Name should not be empty</label>:""}
        
        <br></br>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className='form-control'
          value={register.email}
          onChange={handleChange}
        />
        {error&&register.email.length<=0?
        <label style={{color:"red"}}>Email should not be empty</label>:""}

       <br></br>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className='form-control'
          value={register.password}
          onChange={handleChange}
        />
        {error&&register.password.length<=0?
        <label style={{color:"red"}}>Password should not be Empty</label>:""}
        <br></br>
         <button className='btn btn-primary mb-3'style={{marginTop:"20px"}}>Register</button>
         <Link to="/login"style={{marginLeft:"90px"}}>login</Link>
       </form>
      </div>
    </div>
  )
}

export default Register