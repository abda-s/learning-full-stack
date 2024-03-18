import './App.css';

import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Home from "./pages/Home"
import CreatePost from './pages/CreatePost';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <div className="navbar">
          <Link to="/"> Home Page</Link>
          <Link to="/createpost"> Create A Post</Link>
        </div>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/createpost" exact Component={CreatePost} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
