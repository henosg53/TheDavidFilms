import axios from "axios"
import React, { useState } from "react"
import  {Formik, Form } from 'formik'
import Footer from "./Footer"
import { Link } from "react-router-dom"
function RegisterationPage(){
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    const [fullname,setFullname] = useState('')

    const register = ()=>{
        axios.post('http://localhost:3001/register',
            {
                fullname: fullname,
                email: email,
                username: username,
                password: password
            }).then((res)=>{
                console.log(res.data)
                if(res.data)
                    window.location.replace("http://localhost:3000/login")  
            })
    }
    return(
        
            
            <div className="h-screen w-full flex-col dark:bg-black dark:text-white">
            <div className="flex-1 flex flex-col gap-4 my-10" >
            <div className=" flex-1 card-sty2  flex-col sm:min-w-[500px] bg-black dark:bg-black dark:text-white">
                <h2 className="text-center">Sign Up</h2>
                <Formik onSubmit={register}>
                    <Form className="text-center p-4 my-4 items-center" >
                        
                        <input type="text" placeholder="Full Name" onChange={(e)=>{setFullname(e.target.value)}}></input>
                        <br/><br/>
                        
                        <input type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}></input>
                        <br/><br/>
                        
                        <input type="text" placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}}></input>
                        <br/><br/>
                       
                        <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}></input>
                        <br/><br/>
                        <button className="rounded-r bg-slate-500 p-2 text-white" type="submit" >Register</button>
                        <Link to="/register"><p>Sign In</p></Link>
                    </Form>  
                </Formik>  
                </div>
                </div>
                <Footer/>
            </div>
        
    )
}

export default RegisterationPage