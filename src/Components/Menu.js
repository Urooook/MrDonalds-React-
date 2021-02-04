import React from 'react';
import styled from 'styled-components';
// import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import Banner from '../img/banner.png';
import { useFetch } from '../Components/Hooks/useFetch';


const MenuStyled = styled.main`
    margin-top:100px;
    background-color:#ccc;
    margin-left:380px;
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

export const Menu = () =>{
  
    const res = useFetch();
const dbMenu = res.response;

    return (
        <MenuStyled>
            <SectionBanner>
                
            </SectionBanner>
            { dbMenu ?
                <>
            <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem ItemList={dbMenu.burger} />
            </SectionMenu>
    
            <SectionMenu>
            <h2>Закуски / Напитки</h2>
            <ListItem ItemList={dbMenu.other} />
            </SectionMenu>
                </>
                : res.error ?
                <div>Ошибка подгрузки данных. Мы скоро это исправим!!!</div>
                :
                <div>Загрузка товара...</div>
            }
            
        </MenuStyled>
    );
};