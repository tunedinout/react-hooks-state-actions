import { useState } from 'react';

export function useFormInput(){
    const [inputValue,setInputvalue] = useState('');
    return [inputValue,setInputvalue];
}