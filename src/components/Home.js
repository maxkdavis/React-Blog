import React, { useState, useEffect } from "react";
import useFetch from "../useFetch";
import BlogList from "./BlogList";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");

    return (
        <div className="Home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
};

export default Home;
