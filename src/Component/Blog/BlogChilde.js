import React from "react";
import { Link } from "react-router-dom";

const BlogChilde = ({blog}) => {
    const {title, blog_content, _id} = blog;

  return (
    <>
      <Link className="card1" to={`/blogDetails/:${_id}`}>
        <h3 className="h3_blog">{title.length >20 ? title.slice(0,20)+'...' : title}</h3>
        <p className="small">{blog_content.length >80 ? blog_content.slice(0,80)+' →' : blog_content}</p>
        <div className="go-corner" href="#">
          <div className="go-arrow">→</div>
        </div>
      </Link>
    </>
  );
};

export default BlogChilde;
