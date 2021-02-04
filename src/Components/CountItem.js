import React from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
    display:flex;
    justify-content:space-around;
`;

const CountInput = styled.input`
    width:50px;
    font-size:20px;
    text-align:center;
`;

const ButtonInp = styled.button`
    background-color:transparent;
    border:1px solid grey;
    width:40px;
    border-radius:3px;
    height:30px;
    margin: 0px 10px;
    transition:0.3s all;
    &:hover{
        background:#299B01;
    }
`;

export function CountItem({counter}){
    
    const {count,setCount,onChange} = counter;
   

    return(
        <CountWrapper>
            <span>Количество</span>
            <div>
                 <ButtonInp disabled={count<=1} onClick={()=> setCount(count-1)}>-</ButtonInp>
                 <CountInput type="number" min="1" max="150" value={count < 1 ? 1 : count} onChange={onChange}/>
                 <ButtonInp onClick={()=> setCount(count+1)}>+</ButtonInp>
            </div>
        </CountWrapper>
    )
}