import logoSm from '../images/logoSm.png'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
        items: [
        {_id:'1', name: 'Extra Virgin Olive Oil', description:"Extra virgin olive oil", price: 11.00, size: "250mL", count: 10, available: true, img: logoSm },
        {_id:'2', name: 'Extra Virgin Olive Oil', description:"Extra virgin olive oil", price: 16.00, count: 10, size: "500mL", available: true, img: logoSm },
        {_id:'3', name: 'Extra Virgin Olive Oil', description:"Extra virgin olive oil", price: 65.00, count: 10, size: "3L", available: true, img: logoSm },
        {_id:'4', name: 'Extra Virgin Olive Oil', description:"Extra virgin olive oil", price: 230.00, count: 10, size: "20L", available: false, img: logoSm },
        {_id:'5', name: 'Jar of Black Olives', description:"A jar of olives", price: 8.00, count: 10, size: "200g", available: true, img: logoSm },
        {_id:'6', name: 'Jar of Green Olives', description:"A jar of olives", price: 8.00, count: 10, size: "200g", available: true, img: logoSm }
        ],
        addedItems:[],
        total: 0

}

const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item._id === action._id)
          //check if the action _id exists in the addedItems
         let existed_item= state.addedItems.find(item => action._id === item._id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price,
                 addedItems: [...state.addedItems]
                 // return a new added items 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action._id === item._id)
        let new_items = state.addedItems.filter(item=> action._id !== item._id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item._id === action._id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item._id === action._id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item._id !== action._id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 15
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 15
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer