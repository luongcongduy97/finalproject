import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductFilter from './components/ProductFilter'
import TopProductFilter from './components/TopProductFilter'
import CategoryFilter from './components/CategoryFilter'
import CardList from './components/CardList'
import { getProductList } from '../../redux/action'
import { useDispatch, useSelector } from 'react-redux'
const ProductListPage = () => {
    
    const dispatch = useDispatch()
    const productList = useSelector ( state => state.productList)
    const searchedProductList = useSelector( state => state.searchedProductList)
    const filterList = useSelector(state => state.filterList)
    const catgoryList = useSelector(state => state.catgoryList)
    return (
        <Container fluid style={{ backgroundColor: 'green', marginTop: 61 }}>
            <Row style={{ backgroundColor: 'grey' }}>
                <Col md={3} xs={12} style={{ backgroundColor: 'white', height: '100vh', padding: 0 }}>
                    <ProductFilter />
                </Col>
                <Col md={9} style={{ backgroundColor: 'grey' }}>
                    <Container>
                        <Row style={{ backgroundColor: 'white', height: 'auto',width:'auto', left:'0'}}>
                            <Col>
                                <TopProductFilter />
                            </Col>
                        </Row>
                         {/* <Row style={{ backgroundColor: 'white', height: '3.6rem', marginTop: 5 }}>
                            <Col>
                                <p><CategoryFilter/></p>
                            </Col>
                        </Row> */}
                             <Row style={{ backgroundColor: 'white', height: 'auto', marginTop: 10 }}>
                            <Col>
                                <p><CardList /></p>
                            </Col>
                        </Row>
                    </Container> 
                </Col>
            </Row>
        </Container>
    )
}

export default ProductListPage