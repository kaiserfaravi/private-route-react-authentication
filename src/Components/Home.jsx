import React, { useContext } from 'react';
import { AuthContext } from '../Provider/Authprovider';

const Home = () => {
    const inf= useContext(AuthContext);
    // console.log(inf);
    return (
        <div>
            <div className="text-3xl"> {inf.name} </div>
        </div>
    );
};

export default Home;