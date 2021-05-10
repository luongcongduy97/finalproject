import {INCREASE_COUNT,DECREASE_COUNT, CHOOSE_SIZE, GET_PRODUCTLIST, GET_CATEGORIES, GET_PRODUCTDETAIL, GET_PRODUCTLISTID, UPDATE_PRODUCTLIST, SEARCH_PRODUCTLIST, SORT_PRODUCT, ADD_TO_CART, REMOVE_FROM_CART, GET_COLOR, GET_SIZE, REMOVE_ALL_CART, LOGIN, LOGOUT, RESET_AUTH, GET_PROFILE} from "./types"

export const increaseCount = () => {
    return {
        type: INCREASE_COUNT
    }
}

export const decreaseCount = () => {
    return {
        type: DECREASE_COUNT
    }
}

export const chooseSize = () => {
    return {
        type: CHOOSE_SIZE
    }
}


export const getProductList = (cateId, page) => {
    return function(dispatch){
        fetch('http://localhost:8000/products?cateId='+cateId+'&page='+page, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: GET_PRODUCTLIST,
                    productList: json.data
                })
            })
            .catch(console.error)
    }
}

export const getCategories = () => {
    return function(dispatch){
        fetch('http://localhost:8000/categories', {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: GET_CATEGORIES,
                    categoryList: json
                })
            })
            .catch(console.error)
    }
}

export const getProductDetail = (htmlPath) => {
    return function(dispatch){
        fetch(`http://localhost:8000/product/${htmlPath}`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: GET_PRODUCTDETAIL,
                    productDetail: json.result
                })
            })
            .catch(console.error)
    }      
}

export const searchProductList = (query) =>{
    return {
        type: SEARCH_PRODUCTLIST,
        query
    }
}

export const sortProduct = (items, sort) => (dispatch) => {
    const products = items.slice()
    if(sort !=="") {
        products.sort((a,b)=> (sort === 'lowest') ?
        (a.sale_price_max > b.sale_price_max ? 1 : -1)
        : (a.sale_price_max < b.sale_price_max ? 1 : -1))
    } else {
        products.sort((a,b) => (a.id > b.id ? 1 : -1 ))
    }
    return dispatch ({
        type: SORT_PRODUCT,
        payload: {
            sort: sort,
            items: products
        }
    })
}

export const addToCart = (items, product,count, size, color) => (dispatch) => {
    const cartItems = items.slice()
    let productAlreadyInCart = false
    cartItems.forEach(item=> {
        if(item.data.id === product.data.id) {
            productAlreadyInCart = true
            
        }
    })
    if (!productAlreadyInCart) {
        cartItems.push({ ...product, count:count, size:size,color:color, total_price: product.data.final_price * count})
    }
    return dispatch({type: ADD_TO_CART,
        payload:{
            cartItems: cartItems,
            product: product,
        }})
}

export const removeFromCart = (items, prodcut) => (dispatch) => {
    
    const cartItems = items.slice().filter(elm => elm.data.id !== prodcut.data.id)
    
    return dispatch({
        type: REMOVE_FROM_CART, 
        payload:{
            cartItems: cartItems
        }})
}

export const getSize = (size) => {

    return {
        type: GET_SIZE,
        size
    }

}

export const getColor = (color) => {
    return {
        type: GET_COLOR,
        color
    }
}

export const removeAllCart = (cart) => {
    return {
        type: REMOVE_ALL_CART,
        cart
    }
}

export const login = (formData) => {
    return function (dispatch) {
        fetch('http://localhost:8000/login',
        {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        }
        ).then(res => res.json())
        .then(json => {
            if(json.token){
                dispatch({
                    type: LOGIN,
                    token: json.token
                })
            }
        })
        .catch(console.error)
    }   
}

export const logout = () => {
    return {
        type: LOGOUT,
    }
}

export const resetAuthentication = () => {
    return {
        type:RESET_AUTH
    }
}

export const getProfile = () => {
    return function(dispatch){
        fetch('http://localhost:8000/profile', {
            headers: {
                "Authorization": localStorage.getItem('TOKEN'),
                "Content-Type":"application/json"
            }
        })
        .then(res => res.json())
        .then(json => {
            dispatch({
                type:GET_PROFILE,
                profile: json,
            })
        })
        .catch(console.error)
    }
}