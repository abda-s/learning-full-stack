import './App.css';
import ax from "axios"
import { useEffect, useState } from 'react';


function App() {
  const [listOfPosts, setListOfPosts] = useState([])

  useEffect(() => {
    ax.get("http://localhost:3001/posts").then((res) => {
      console.log(res.data)
      setListOfPosts(res.data)

    })
  }, [])

  return (
    <div className="App">
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
  );

}

export default App;
