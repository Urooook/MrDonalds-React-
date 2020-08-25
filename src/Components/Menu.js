import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import Banner from '../img/banner.png';
const MenuStyled = styled.main`
    margin-top:100px;
    background-color:#ccc;
`;

const SectionMenu = styled.section`
    padding:30px;
`;
const SectionBanner = styled.section`
    min-height:310px;
    width:100%;
    background-image: url(${Banner});
    background-repeat:no-repeat;
    background-size:cover;
   
`;

export const Menu = () =>(
    <MenuStyled>
        <SectionBanner>
            
        </SectionBanner>
        <SectionMenu>
        <h2>Бургеры</h2>
        <ListItem ItemList={dbMenu.burger}/>
        </SectionMenu>

        <SectionMenu>
        <h2>Закуски / Напитки</h2>
        <ListItem ItemList={dbMenu.other}/>
        </SectionMenu>
    </MenuStyled>
);