import React from 'react';
import './SigninInsert.scss';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

const submitHandler = (event) => {
    event.preventDefault();

    axios.post("http://127.0.0.1:7000/signup", {
        name: event.target.name.value,
        id: event.target.id.value,
        password: event.target.pwd.value,
        phone: event.target.phone.value,
        address: event.target.address.value,
        province: event.target.province.value,
        district: event.target.district.value,
        adminoffice_idadminoffice: event.target.adminoffice_idadminoffice.value,
        // code: 
    }).then(function(response){
        console.log(response);
        return (
            <Redirect to='/login' />
        );
    }).catch(function(error){
        console.log(error);
    });
};

const SigninInsert = () => {
    return (
        <form className="SigninInsert" onSubmit={submitHandler}>
            <input name="name" placeholder="이름"/>
            <input name="id" placeholder="아이디"/>
            <input name="pwd" placeholder="비밀번호"/>
            <input name="pwd_check" placeholder="비밀번호 확인"/>
            <input name="phone" placeholder="전화번호"/>
            <input name="address" placeholder="주소"/>
            <input name="province" placeholder="도"/>
            <input name="district" placeholder="구"/>
            <input name="adminoffice_idadminoffice" placeholder="센터번호" />
            <input name="code" placeholder="사회복지사 코드"/>
            <button type="submit" id="signin_done">완료</button>
        </form>
    )
};

export default SigninInsert;