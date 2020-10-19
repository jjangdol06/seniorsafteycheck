import React from 'react';
import './LoginInsert.scss';

const LoginInsert = () => {
    return (
        <form className="LoginInsert">
            <input placeholder="ID"/>
            <input placeholder="PASSWORD"/>
            <div>
                <button type="submit" id="login">로그인</button>
                <button type="submit" id="forgot_pwd">비밀번호 찾기</button>
            </div>
            <p>아직 가입이 안되어 있으신가요?</p>
            <button type="submit" id="sign_in">회원가입</button>
        </form>
    )
};

export default LoginInsert;

