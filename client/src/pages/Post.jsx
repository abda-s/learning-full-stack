import React, { useEffect } from 'react'
import {useParams} from "react-router-dom"
import ax from 'axios';

function Post() {

    let {id} = useParams();


    useEffect(() => {
        ax.get("http://localhost:3001/post").then((res) => {
            console.log(res.data)
        })
    }, [])



  return (
    <div>{id}</div>
  )
}

export default Post