import React from 'react';
import './LoginInsert.scss';
import {Link} from 'react-router-dom';

const LoginInsert = () => {
    return (
        <form className="LoginInsert">
            <input placeholder="ID"/>
            <input type="password" placeholder="PASSWORD"/>
            <div>
                <button type="submit" id="login">로그인</button>
                <button type="submit" id="forgot_pwd">비밀번호 찾기</button>
            </div>
            <p>아직 가입이 안되어 있으신가요?</p>
            <Link to="signin">
                <button type="submit" id="sign_in">회원가입</button>
            </Link>
        </form>
    )
};

export default LoginInsert;

