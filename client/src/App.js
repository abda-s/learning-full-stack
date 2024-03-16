import './App.css';
import ax from "axios"
import { useEffect } from 'react';


function App() {
  useEffect(()=>{
    ax.get("http://localhost:3001/posts").then((res)=>{
      console.log(res)
    })
  },[])

  return (
    <div className="App">
      hello there
    </div>
  );
}

export default App;
