import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState();
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
                setIsPending(false);
            });
    }, []);

    return (
        <div className="Home">
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
};

export default Home;