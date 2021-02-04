import React, { useContext } from 'react';
import styled from 'styled-components';
import { OrderListItem } from './OrderListitem';
import { SumResult } from './ModalItem';
import { Context } from './context';

const OrderStyled = styled.div`
    width:380px;
    position:fixed;
    display:flex;
    flex-direction:column;
    top:80px;
    left:0;
    height: calc(100% - 80px);
    background:#fff;
    box-shadow: 3px 4px 5px rgba(0,0,0,0.25);
    
`;

export const OrderTitle = styled.h2`
    text-align:center;
    margin-top:25px;
    margin-bottom:30px;
`;

const OrderContainer = styled.div`
    flex-grow:1;
`;
const OrderList = styled.ul`

`;

export const Total = styled.div`
    display:flex;
    padding:15px;
    & span:first-child{
        flex-grow:1;
    }
`;
const BtnAdd = styled.button`


    width:250px;
    height:65px;
    color:#fff;
    font-size:24px;
    border:none;
    margin:0 auto;
    margin-bottom:25px;
    background: #299B01;
    transition: 0.3s all;
    &:hover{
        background:green;
    }
`;

export const TotalPrice = styled.span`
    text-align:right;
    min-width:65px;
    margin-left:20px;
`;
const Empty = styled.p`
    text-align:center;
`;



export const Order = () =>{
    
    const { 
        auth: { authentication,login},
        orders: { orders,setOrders},
        orderConfirm: { setOpenOrderConfirm }
    } = useContext(Context);
    
    const deleteItem = index =>{
        const newOrders = [...orders];
        newOrders.splice(index,1);
        setOrders(newOrders);
    }

    const total = orders.reduce((result,order)=> SumResult(order)+result,0);

    const totalCounter = orders.reduce((result,order)=> order.count+result,0);

    return(
        <OrderStyled>
           
            <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
            <OrderContainer>
                {orders.length ?
                <OrderList>
                {orders.map((order, index) => <OrderListItem 
                key={index}
                 order={order}
                 deleteItem={deleteItem}
                 index={index}
                 
                 />)}
                </OrderList> :
                <Empty>Вы ничего не заказали</Empty>
                }
            </OrderContainer>
          { orders.length ?
          <>
              <Total>
            <span>Итого</span>
            <span>{totalCounter}</span>
            <TotalPrice>{total.toLocaleString('ru-RU',{style: 'currency', currency: 'RUB'})}</TotalPrice>
            </Total>
            <BtnAdd onClick={() => {
                if(authentication){
                    setOpenOrderConfirm(true);
                }else{
                    login();
                }
            }}>Оформить</BtnAdd>
          </>
          :
          null

          }
        </OrderStyled>
    );
}