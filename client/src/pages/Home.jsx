import React from 'react'
import ax from "axios"
import { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom"


function Home() {
    const [listOfPosts, setListOfPosts] = useState([])
    let navigate = useNavigate();
    useEffect(() => {
        ax.get("http://localhost:3001/posts").then((res) => {
            console.log(res.data)
            setListOfPosts(res.data)

        })
    }, [])
    return (

        <div>
            {listOfPosts.map((post, index) => {
                return (
                    <div key={index} className='post' onClick={()=>{navigate(`/post/${post.id}`)}} >
                        <div className='title'>{post.title}</div>
                        <div className='body'>{post.posttext}</div>
                        <div className='footer'>{post.username}</div>
                    </div>
                );
            })}
        </div>
    )
}

export default Home