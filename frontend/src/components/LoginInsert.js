import React from 'react';
import './LoginInsert.scss';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

const submitHandler = (event) => {
    event.preventDefault();

    axios.post("http://127.0.0.1:7000/login", {
        id: event.target.id.value,
        password: event.target.pwd.value
    }).then(function(response){
        console.log(response);
        return (
            <Redirect to='/' />
        );
    }).catch(function(error){
        console.log(error);
    });
};

const LoginInsert = () => {
    return (
        <div>
            <form className="LoginInsert" onSubmit={submitHandler}>
                <input name="id" placeholder="ID"/>
                <input type="password" name="pwd" placeholder="PASSWORD"/>
                <button type="submit" id="login">로그인</button>   
            </form>
            <form>
                <button type="submit" id="forgot_pwd">비밀번호 찾기</button>
                <p>아직 가입이 안되어 있으신가요?</p>
                <Link to="/signin">
                    <button type="submit" id="sign_in">회원가입</button>
                </Link>
            </form>
        </div>
    )
};

export default LoginInsert;

