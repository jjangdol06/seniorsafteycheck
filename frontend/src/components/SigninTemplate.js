import React from 'react';
import './SigninTemplate.scss';

const LoginTemplate = ({children}) => {
    return (
        <div className="LoginTemplate">
            <div className="app-greeting">회원가입</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default LoginTemplate;