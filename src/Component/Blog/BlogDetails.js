import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  let { id } = useParams();
  const { blog, setBlog } = useState([]);

  console.log(blog);

  useEffect(() => {
    const url = `https://volunteer-network-by-omar.onrender.com/blog/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  return (
    <div>
      <h1>hello. blog details... id: {id}</h1>
      {/* {
        blog.map(bl => <p>{bl.title}</p>)
      } */}
    </div>
  );
};

export default BlogDetails;
