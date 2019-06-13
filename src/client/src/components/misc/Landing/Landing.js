import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
    <main>
        <h1>Welcome to Friendly!</h1>
        <p>Please <Link to='/login'>log in</Link> or <Link to='/signup'>sign up</Link>!</p>
    </main>
)

export default Landing;
