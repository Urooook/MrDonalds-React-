import React from 'react';
import styled from 'styled-components';

const ChoiceWrap = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;
const Choicelabel = styled.label`
    display:inline-block;
`;
const ChoiceRadio =styled.input`
    cursor:pointer;
    margin-right:5px;
`;
const ChoiceBlock = styled.section`
    width:500px;
    margin:0 auto;
`;

export const Choices = ({ openItem,choice,changeChoices}) =>{
    return(
        <ChoiceBlock>
            <h3>Выбирайте:</h3>
            
         <ChoiceWrap>
             {openItem.choices.map((item,i)=>(
             <Choicelabel key={i}>
             <ChoiceRadio
              type="radio"
              name="choices"
              value={item}
              checked={choice === item}
              onChange={changeChoices}
              />
            {item}
         </Choicelabel>
         ))}
             
             
         </ChoiceWrap>
        
        </ChoiceBlock>
    )
}