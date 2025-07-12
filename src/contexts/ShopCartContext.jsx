import { createContext, useContext, useEffect, useReducer } from "react";

const CartStateContext = createContext()
const CartDispatchContext = createContext()

export const UseCartStateContext = () => useContext(CartStateContext)
export const UseCartDispatchContext = () => useContext(CartDispatchContext)

function cartReducer(state, action) {
    switch (action.type) {
        case 'INITIALIZE':
            return action.payload

        case 'ADD_ITEM': {
            const existing = state.find(item => item.id === action.payload.id)

            if(existing) {
                return state.map(item =>
                    item.id === action.payload.id 
                    ? {...item, qty:item.qty + 1} 
                    : item
                )
            }
            return [...state, {...action.payload, qty: 1}]
        }

        case 'REMOVE_ITEM':
            return state.filter(item => item.id !== action.payload)
        
        case 'UPDATE_QTY':
            return state.map(item => 
                item.id === action.payload.id
                ? {...item, qty: action.payload.qty}
                : item
            )
        
        case 'CLEAR_CART':
            return []

        default:
            throw new Error(`Unknown action ${action.type}`);  
    }
}

export const ShopCartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, [])

    // Optional: Persist cart state to localStorage or other storage here
    useEffect(() => {
        const storedCart = localStorage.getItem('shopCart')
        if (storedCart) {
            dispatch({ type: 'INITIALIZE', payload: JSON.parse(storedCart) })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('shopCart', JSON.stringify(state))
    }, [state])

    return (
        <CartStateContext.Provider value={state}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartStateContext.Provider>
    )
}


