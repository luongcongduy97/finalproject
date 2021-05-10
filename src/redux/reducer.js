import {INCREASE_COUNT,DECREASE_COUNT, CHOOSE_SIZE, GET_PRODUCTLIST, GET_CATEGORIES, GET_PRODUCTDETAIL, GET_PRODUCTLISTID, SEARCH_PRODUCTLIST, SORT_PRICEDOWN, SORT_PRODUCT, ADD_TO_CART, REMOVE_FROM_CART, GET_COLOR, GET_SIZE, REMOVE_ALL_CART, RESET_AUTH, LOGIN, LOGOUT, GET_PROFILE} from "./types"

const initialState = {
    count:1,
    size: false,
    color: false,
    productList: undefined,
    categoryList: undefined,
    productDetail: undefined,
    searchedProductList: undefined,
    filterList: undefined,
    cart: [],
    sort: "",
    query: '',
    isLoggedIn : false,
    profile: undefined,
}
const appReducer  = (state = initialState, action) => {
    switch (action.type){
        case INCREASE_COUNT: {

            return { ...state, count: state.count + 1 }
        }
        // todo here

        case DECREASE_COUNT: {

            return { ...state, count: state.count - 1 } //action.count == 1
        }
        case CHOOSE_SIZE: {
            if (state.size === true) return { ...state,size: false}
            else return { ...state,size: true}
        }
        case GET_PRODUCTLIST:{
            return {...state, productList: action.productList}
        }
        case GET_CATEGORIES:{
            
            return {...state, categoryList: action.categoryList}
        }
        case GET_PRODUCTDETAIL:{
         
            return {...state, productDetail: action.productDetail}
        }
        case SEARCH_PRODUCTLIST:{
            const { query } = action

            const searchedProductList=[];
            for(let item of state.productList) {
                if(item.name.toLowerCase().includes(query.toLowerCase()))
                searchedProductList.push(item)
            }
            return {...state, searchedProductList, query}
        }
        case SORT_PRODUCT: {
            return {
                ...state,  productList: action.payload.items,
                searchedProductList: action.payload.item,
                sort: action.payload.sort,
                
            }
        }
        case ADD_TO_CART: {
            return {
                cart: action.payload.cartItems,
                productDetail: action.payload.product,
                count: 1,
                size: false,
                color: false,
            }
        }
        case REMOVE_FROM_CART: {
            return {
                cart: action.payload.cartItems
            }
        }
        case GET_SIZE: {
            return {...state, size: action.size}
        }
        case GET_COLOR: {
            return {...state, color: action.color}
        }
        case REMOVE_ALL_CART: {
            return {...state, cart: []}
        }
        case LOGIN: {
            let isLoggedIn = false;
            if (action.token) {
                isLoggedIn = true
                localStorage.setItem('TOKEN', action.token)
            }
            else {
                isLoggedIn = false
                localStorage.removeItem('TOKEN')
            }
            return {...state, isLoggedIn}
        }
        case RESET_AUTH: {
            const token = localStorage.getItem('TOKEN');
            let isLoggedIn = false
            if(token) {
                isLoggedIn = true
            }
            return {...state, isLoggedIn}
        }
        case LOGOUT: {
            localStorage.removeItem('TOKEN')
            return {...state, isLoggedIn: false}
        }
        case GET_PROFILE: {
            return {...state, profile: action.profile}
        }
        default: return state
    }
}

export default appReducer;
