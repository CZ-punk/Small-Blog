import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBarElements from "./components/Navbar/NavBarElements";
import HomeScreen from "./Pages/HomeScreen";
import PostBlogScreen from "./Pages/PostBlogScreen";
import BlogDetailsScreen from "./Pages/BlogDetailsScreen";

function App() {
  return (
    <Router>
      <NavBarElements />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path='/post-blog' element = {<PostBlogScreen />} />
        <Route path='/post-blog/:id' element = {<BlogDetailsScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
