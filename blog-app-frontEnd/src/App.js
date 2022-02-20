import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import  Home from "./components/home/Home";
import Blog from "./components/blog/Blog";
import BlogList from "./components/blog/BlogList";
import AddBlog from "./components/blog/AddBlog";
import AddBlogDetails from "./components/blog/AddBlogDetails";
import Error from "./components/error/Error";
import Main from "./components/mainpage/Main";
import TheBlog from "./components/blog/TheBlog";


function App() {
    return (
        <Router>
                <Routes>
                    <>
                        <Route path="/" element={<Main />} /> 
                    </>
                    <>
                        <Route path="/login" element={<Login />} /> 
                    </>
                    <>
                        <Route path="/signup" element={<Signup />} />
                    </>
                        <>
                            <Route path="/home" element={<Home />} />
                            <Route path="/bloglist" element={<BlogList />} />
                            <Route path="/blog/:name" element={<Blog />} />
                            <Route path="/addblog" element={<AddBlog /> }/>
                            <Route path="/addblog/:name" element={<AddBlogDetails /> }/>
                            <Route path="*" element={<Error />} />
                        </>
                </Routes>
        </Router>
    );
}

export default App;
