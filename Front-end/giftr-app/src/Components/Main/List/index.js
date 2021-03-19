import React, {useState, useEffect} from "react";

function List({id}){
    const[Name,setName]= useState();
    const [Image, setImage] = useState()
    const [Link, setLink] = useState()
    
    useEffect(() => {
        getList();
}, [id]);

async function getList(){
     
    let res = await fetch (`http://localhost:5000/gifts/${id}`);
    let data = await res.json();
    console.log(data);
    setName(data.name)
    setImage(data.image)
    setLink(data.link)
}
 

    return (
        <div >
            <ul>
           <li > {Name} </li>
           <li > {Image} </li> 
           <li > {Link} </li> 
            </ul>
        </div>
    )
}

export default List;