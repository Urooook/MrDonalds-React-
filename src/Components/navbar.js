import React, { useContext } from 'react';
import styled from 'styled-components';
import logoImg from '../img/logo.svg';
import sign from '../img/sign.svg';
import { Context } from './context';

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
const User = styled.div`
    display:flex;
    align-items:center;
    text-align:center;
    
    
`;
const LogOut = styled.span`
    font-size:20px;
    font-weight:700px;
    cursor:pointer;
    margin-right:40px;
`;
const Figure = styled.figure`
    margin:0px 15px;
    border-right:1px solid #fff;
    padding-right: 20px;
`;

export const Navbar = () =>{
    const { auth: { authentication,login,logOut } } = useContext(Context);
   

    return (
        <NavbarStyled>
            <Logo>
            <ImgLogo src={logoImg} alt="Logo" />
            <H1>MrDonald's</H1>
            </Logo>
    
            {authentication ?
            <User>
                <Figure>
                <img src={sign} alt= {authentication.displayName}/>
                <figcaption>
                    {authentication.displayName}
                </figcaption>
                </Figure>
                <LogOut title='Выйти' onClick={logOut}>Х</LogOut>
            </User>
             :<Btn onClick={login}>
                <img src={sign} alt="Войти"/>
                <p>Войти</p></Btn>}
        </NavbarStyled>
    );
}