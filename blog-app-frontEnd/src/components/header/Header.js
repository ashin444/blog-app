import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function header(props) {
    return (
        <div>
            <nav className='header'>
                <h1 className='head2'>BlogApp</h1>
                <div className="blogs">
                    <Link className="link" to="/home">Home</Link>
                    <Link className="link" to="/bloglist">Blogs</Link>
                    <Link className="link" to="/addblog">Add Blog</Link>
                    <Link className="link" to="/">Signout</Link>

                </div>
            </nav>
        </div>
    );
}

export default header;