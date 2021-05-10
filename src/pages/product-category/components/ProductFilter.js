import React from 'react'
import { Accordion, Button, Card, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap'
import { CaretRightFill, XCircleFill } from 'react-bootstrap-icons'
import './ProductFilter.css'
const ProductFilter = () => {
    return (
        <>
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Card.Header} style={{backgroundColor: 'white', border: 'white'}} eventKey="0">
                        ĐÃ LỌC
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0" >
                    <Card.Body>
                        <Button style={{borderRadius: 20,backgroundColor: '#e8e8e8', color: '#828282', borderColor: '#e8e8e8'}} className="grid=item">Mua gói siêu hời &nbsp;<span><XCircleFill/></span></Button>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        <Accordion defaultActiveKey="1">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Card.Header} style={{backgroundColor: 'white', border: 'white'}} eventKey="1">   
                        BỘ LỌC SẢN PHẨM
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1" >
                    <Card.Body>
                        <Form.Check  type="checkbox" label="Voucher Shop đến 50%"  />
                        <Form.Check type="checkbox" label="Mua trước trả sau" />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        <Accordion defaultActiveKey="2">    
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Card.Header} style={{backgroundColor: 'white', border: 'white'}} eventKey="2">
                        THEO GIÁ KHOẢNG
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2" >
                    <Card.Body>
                        <InputGroup className="mb-3">

                            <FormControl
                                placeholder="Thấp nhất"
                                aria-label="min"
                                aria-describedby="basic-addon1"
                                type="number"
                            />
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1"><CaretRightFill/></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Lớn nhất"
                                aria-label="max"
                                aria-describedby="basic-addon1"
                                type="number"
                            />
                            <InputGroup.Prepend>
                                <Button><CaretRightFill/></Button>
                            </InputGroup.Prepend>
                        </InputGroup>
                        <div className="grid-container">
                            <Button className="grid=item">0 ~ 40K</Button>
                            <Button className="grid=item">40K ~ 75K</Button>
                            <Button className="grid=item">70K ~ 150K</Button>
                            <Button className="grid=item">150K ~ 300K</Button>
                            <Button className="grid=item">300K ~ 500K</Button>
                            <Button className="grid=item">Trên 500K</Button>
                        </div>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        </>
    )
}

export default ProductFilter