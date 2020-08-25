import React from 'react';
import styled from 'styled-components';
import logoImg from '../img/logo.svg';
import sign from '../img/sign.svg';

const NavbarStyled = styled.header`
    position:fixed;
    top:0;
    left:0;
    z-index:999;
    width:100vw;
    margin:0 auto;
    height:80px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:10px;
    color:white;
    background-color:#299B01;
    

`;

const Logo = styled.div`
 display:flex;
 aling-items:center;
 margin-left:100px;
`;

const H1 = styled.h1`
    font-size:30px;
    margin-left:15px;
`;

const ImgLogo = styled.img`
    width:50px;
`;
const Btn = styled.button`
    width:150px;
    background:green;
    padding:8px;
    
    margin-right:70px;
    border:1px solid black;
    border-radius:5px;
    color:#fff;
    font-size:16px;
    
    
    
`;

export const Navbar = () =>(
    <NavbarStyled>
        <Logo>
        <ImgLogo src={logoImg} alt="Logo" />
        <H1>MrDonald's</H1>
        </Logo>
        <Btn>
            <img src={sign} alt="Войти"/>
            <p>Войти</p></Btn>
    </NavbarStyled>
);