import logo from './logo.svg';
import './App.css';
import Menubar from './components/Menubar';
import { Route, Routes } from 'react-router-dom';
import MyPosts from './components/Home';
import LikedFunction from './components/Like';
import Comment from './components/Comment';
import Profile from './components/Profile';
import Carousal from './components/Carousal';
import Counter from './components/Counter';


function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <Routes>
        <Route path="/" element={<MyPosts />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/carousal" element={<Carousal/>}></Route>
      </Routes> 
    </div>
  );
}

export default App;
