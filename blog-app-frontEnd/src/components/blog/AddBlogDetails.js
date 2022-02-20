import React, {  useState } from 'react';

import './Blog.css';

function AddBlogDetails(props) {
    const { setblogData } = props;

    // Storing blogdetails
    const [descriptionValues, setDescriptionValues] = useState({ name: "", title: "", description: "" });

    function handleChange(event) {
        console.log(event.target);
        const { name, value } = event.target;
        setDescriptionValues({ ...descriptionValues, [name]: value })
    }

    async function fetchUpdate(){
        const name = descriptionValues.name;
        const title = descriptionValues.title;
        const description = descriptionValues.description;
        const response = await fetch(`http://localhost:5000/api/addblog/${name}/update`,{
            method: 'post',
            body: JSON.stringify({ name, title, description }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const body = await response.json();
        setblogData(body);
        setDescriptionValues({ name: "", title: "",  description: "" });
    }

    return (
        <div>
            <div className='blog-addblog'>
                <h1 className='blogs-head'>Add a blog</h1>
                <br></br>
                <form >
                <label>
                        Your Name:
                        <br></br>
                        <input type="text" name="name" value={descriptionValues.name} onChange={handleChange} ></input>
                    </label>
                    <label>
                        Add title:
                        <br></br>
                        <input type="text" name="title" value={descriptionValues.title} onChange={handleChange}></input>
                    </label>
                    <label>
                        Add Description:
                        <br></br>
                        <textarea rows="4" cols="50" name='description' value={descriptionValues.description} onChange={handleChange}></textarea>
                    </label>
                    <br></br>
                    <button onClick={fetchUpdate}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddBlogDetails;