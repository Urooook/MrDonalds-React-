import React, { useRef,useContext } from 'react';
import styled from 'styled-components';
import  TrashImg  from '../img/trash.svg';
import { SumResult } from './ModalItem';
import { Context } from './context';
const TrashButton = styled.button`
    width:24px;
    height:24px;
    border-color:transparent;
    background-color:transparent;
    background-image:url(${TrashImg});
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    cursor:pointer;
`;
const ItemName = styled.span`
    flex-grow:1;
`;

const ItemPrice = styled.span`
    margin-left:20px;
    margin-right:10px;
    text-align:right;
    min-width:65px;
`;


const OrderItemStyled = styled.li`
    display:flex;
    padding:5px 15px;
    flex-wrap:wrap;
    &:hover{
        cursor:pointer;
    }
`;

const Topping = styled.div`
    width:100%;
    color:#9a9a9a;
    font-size:14px;
`;

export const OrderListItem = ({ order,deleteItem,index}) =>{
const { openItem: {setOpenItem} } = useContext(Context);
const topping = order.topping.filter(item => item.checked).map(item => item.name).join(', ');

// console.log(topping);

    const refDeleteButton = useRef(null);
    // Ниже можно было !e.target.classList.contains('delete'); По классу для кнопки
    return(
    <OrderItemStyled onClick={(e)=> e.target !== refDeleteButton.current && setOpenItem({...order,index})}> 
        <ItemName>{order.name} {order.choice}</ItemName>
<span>{order.count}</span>
<ItemPrice>{SumResult(order).toLocaleString('ru-RU',{style: 'currency', currency: 'RUB'})}</ItemPrice>
        <TrashButton ref={refDeleteButton} onClick={()=> deleteItem(index)}/>
    {topping && <Topping>Допы: {topping}</Topping>}
    </OrderItemStyled>
);
}