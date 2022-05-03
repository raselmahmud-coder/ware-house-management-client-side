import React, { useContext } from 'react';
import { ThemeContext } from '../../../App';

const Blog = () => {
    const [count, setCount] = useContext(ThemeContext)
    return (
        <div>
            <h1>Hello Blog</h1>
            <button onClick={()=> setCount(count +1)}>click me</button>
        </div>
    );
};

export default Blog;