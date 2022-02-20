import React from 'react';
import './Home.css';
import Header from '../header/Header';

function Home(props) {
    return (
        <div className='homepagebckgrnd'>
            <Header />
            <h1 className='heading'>BlogApp</h1>
            <p className='paragraph'>A blog is a type of website that is updated regularly with new content. Most blogs contain short, informal articles called blog posts. These posts usually contain some combination of text, photos, videos, and other media. At its core, a blog is just a space on the Web that you can create to record and express your opinions, experiences, and interests.

                If you spend much time browsing the Web, you've probably read a blog post before, even if you didn't realize it at the time. Some of the most-read blogs are a bit like online magazines because they're written by a team of people who are paid to update the blog with new posts several times a day.</p>
        </div>
    );
}

export default Home;