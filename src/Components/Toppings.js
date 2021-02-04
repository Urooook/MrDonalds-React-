import React from 'react';
import styled from 'styled-components';

const ToppingWrap = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;
const ToppingLabel = styled.label`
    display:inline-block;
`;
const ToppingCheckBox = styled.input`
    cursor:pointer;
    margin-right:5px;
`;
const ToppingBlock = styled.section`
    width:500px;
    margin:0 auto;
`;

export function Toppings({toppings,checkToppings}){
    return(
        <ToppingBlock>
        <h3>Добавки:</h3>
         <ToppingWrap>
             {toppings.map((item,i)=>(
             <ToppingLabel key={i}>
             <ToppingCheckBox
              type="checkbox"
              checked={item.checked}
              onChange={() => checkToppings(i)}
              />
            {item.name}
         </ToppingLabel>
         ))}
             
             
         </ToppingWrap>
        </ToppingBlock>
     );
}