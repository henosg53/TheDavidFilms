import React, { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import { Form, Formik } from "formik"
import Footer from "./Footer"

function LoginPage(){
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    // const [loginStatus,setStatus] = useState('')
    
    const login = ()=>{
        axios.post('http://localhost:3001/login',
            {
                username: username,
                password: password
            }).then((res)=>{
                console.log(res.data)
                if(res.data)
                    window.location.replace("http://localhost:3000/account")
            })
    }
    return(
        <div className="h-screen w-full flex-col dark:bg-black dark:text-white ">
            <div className="flex-1 flex flex-col gap-4 my-10" >
            <div className=" flex-1 card-sty2  flex-col sm:min-w-[500px] bg-black dark:bg-black dark:text-white">
                <h2 className="text-center">Login</h2>
                <Formik onSubmit={login}>                    
                
                <Form className="text-center p-4 my-4 items-center" >
                    
                    <input type="text" placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}}></input>
                    <br/><br/>
                   
                    <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}></input>
                    <br/><br/>
                    <button className="rounded-r bg-slate-500 p-2 text-white" type="submit">Login</button><br/>
                    <Link to="/register"><p>Create an account</p></Link>
                    
                </Form> 
                 
                </Formik>   
                </div>
            </div>
            <Footer/>
           
        </div>
    )
}

export default LoginPage