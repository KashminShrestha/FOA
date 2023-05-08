import { API } from "../config"

export const userRegister=(username,email,password)=>{
    let user={username, password, email}
    return fetch(`${API}/users/register`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(res=>{return res.json()})
    .catch(error=>console.log(error))
}