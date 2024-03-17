import React from 'react'
import ax from "axios"
import { useEffect, useState } from 'react';

function Home() {
    const [listOfPosts, setListOfPosts] = useState([])

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
                    <div key={index} className='post'>
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