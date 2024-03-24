import React, { useEffect, useState, useContext } from 'react'
import { useParams } from "react-router-dom"
import ax from 'axios';
import { AuthContext } from "../helpers/AuthContext";

function Post() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const { authState } = useContext(AuthContext);

    let { id } = useParams();

    const [postObject, setPostObject] = useState({})

    useEffect(() => {
        ax.get(`http://localhost:3001/posts/byId/${id}`).then((res) => {
            setPostObject(res.data)
        });
        ax.get(`http://localhost:3001/comments/${id}`).then((response) => {
            setComments(response.data);
        });
    }, []);

    const addComment = () => {
        ax
            .post("http://localhost:3001/comments", {
                commentBody: newComment,
                postId: id,
            }, {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                },
            }
            )
            .then((response) => {
                if (response.data.error) {
                    alert("log in u muther fucker")
                } else {
                    const commentToAdd = { commentBody: newComment, username: response.data.username };
                    setComments([...comments, commentToAdd]);
                    setNewComment("");
                }

            });
    };

    const deleteComment = (id) => {
        console.log(id)
        ax.delete(`http://localhost:3001/comments/${id}`, { headers: { accessToken: localStorage.getItem("accessToken") } })
            .then(
                setComments(comments.filter((val) => {
                    return val.id != id
                })))
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="postPage">
            <div className="leftSide">
                <div className="post" id="individual">
                    <div className="title"> {postObject.title} </div>
                    <div className="body">{postObject.posttext}</div>
                    <div className="footer">{postObject.username}</div>
                </div>
            </div>
            <div className="rightSide">
                <div className="addCommentContainer">
                    <input
                        type="text"
                        placeholder="Comment..."
                        autoComplete="off"
                        value={newComment}
                        onChange={(event) => {
                            setNewComment(event.target.value);
                        }}
                    />
                    <button onClick={addComment}> Add Comment</button>
                </div>
                <div className="listOfComments">
                    {comments.map((comment, key) => {
                        return (
                            <div key={key} className="comment">
                                {comment.commentBody}
                                <label> User: {comment.username}</label>
                                {authState.username == comment.username && <button onClick={() => { deleteComment(comment.id); }} >X</button>}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Post