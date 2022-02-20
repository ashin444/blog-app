import React from 'react';
import { Link } from 'react-router-dom';

import blogContent from './SampleBlogDB';
import './Blog.css';
import Header from '../header/Header';



function BlogList(props) {
    return (
        <div>
            <Header />
            <h1 id='blogs'>Blogs Available</h1>
            {blogContent.map((i, key) => (
                <Link className='blog' key={key} to={`/blog/${i.name}`}>
                    <h3 className='blog_head'>{i.title}</h3>
                </Link>
                ))}
        </div>
    );
}

export default BlogList;




// import React, { useEffect, useState} from 'react';
// import { Link, useParams} from 'react-router-dom';

// import './Blog.css';
// import Header from '../header/Header';

// let BlogList=(props) => {

//     // Temporary storage of DB data
//     const [blogData, setblogData] = useState({});
    
//     // Backend Connecton API fetch
//     useEffect(() => {
//         if (props.selectTitle){ fetchAPI () }
//     }, [props.selectTitle]);
    
//     async function fetchAPI(){
//         const response = await fetch(`http://localhost:5000/api/bloglist/${props.selectTitle}`)
//         const body = await response.json();
//         setblogData(body.results);
//         console.log(body);
//     }

//     return (
//         <div>
//             <Header />
//             <h1 id='blogs'>Blogs Available</h1>
//                 <Link className='blog' >
//                     <h3 className='blog_head'>{blogData.title}</h3>
//                 </Link>
//         </div>
//     );
// }

// export default BlogList;

