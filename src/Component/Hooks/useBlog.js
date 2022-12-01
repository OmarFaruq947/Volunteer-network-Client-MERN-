import { useEffect, useState } from "react";

const useBlog = (_id) => {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  useEffect(() => {
    fetch(`https://volunteer-network-by-omar.onrender.com/blog`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [_id]);
  return [blogs, setBlogs];
};

export default useBlog;
