import React from "react";
import useBlog from "../Hooks/useBlog";
import "./Blog.css";
import BlogChilde from "./BlogChilde";

const Blog = () => {
  // const [blogs, setBlogs] = useState([]);
const [blogs] = useBlog()

  return (
    <div className="blog_body">
      <div className="container_blog">
        {
          blogs.map(blog => <BlogChilde key={blog._id} blog={blog}/>)
        }
      </div>
    </div>
  );
};

export default Blog;
