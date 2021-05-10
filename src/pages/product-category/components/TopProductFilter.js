import React, { useEffect } from 'react'
import { Breadcrumb, Col, Container, Form, Row, Button, ButtonGroup, Navbar, FormControl, Nav,NavDropdown, DropdownButton, Dropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getCategories, searchProductList, sortProduct } from '../../../redux/action'


const TopProductFilter = () => {
    const {slug} = useParams()
    const dispatch = useDispatch()
    const sort = useSelector(state => state.sort)
    const productList = useSelector(state => state.productList)
    const searchedProductList = useSelector(state => state.searchedProductList)
    const filterList = useSelector(state => state.filterList)

    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Sendo.vn</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                 {slug === 'thoi-trang-nu' ? 'Thời trang nữ': ( slug=== 'thoi-trang-nam' ? 'Thời trang nam': 'Thiết bị y tế') }
                </Breadcrumb.Item>
            </Breadcrumb>
            <div>{slug === 'thoi-trang-nu' ? 'THỜI TRANG NỮ': ( slug=== 'thoi-trang-nam' ? 'THỜI TRANG NAM': 'THIẾT BỊ Y TẾ')} (tìm thấy hơn <label style={{ color: 'red' }}>10.000</label> sản phẩm)</div>
            <div style={{ display: 'flex',flexDirection: 'row',justifyContent:'space-between' }}>
                <div style={{paddingTop: '1rem '}}>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check inline type="checkbox" label="04-06.04"/>
                        <img style={{ paddingRight: '10px' }} src="https://media3.scdn.vn/img4/2021/03_23/rknkhyp1PiRlJtPUF7Cf.gif" />
                        <Form.Check inline type="checkbox" label="Shop+" />
                        <Form.Check inline type="checkbox" label="Flash Sale" />
                        <Form.Check inline type="checkbox" label="Shop uy tín" />
                        <Form.Check inline type="checkbox" label="Freeship" />
                    </Form.Group>
                </div>
                <div >
                    <Navbar collapseOnSelect bg="light" expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Shop đề cử</Nav.Link>
                                <Nav.Link href="#link">Bán chạy</Nav.Link>
                                
                                    <select as="select"  value={sort} onChange={(e)=> { Array.isArray(searchedProductList)  ? dispatch(sortProduct(searchedProductList,e.target.value)) :  dispatch(sortProduct(productList,e.target.value))}} >
                                        {console.log(sort)}
                                        <option value="">Sắp xếp</option>
                                        <option value="lowest">Tăng dần</option>
                                        <option value="highest">Giảm dần</option>
                                    </select>
                                
                                
                            </Nav>    
                        </Navbar.Collapse>
                    </Navbar>

                </div>
            </div>

        </div>
    )
}

export default TopProductFilter