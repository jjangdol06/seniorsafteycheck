import React from 'react';
import './SigninInsert.scss';

const SigninInsert = () => {
    return (
        <form className="SigninInsert">
            <div className="name">
                <input placeholder="성"/>
                <input placeholder="이름"/>
            </div>
            <input placeholder="아이디"/>
            <input placeholder="비밀번호"/>
            <input placeholder="비밀번호 확인"/>
            <input placeholder="사회복지사 코드"/>
            <button type="submit" id="signin_done">완료</button>
        </form>
    )
};

export default SigninInsert;