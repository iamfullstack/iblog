import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Common/Navbar";
import Blogs from "./Pages/Blogs";

import UpdateBlog from "./Pages/UpdateBlog";
import WriteBlog from "./Pages/WriteBlog";

function App() {
  return (
    <div className="">
      <Navbar />
      <h1 className="text-center py-5">Blog App</h1>
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/update" element={<UpdateBlog />} />
        <Route path="/create" element={<WriteBlog />} />
     
      </Routes>
    </div>
  );
}

export default App;
