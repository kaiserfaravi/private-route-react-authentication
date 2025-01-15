import PropTypes from 'prop-types';
import React, { createContext } from 'react';

export const AuthContext= createContext(null);

const Authprovider = ({children}) => {
    const authInfo = { name:'amar name faravi'}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;

Authprovider.propTypes={
    children:PropTypes.node
}