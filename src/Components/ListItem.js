import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    display:flex;
    jystify-content:space-around;
    flex-wrap:wrap;
`;

const Item = styled.li`
    width:400px;
    height:155px;
    background-image: ${(props) => `url(${props.img})` };
    color:#fff;
    background-size:cover;
    background-position:center;
    margin:30px;
    padding:15px;
    position:relative;
    font-size:25px;
    z-index:1;
    transition:0.3s all;
    &:after{
        position:absolute;
        content:'';
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:-1;
        background-color:black;
        opacity:40%;
    }
    &:hover{
        cursor:pointer;
        box-shadow:         13px 13px 10px 0px rgba(51, 50, 50, 1);
        transform: scale(1.03);
        &:after{
            opacity:30%;
            
        }
    }
`;

export const ListItem = (props) =>(
    <List>
        { props.ItemList.map( item =>(
            <Item key={item.id} img={item.img}>
                <p>{item.name}</p>
        <p>{item.price.toLocaleString('ru-RU',{style: 'currency', currency: 'RUB'})}</p>
            </Item>
        )) }
    </List>
)