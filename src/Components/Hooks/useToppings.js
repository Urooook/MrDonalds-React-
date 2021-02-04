import { useState } from 'react';

const getTopping = toppings => {
    return(
        toppings.map(item => ({
            name: item,
            checked:false,
        }))
    );
}

export function useToppings(openItem){

    const ToppingCheck = openItem.topping ? openItem.topping : openItem.toppings ? getTopping(openItem.toppings) : [];
    // console.log(ToppingCheck);
    const [toppings,setToppings] = useState(ToppingCheck);

    const checkToppings = index => {
        setToppings(toppings.map((item,i) =>{
            if(i===index){
                item.checked = !item.checked;
            }
            return item;
        }));
    }

    return {toppings,checkToppings};
}