import React from "react";

const Blog = () => {
  const blogs = [
    { id: 1, title: "Blog Post 1", content: "This is blog post 1 content." },
    { id: 2, title: "Blog Post 2", content: "This is blog post 2 content." },
    { id: 3, title: "Blog Post 3", content: "This is blog post 3 content." },
    { id: 4, title: "Blog Post 4", content: "This is blog post 4 content." },
    { id: 5, title: "Blog Post 5", content: "This is blog post 5 content." },
    { id: 6, title: "Blog Post 6", content: "This is blog post 6 content." },
  ];
  return (
    <div>
      <div id="blog" className="bg-base-100 py-12">
        <h2 className="text-4xl text-center font-bold mb-8">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">{blog.title}</h3>
                <p>{blog.content}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
