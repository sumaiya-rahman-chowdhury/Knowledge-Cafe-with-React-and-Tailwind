/* eslint-disable react/prop-types */


const Blog = ({blog}) => {
    console.log(blog)
    return (
        <div className="">
            <img src={blog.cover_picture} alt="" />
            <div className=" flex justify-between items-center">
                <div className=" flex items-center mt-3">
                <img src={blog.authorimg} alt="" className=" w-[70px] h-[70px] rounded-full"/>
                <div className="pl-3">
                    <h4 className=" font-bold">{blog.authorname}</h4>
                    <p className=" text-gray-400">{blog.posteddate}</p>
                </div>
                </div>
                <p>{blog.posteddate}</p>
            </div>
            <h1 className=" font-bold text-2xl">{blog.title}</h1>
            {
                blog.hashtags.map((tag,idx)=> <span key={idx}>  <a className=" text-blue-700">{tag}</a> </span>)
            }
        </div>
    );
};

export default Blog;