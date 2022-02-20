import React from 'react';
import { Link } from 'react-router-dom';

import './Header2.css'

function header(props) {
    return (
        <div>
            <nav className='header1'>
                <h1 className='head3'>BlogApp</h1>
                <div className="articles">
                    <Link className="link" to="/login">Login</Link>
                    <Link className="link" to="/signup">Signup</Link>

                </div>
            </nav>
        </div>
    );
}

export default header;