import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { TrashFill } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../../redux/action'

const CartItem = () => {
    const dispatch = useDispatch()
    const productDetail = useSelector(state => state.productDetail)
    const cart = useSelector(state => state.cart)
    const categoryList = useSelector(state => state.categoryList)

    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })
    return (
        <div style={{ paddingTop: '2vh', backgroundColor: 'grey' }}>

            {
                Array.isArray(cart) && cart.length > 0 && cart.map(item =>
                    <div style={{ margin: '1rem', backgroundColor: 'white', borderRadius:'5px' }} >
                        <Container fluid style={{borderRadius:'5px'}}>
                            <Row >
                                <Col md={10} style={{ borderRight: '1px solid grey', paddingBottom: '1vh', borderBottom: '1px solid grey' }} >
                                    <div style={{ display: 'flex', }}>
                                        <div style={{ display: 'flex', width: "4.5rem", height: '4.5rem', border: '1px solid blue', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                                            <img style={{ width: "4rem", height: '4rem', borderRadius: '50%' }} src={item.data.shop_info.shop_logo}></img>
                                        </div>
                            &nbsp;
                            &nbsp;
                            <div style={{ width: '', display: 'flex', justifyContent: 'space-around', verticalAlign: 'center' }}>
                                            <div style={{ fontWeight: '500', }}>{item.data.shop_info.shop_name}</div>&nbsp;
                                {/* <img style={{ height:'1rem'  }} src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png"></img>&nbsp;
                                <img style={{ height:'1rem'  }} src="https://media3.scdn.vn/img4/2020/08_14/zK2sDAATYdqFwBZw4c0j.png"></img>                 */}
                                        </div>
                                    </div>

                                </Col>
                                <Col md={2} >
                                    <div style={{ borderBottom: '1px solid grey', fontWeight: '500', fontSize: '1.2rem', paddingBottom: '2vh', width: '12vw' }} >CHI TIẾT GIÁ</div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={10} style={{ borderRight: '1px solid grey', paddingBottom: '2vh', display: 'flex', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', }}>
                                        <div style={{ display: 'flex', width: '25vw', alignItems: 'center', borderRight: '0.05rem dotted #979797' }}>
                                            <img style={{ height: '7vh' }} src={item.data.image} />
                                            <div style={{ paddingLeft: '2vw' }}>{item.data.name}</div>
                                        </div>

                                        <div style={{ display: 'inline-flex', width: '15vw', justifyContent: 'flex-end', flexWrap: 'wrap', alignItems: 'center', borderRight: '0.05rem dotted #979797' }}>
                                            <div >
                                                {
                                                    item.size === false ? "" :
                                                        (
                                                        <div style={{ backgroundColor: '#efefef', padding: ' 2px 10px', marginLeft: '1rem', borderRadius: '3px', marginRight: '1rem', marginBottom: '0.3rem' }}>
                                                            {item.size}
                                                        </div>
                                                        )
                                                }

                                            </div>
                                            <div>
                                                {
                                                    item.color === false ? "" :
                                                        <div style={{ backgroundColor: '#efefef', padding: ' 2px 10px', marginLeft: '1rem', borderRadius: '3px', marginRight: '1rem', marginBottom: '0.3rem' }}>
                                                            {item.color}
                                                        </div>
                                                }

                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', width: '10vw', justifyContent: 'flex-end', alignItems: 'center', color: 'red', borderRight: '0.05rem dotted #979797', paddingRight: '1rem' }}>
                                            <div>{formatter.format(item.data.final_price)}</div>
                                        </div>
                                        <div style={{ display: 'flex', width: '7vw', justifyContent: 'flex-end', alignItems: 'center', color: 'red', borderRight: '0.05rem dotted #979797', paddingRight: '1rem' }}>
                                            <input style={{ width: '3vw' }} value={item.count}></input>
                                        </div>
                                        <div style={{ display: 'flex', width: '10vw', justifyContent: 'flex-end', alignItems: 'center', color: 'red', paddingRight: '1rem' }}>
                                            <div style={{ color: 'blue' }}>
                                                Sửa
                                </div>
                                            <div style={{ margin: '10px', color: 'grey' }}>
                                                <Button onClick={() => dispatch(removeFromCart(cart, item))}><TrashFill /></Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={2} style={{ paddingBottom: '2vh' }}>
                                    <div>
                                        <div>
                                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                <div>Tổng tiền: </div> &nbsp;
                                    <div style={{ color: 'red', paddingRight: '1vw', fontWeight: '500' }}>{formatter.format(item.count * item.data.final_price)}</div>

                                            </div>

                                            <div style={{ marginBottom: '1vh', marginTop: '1vh' }}>
                                                <Button style={{ backgroundColor: '#e7e8ea', border: 'none' }} >
                                                    <div style={{ width: '10vw', color: 'black' }}>Mua trước trả sau</div>
                                                </Button>
                                            </div>
                                            

                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                )

            }


        </div>
    )
}

export default CartItem