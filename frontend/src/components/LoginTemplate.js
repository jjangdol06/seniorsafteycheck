import React from 'react';
import LoginInsert from './LoginInsert'
import './LoginTemplate.scss';

const LoginTemplate = () => {
    return ( <div className="LoginTemplate">
            <div className="app-greeting">어서오세요</div>
            <div className="app-title">사회복지사분들을 위한 안부 확인 서비스 플랫폼입니다.</div>
            <div className="content">
                <LoginInsert />
            </div>
        </div>
    )
}

export default LoginTemplate;