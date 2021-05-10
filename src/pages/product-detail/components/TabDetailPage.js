import React from 'react'
import { Container, Tab, Tabs, Col, Row, ProgressBar } from 'react-bootstrap'
import { StarFill } from 'react-bootstrap-icons'
import StarRatings from "react-star-ratings";

const TabDetailPage = ({productDetail}) => {
    return (
        <div>
            <Tabs defaultActiveKey="CTSP" transition={false} id="noanim-tab-example" style={{ fontSize: '1.5rem', color: 'red' }}>
                <Tab eventKey="CTSP" title="Chi tiết sản phẩm">
                    {productDetail && productDetail.data.description}
                    
                </Tab>
                <Tab eventKey="DG" title="Đánh giá">
                    <div>Đánh giá nhận xét về sản phẩm</div>
                    <div>
                        <Container fluid>
                            <Row>
                                <Col md={6}>
                                    <div style={{ fontSize: '2rem' }}>
                                        <strong style={{ fontSize: '4rem' }}>{productDetail && productDetail.data.rating_info.percent_star !== undefined ? productDetail && productDetail.data.rating_info.percent_star: 0}</strong>
                                        /
                                        <span style={{color:'red'}}>5</span> &nbsp;
                                        <span style={{ fontSize: '1rem' ,color:'red'}}><StarRatings  rating={productDetail && productDetail.data.rating_info.percent_star !== undefined ? productDetail && productDetail.data.rating_info.percent_star: 0}  starDimension="25px" starRatedColor="#b9081d" starSpacing="0" /></span>
                                        <div style={{fontSize:'1rem'}}>
                                            Đây là thông tin người mua đánh giá shop bán sản phẩm này có đúng mô tả không
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} >
                                    <div style={{display:'flex', justifyContent:'space-between'}}>
                                        <span style={{ fontSize: '0.7rem' ,color:'red'}}><StarRatings  rating={productDetail && productDetail.data.rating_info.star5 !== undefined ? productDetail && productDetail.data.rating_info.star5: 0}  starDimension="15px" starRatedColor="#b9081d" starSpacing="0"/></span>
                                        <div style={{width:'30vw'}} ><ProgressBar now={productDetail && productDetail.data.rating_info.percent_star5 !== undefined ? productDetail && productDetail.data.rating_info.percent_star5: 0} variant='danger'/></div>
                                        <div style={{width:'2vw'}}>{productDetail && productDetail.data.rating_info.star5 !== undefined ? productDetail && productDetail.data.rating_info.star5: 0}</div>
                                    </div>
                                    <div style={{display:'flex', justifyContent:'space-between'}}>
                                        <span style={{ fontSize: '0.7rem' ,color:'red'}}> <StarRatings  rating={productDetail && productDetail.data.rating_info.star4 !== undefined ? productDetail && productDetail.data.rating_info.star4: 0}  starDimension="15px" starRatedColor="#b9081d" starSpacing="0"/></span>
                                        <div style={{width:'30vw'}} ><ProgressBar now={productDetail && productDetail.data.rating_info.percent_star4 !== undefined ? productDetail && productDetail.data.rating_info.percent_star4: 0} variant='danger'/></div>
                                        <div style={{width:'2vw'}}>{productDetail && productDetail.data.rating_info.star4 !== undefined ? productDetail && productDetail.data.rating_info.star4: 0}</div>
                                    </div>
                                    <div style={{display:'flex', justifyContent:'space-between'}}>
                                        <span style={{ fontSize: '0.7rem' ,color:'red'}}><StarRatings  rating={productDetail && productDetail.data.rating_info.star3 !== undefined ? productDetail && productDetail.data.rating_info.star3: 0}  starDimension="15px" starRatedColor="#b9081d" starSpacing="0"/></span>
                                        <div style={{width:'30vw'}} ><ProgressBar now={productDetail && productDetail.data.rating_info.percent_star3 !== undefined ? productDetail && productDetail.data.rating_info.percent_star3: 0} variant='danger'/></div>
                                        <div style={{width:'2vw'}}>{productDetail && productDetail.data.rating_info.star3 !== undefined ? productDetail && productDetail.data.rating_info.star3: 0}</div>
                                    </div>
                                    <div style={{display:'flex', justifyContent:'space-between'}}>
                                        <span style={{ fontSize: '0.7rem' ,color:'red'}}> <StarRatings  rating={productDetail && productDetail.data.rating_info.star2 !== undefined ? productDetail && productDetail.data.rating_info.star2: 0}  starDimension="15px" starRatedColor="#b9081d" starSpacing="0"/></span>
                                        <div style={{width:'30vw'}} ><ProgressBar now={productDetail && productDetail.data.rating_info.percent_star2 !== undefined ? productDetail && productDetail.data.rating_info.percent_star2: 0} variant='danger'/></div>
                                        <div style={{width:'2vw'}}>{productDetail && productDetail.data.rating_info.star2 !== undefined ? productDetail && productDetail.data.rating_info.star2: 0}</div>
                                    </div>
                                    <div style={{display:'flex', justifyContent:'space-between'}}>
                                        <span style={{ fontSize: '0.7rem' ,color:'red'}}> <StarRatings  rating={productDetail && productDetail.data.rating_info.star1 !== undefined ? productDetail && productDetail.data.rating_info.star1: 0}  starDimension="15px" starRatedColor="#b9081d" starSpacing="0"/></span>
                                        <div style={{width:'30vw'}} ><ProgressBar now={productDetail && productDetail.data.rating_info.percent_star5 !== undefined ? productDetail && productDetail.data.rating_info.percent_star1: 0} variant='danger'/></div>
                                        <div style={{width:'2vw'}}>{productDetail && productDetail.data.rating_info.star1 !== undefined ? productDetail && productDetail.data.rating_info.star1: 0}</div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Tab>
                <Tab eventKey="HD" title="Hỏi đáp">
                    <div>dlaskdlsakdlaskdl</div>
                </Tab>
            </Tabs>
        </div>
    )
}

export default TabDetailPage