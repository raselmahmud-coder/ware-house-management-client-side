import React, { useContext } from 'react';
import { ThemeContext } from '../../../App';
import { cutomlogIn } from './LogIn';
const SocialLogIn = () => {
    const {handlingForm} = useContext(cutomlogIn)
    return (    
        <div>
            <h1>socisl login </h1>
            <button onClick={handlingForm}>click here</button>
        </div>
    );
};

export default SocialLogIn; 