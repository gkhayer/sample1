import React from "react";
import { Blog } from "../pages/addUser/CreateUser";

const img =
  "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
const BlogList = (props: { blogs: Blog[] | null }) => {
  const { blogs } = props;
  return (
    <div className="blog-list">
      <ul className="divide-y divide-gray-200">
        {blogs &&
          blogs.map(
            (blog: {
              id: React.Key | null | undefined;
              title:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | null
                | undefined;
              author:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | null
                | undefined;
            }) => (
              <div className="preview" key={blog.id}>
                <li key={blog.id} className="py-4 flex">
                  <img className="h-10 w-10 rounded-full" src={img} alt="" />
                  <div className="ml-3">
                    <p className=" bg-red-200 text-sm font-medium text-gray-900">
                      {blog.author}
                    </p>
                    <p className="text-sm text-gray-500">{blog.title}</p>
                  </div>
                </li>
              </div>
            )
          )}
      </ul>
    </div>
  );
};

export default BlogList;
