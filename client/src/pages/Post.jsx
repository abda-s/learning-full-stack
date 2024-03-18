import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import ax from 'axios';

function Post() {

    let { id } = useParams();

    const [postObject, setPostObject] = useState({})

    useEffect(() => {
        ax.get(`http://localhost:3001/posts/byId/${id}`).then((res) => {
            console.log()
            setPostObject(res.data)
        })
    }, [])



    return (
        <div className="postPage">
            <div className="leftSide">
                <div className="post" id="individual">
                    <div className="title"> {postObject.title} </div>
                    <div className="body">{postObject.posttext}</div>
                    <div className="footer">{postObject.username}</div>
                </div>
            </div>
            <div className="rightSide">Comment Section</div>
        </div>
    )
}

export default Post