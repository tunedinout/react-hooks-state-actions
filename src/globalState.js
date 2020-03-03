import useStateHook from './useStateHook';
import {addColor,addItem} from './actions/actions'

const initialState = {
    colors: ['red', 'green', 'yellow'],
    items: ['Keyboard', 'Touchpad'],
};
const actions = [addColor,addItem];
const useGlobalState = useStateHook(initialState,actions);
console.log(useGlobalState)
export default useGlobalState;