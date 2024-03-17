import './App.css';

import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Home from "./pages/Home"
import CreatePost from './pages/CreatePost';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/createpost">create a post</Link>
        <Link to="/">home page</Link>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/createpost" exact Component={CreatePost} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
