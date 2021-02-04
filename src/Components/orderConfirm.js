import React, { useContext} from 'react';
import styled from 'styled-components';
import { ModalItem, Overlay } from './ModalItem';
import { OrderTitle,Total,TotalPrice } from './order';
import { projection } from './secondaryFunction';
import { SumResult } from './ModalItem';
import { Context } from './context';

const Modal = styled.div`
    background-color:#fff;
    width:600px;
    padding:30px;
`;

const BtnAdd = styled.button`
    position:relative;
    top:10px;
    left:30%;
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

const Text = styled.h3`
    text-align:center;
    margin-bottom:30px;
`;

const rulesData = {
    itemName: ['name'],
    price: ['price'],
    count: ['count'],
    topping:['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name),
    arr => arr.length ? arr : 'no toppings'],
    choice:['choice', item => item ? item : 'no choices']
}

const sendOrder = (dataBase,orders,authentication) =>{
    const newOrder = orders.map(projection(rulesData));
    // console.log(newOrder);
    dataBase.ref('orders').push().set({
        nameClient: authentication.displayName,
        email: authentication.email,
        order: newOrder
    });
    
}

export const OrderConfirm = () =>{
const {
    orders: {orders,setOrders},
    auth: {authentication},
    orderConfirm: {setOpenOrderConfirm},
    firebaseDatabase
} = useContext(Context);

    const dataBase = firebaseDatabase();
    const total = orders.reduce((result,order)=> SumResult(order)+result,0);

    return (
        <Overlay>
            <Modal>
    <OrderTitle>{authentication.displayName}</OrderTitle>
    <Text>Осталось только подтвердить ваш заказ</Text>
    <Total>
        <span>Итого:</span>
    <TotalPrice>{total.toLocaleString('ru-RU',{style: 'currency', currency: 'RUB'})}</TotalPrice>
    </Total>
    <BtnAdd
        onClick={()=>{
            sendOrder(dataBase,orders,authentication);
            setOrders([]);
            setOpenOrderConfirm(false);
        }}>
        Подтвердить
    </BtnAdd>
            </Modal>
        </Overlay>
    )
}
