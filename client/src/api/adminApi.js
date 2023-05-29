export const addCategory=(category_name)=>{
    let category={category_name}
    return fetch(`http://localhost:5000/category/addcategory`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(category)
    })
    .then(res=>{return res.json()})
    .catch(err=>{console.log(err)})
}

export const getcategory=()=>{
    return fetch(`http://localhost:5000/category/getcategory`)
    .then(res=>{return res.json()})
    .catch(err=>{console.log(err)})
}

export const getcategorydetail=(id)=>{
    return fetch(`http://localhost:5000/category/getcategorydetatil`)
}