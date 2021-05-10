import React, { useState } from 'react'
import { Breadcrumb, Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllCart } from '../../redux/action'
import CartItem from './components/CartItem'

const CartPage = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const categoryList = useSelector(state=> state.categoryList)
    let sum = []
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    {

        cart.map(item => sum.push(item.total_price))
    }
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <div style={{ backgroundColor: 'grey', padding: '10px', heigt:'100vh' }}>
            <div style={{ marginTop: '9vh', marginLeft: '5vw',heigt:'100vh', marginRight: '5vw',paddingBottom: '1rem', backgroundColor: 'white', paddingLeft: '1rem' , borderRadius:'5px'}}>
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Sendo.vn</Breadcrumb.Item>
                    <Breadcrumb.Item active>Giỏ hàng</Breadcrumb.Item>
                </Breadcrumb>
                <span>GIỎ HÀNG CỦA BẠN</span> &nbsp;
                <span>({cart.length} Sản phẩm)</span>  &nbsp;  &nbsp;
                <div>
                    <span style={{ fontWeight: 500, fontSize: '1.5rem' }}>Tổng Cộng: </span>
                    <span style={{ fontWeight: 500, fontSize: '2rem', color: 'red' }}>{formatter.format(sum.reduce(reducer, 0))}</span>
                </div>
                <div>
                    <Button style={{ backgroundColor: '#e5101d', border: 'none', marginTop: '1rem' }}  onClick={()=> {dispatch(removeAllCart(cart)); handleShow()}}>
                        <div  style={{ width: '15vw' , fontSize: '1.5rem'}}>Thanh toán</div>
                    </Button>
                </div>
                <Modal show = {show} onHide = {handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thông báo thanh toán</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>ĐÃ THANH TOÁN THÀNH CÔNG</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Chấp nhận</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div style={{ marginTop: '1vh', marginBottom: '1vh', marginLeft: '5vw', marginRight: '5vw', backgroundColor: 'white' }}>
                <CartItem></CartItem>
            </div>

        </div>
    )
}

export default CartPage