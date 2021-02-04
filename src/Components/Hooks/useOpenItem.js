import { useState } from 'react';

export function useOpenItem(){
    const [openItem,setOpenItem] = useState(0);
    return {openItem,setOpenItem};
}