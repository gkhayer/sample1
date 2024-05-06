import React from "react";
import { Blog } from "../pages/addUser/CreateUser";

const BlogList = (props: { blogs: Blog[] | null }) => {

  const { blogs} = props
  return (
    <div className="blog-list">
      {blogs && blogs.map(
        (blog: {
          id: React.Key | null | undefined;
          title:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | null
            | undefined;
          author:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | null
            | undefined;
        }) => (
          <div className="preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by: {blog.author}</p>
          </div>
        )
      )}
    </div>
  );
};

export default BlogList;
