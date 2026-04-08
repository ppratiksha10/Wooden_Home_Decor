import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const [user, setUser] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    /*handleSubmit Function */
    const loginUser = async (e) =>{
        e.preventDefault();
        console.log(user,password);

        /* Sending data to backend */
        const userData ={
            user,
            password
        };

        /*Api call */
        const response = await fetch("https://dev.basiq360.com/amulyamica/api/index.php/login/submitnew",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                //Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(userData),
        });
        const data = await response.json();
        localStorage.setItem("token", data.token);
            navigate("/dashboard");
        console.log("Login successful, token saved:", data.token);
    };
    return(
        <>
            <h1>Login</h1>
            <form onSubmit={loginUser}>
                <input type="text" value={user} placeholder="Enter the username" onChange={(e) => setUser(e.target.value)} />
                <br /><br />
                <input type="password" value={password} placeholder="Enter the password" onChange={(e) => setPassword(e.target.value)} />
                <br /><br />
                <button type="submit">Login</button>
            </form>
        </>
    )
}
export default Login;