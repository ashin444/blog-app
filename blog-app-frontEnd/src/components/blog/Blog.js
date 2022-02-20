import React, { useEffect,useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import blogContent from './SampleBlogDB';
import Error from '../error/Error';
import Header from '../header/Header';

function Blog(props) {
    
    const {name} = useParams(); 

    // Temporary storage of DB data
    const [blogData, setblogData] = useState({});

    // Matching name parameter
    const blog = blogContent.find(i => i.name===name );

    // Backend Connecton API fetch
    useEffect(() => {
        fetchAPI();
    }, [name]);

    async function fetchAPI(){
        let response = await fetch(`http://localhost:5000/api/blog/${name}`)
        let body = await response.json();
        console.log(body);
        setblogData(body);
    }

    // Article Not Exist in DB
    if(!blog) return <Error />

    return (
        <div>
            <Header />
                <div >
                    <h1 className='blog' >{blogData.title}</h1>
                    <p className='desc' >{blogData.description}</p>
                    <Link className="link" to="/addblog">
                    <button className=" updatebutton">Update</button>
                    </Link>
                            <button className=" deletebutton">Delete</button>
                </div>
        </div>
    );
}

export default Blog;