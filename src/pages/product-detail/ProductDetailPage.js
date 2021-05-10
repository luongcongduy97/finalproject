import React, { useEffect } from 'react'
import { Container, Row, Col, Modal, Button, Carousel } from 'react-bootstrap'
import FigureCaption from 'react-bootstrap/esm/FigureCaption'
import { ZoomIn, HeartFill, HandThumbsUpFill, Facebook } from 'react-bootstrap-icons'
import './components/ProductImage.css'
import { useState } from 'react'
import ProductLeftDetailPage from './components/ProductLeftDetailPage'
import ProductRightDetailPage from './components/ProductRightDetailPage'
import ShopDetailPage from './components/ShopDetailPage'
import TabDetailPage from './components/TabDetailPage'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetail } from '../../redux/action'
import { useParams } from 'react-router'

const ProductDetailPage = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {path} = useParams()
    
    
    const dispatch = useDispatch()
    const productDetail = useSelector(state=> state.productDetail)
    const categoryList = useSelector(state=> state.categoryList)
    const productList = useSelector(state=> state.productList)
    useEffect(()=>{
        dispatch(getProductDetail(path))
    },[dispatch])
    

    return (
        <div style={{ backgroundColor: 'grey' }}>
            
               
                
            <div style={{ marginTop: '9vh', marginLeft: '5vw', marginRight: '5vw', backgroundColor: 'white' , height:'auto'}}>
               
                
                <Container fluid style={{ height:'90vh'}}>
                
                    <Row>
                        <Col md={4}>
                            <ProductLeftDetailPage productDetail={productDetail}/>
                        </Col>
                        <Col md={8}>
                            <ProductRightDetailPage productDetail={productDetail}/>
                        </Col>
                    </Row>
                    
                </Container>
            </div>
            <div style={{ marginTop: '1vh', marginLeft: '5vw', marginRight: '5vw', backgroundColor: 'white' }}><ShopDetailPage productDetail={productDetail}></ShopDetailPage></div>
            <div style={{ marginTop: '1vh', marginLeft: '5vw', marginRight: '5vw', backgroundColor: 'white' }}><TabDetailPage productDetail={productDetail}></TabDetailPage></div>
    
        </div>
    )
}

export default ProductDetailPage