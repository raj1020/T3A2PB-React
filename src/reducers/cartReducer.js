import logo3 from '../images/logo3.jpg'


const initState = {
        items: [
        {_id:'1', name: 'Extra Virgin Olive Oil 250ml', description:"Extra virgin olive oil", price: 11.00, size: "250mL", count: 10, available: true, img:{logo3} },
        {_id:'2', name: 'Extra Virgin Olive Oil 500ml', description:"Extra virgin olive oil", price: 16.00, count: 10, size: "500mL", available: true, img:{logo3} },
        {_id:'3', name: 'Extra Virgin Olive Oil 3L', description:"Extra virgin olive oil", price: 65.00, count: 10, size: "3L", available: true, img:{logo3} },
        {_id:'4', name: 'Extra Virgin Olive Oil 20L', description:"Extra virgin olive oil", price: 230.00, count: 10, size: "20L", available: false, img:{logo3} },
        {_id:'5', name: 'Jar of Black Olives 200g', description:"A jar of olives", price: 8.00, count: 10, size: "200g", available: true, img:{logo3} },
        {_id:'6', name: 'Jar of Green Olives 200g', description:"A jar of olives", price: 8.00, count: 10, size: "200g", available: true, img:{logo3} }
        ],
        addedItems:[],
        total: 0

}
const cartReducer= (state = initState,action)=>{
    
    return state;

}
export default cartReducer;