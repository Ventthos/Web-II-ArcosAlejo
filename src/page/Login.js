import '../style/login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(){
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleUserChange = (e) =>{
        setUser(e.target.value)
    }

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const data = {
            username: user,
            password: password,
            expiresInMins: 60
        }
        console.log(data)
        fetchLogin(data, navigate)
    }

    return (
        <div className="loginBackground">
            <div className='degradado'>
                <div className='containerLoginBorder'>
                    <div className="containerLogin">
                        
                        <h3>Register</h3>
                        <form className="formLogin" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="user">Name</label>
                                <input className='login-input' type="text" placeholder='Enter your name' name='user' onChange={handleUserChange} />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input className='login-input' type="password" placeholder='Password' name='password' onChange={handlePasswordChange} />
                            </div>                  
                            <div className='login-button-container'>
                                <button className='login-button' type='submit'>
                                    Continue
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                
            </div>
            <div className='pageSelector'>
                <p>Step 1 of 3</p>
                <div className='pageIndicators'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            
        </div>
    )
}

function fetchLogin(data, navigate){
    fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
       
    })
    .then(response => response.json())
    .then(data => {
        const hasNoToken = data?.accessToken === undefined
        if(hasNoToken){
            alert("Usuario o contraseña incorrectos")
            return
        }
        alert("Bienvenido " + data.username)

        localStorage.setItem("token", data.accessToken)
        navigate("/products")

        console.log(localStorage.getItem("token"))
    })
    .catch(error => {
        console.error(error)
    })

}