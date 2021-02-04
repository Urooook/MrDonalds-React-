import React, {useContext} from 'react';
import styled from 'styled-components';
import { CountItem } from './CountItem';
import { useCount } from './Hooks/useCount';
import { Toppings } from './Toppings';
import { Choices } from './Choices';
import { useToppings } from './Hooks/useToppings';
import { useChoices} from './Hooks/useChoices';
import { Context } from './context';
export const Overlay = styled.div`
    position:fixed;
    top:0;
    left:0;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
    z-index:20;
    background-color: rgba(0,0,0,0.5);
`;
const Modal = styled.div`
    width:600px;
    height:600px;
    background-color:#fff;
`;
const Banner = styled.div`
    width:100%;
    height:200px;
    background-image:url(${({img}) => img});
    background-size:cover;
    background-position:center;
    margin-bottom:20px;
`;
const ModalText = styled.div`
position:relative;
    width:95%;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
`;

const H3 = styled.h3`
    font-size:24px;
`;

const BtnAdd = styled.button`
position:absolute;
bottom:16%;
left:42%;

    width:250px;
    height:65px;
    color:#fff;
    font-size:24px;
    border:none;
    margin-top:70px;
    background: #299B01;
    transition: 0.3s all;
    &:hover{
        background:green;
    }
    &:disabled{
        background:grey;
    }
`;
const TotalPriceItem = styled.div`
    display:flex;
    justify-content:space-around;
`;
export const SumResult = order => {

    const countTopping = order.topping && order.topping.filter(item => item.checked).length;
    const priceTopping = order.price*0.1*countTopping;

   return (order.price + priceTopping) * order.count;
};
export const ModalItem =() =>{

const {
    orders: { orders,setOrders },
    openItem: {openItem,setOpenItem}
} = useContext(Context);

    const counter = useCount(openItem.count);
    // console.log(counter);

    const toppings = useToppings(openItem);
    // console.log(openItem);
    const choices =useChoices(openItem);
    // console.log(choices);
    const isEdit = openItem.index > -1;

    function closeModal(e){
        if(e.target.id ==='overlay'){
            setOpenItem(null);
        }
    }
    const order = {
        // name: openItem.name
        ...openItem,
        count:counter.count,
        topping:toppings.toppings,
        choice:choices.choice,
    };
    const editOrder = () =>{
        const newOrders = [...orders];
        newOrders[openItem.index] = order;
        setOrders(newOrders);
        setOpenItem(null);
    };

    

    const addOrder = () =>{
        setOrders([...orders,order]);
        setOpenItem(null);
        console.log(...orders);
    }

    // if(!openItem) return null;
    return (
    <Overlay id="overlay" onClick={closeModal}>
        <Modal>
            <Banner img={openItem.img}/>
            <ModalText>
                <H3>{openItem.name}</H3>
                <H3> {openItem.price.toLocaleString('ru-RU',{style: 'currency', currency: 'RUB'})}</H3>
                {/* <H3> {openItem.price.toLocaleString('ru-RU',{style: 'currency', currency: 'RUB'})}</H3> */}
            </ModalText>
            <CountItem counter={counter}/>
            {openItem.toppings && <Toppings {...toppings} />}
            {openItem.choices && <Choices {...choices} openItem={openItem} />}
            <TotalPriceItem>
                <span>Цена:</span>
                <span>{SumResult(order).toLocaleString('ru-RU',{style: 'currency', currency: 'RUB'})}</span>
            </TotalPriceItem>
            
    <BtnAdd onClick={isEdit ? editOrder : addOrder} disabled={order.choices && !order.choice}>{isEdit ? 'Изменить' : 'Добавить'}</BtnAdd>
        </Modal>
    </Overlay>
    );
};
