import BlogList from "../../components/BlogList.js";
import useFetch from "../../hooks/useFetch.js";

const AddBlog = () => {
  const blogsUrl = "http://localhost:8000/blogs";
  const {data : blogs, isPending, isError} = useFetch(blogsUrl)


  return (
    <div className="blog"> 
    {isError && <p>Error: {isError}</p>}
    {isPending && <div>...Loading...</div>}
    {blogs && <BlogList blogs={blogs} />}
  </div>
  )
}

export default AddBlog