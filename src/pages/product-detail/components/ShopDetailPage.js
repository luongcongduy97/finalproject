import React from 'react'
import { Container, Row, Col,  Popover, OverlayTrigger } from 'react-bootstrap'
import { BoxSeam, CartPlus, ChatLeftFill, Dot, HouseFill, StarFill, Stopwatch, SuitHeart, TelephoneForward } from 'react-bootstrap-icons'
import StarRatings from "react-star-ratings";


const ShopDetailPage = ({productDetail}) => {
    const popover = (
        <Popover id="popover">
            <Popover.Content>
                <div>
                    <span> Số điện thoại của shop: &nbsp;</span>
                    <span style={{fontWeight:'bold'}}>{productDetail && productDetail.data.shop_info.phone_number}</span>
                </div>
            </Popover.Content>
        </Popover>
    )
    return (
        <div style={{paddingTop: '1rem', paddingBottom:'1rem'}}>
            <Container fluid>
                    <Row>
                        <Col md={4}>
                            <div style={{display: 'flex',}}>
                                <div style={{display:'flex',width:"7rem", height:'7rem', border: '2px solid red',alignItems:'center', justifyContent:'center', borderRadius:'50%',padding:'1rem' }}>
                                    <img style={{width:"6rem"}} src={productDetail && productDetail.data.shop_info.shop_logo}></img>
                                </div>
                                <div style={{marginLeft: '1rem'}}>
                                    <div style={{ width: '15rem',display:'flex', alignItems:'center', justifyContent:'space-around'}}>
                                        <div style={{fontWeight: '500', textOverflow:'ellipsis', whiteSpace:'nowrap', overflow:'hidden'}}>{productDetail && productDetail.data.shop_info.shop_name}</div>
                                        <img style={{ height:'1rem'  }} src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png"></img>
                                        <img style={{ height:'1rem'  }} src="https://media3.scdn.vn/img4/2020/08_14/zK2sDAATYdqFwBZw4c0j.png"></img>
                                        <OverlayTrigger trigger="hover" placement='bottom-start' overlay={popover}>
                                            <div style={{display:'flex',height:'2rem', width:'2rem', padding:'5px', color:'rgb(28,172,147)', border:' 1px solid rgb(28,172,147)', borderRadius:'50%', justifyContent:'center', alignItems:'center'}}><TelephoneForward/></div>
                                        </OverlayTrigger>
                                    </div>
                                    <div style={{display: 'flex', alignItems:'center', alignContent: 'center', fontSize:'0.8rem'}}>
                                        <div style={{width:'0.4rem', height:'0.4rem', backgroundColor:'#7ed321', borderRadius:'50%', marginRight:'0.4rem'}}></div>
                                        <div>Online</div>
                                    </div>
                                    <div style={{display: 'flex', color:'red', alignItems:'center'}}>
                                        <div><StarRatings  rating={productDetail && productDetail.data.shop_info.rating_avg}  starDimension="15px" starRatedColor="#b9081d" starSpacing="0" /></div>
                                        <div style={{marginLeft:'1rem', marginRight:'1rem'}}>{productDetail && productDetail.data.shop_info.rating_avg}</div>
                                        <div style={{color:'grey', fontStyle:'italic'}}>{productDetail && productDetail.data.shop_info.rating_count} đánh giá</div>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <div>Kho hàng: &nbsp;</div>
                                        <strong style={{color: '#4a90e2'}}>{productDetail && productDetail.data.shop_info.warehourse_region_name}</strong>
                                    </div>
                                    <div style={{display:'flex', marginTop: '5px', alignItems: 'center'}}>
                                        <a href='#' style={{color:'black',display: 'flex', border: '1px solid grey',width: '7rem',justifyContent:'center',alignItems:'center'}}>
                                            <div style={{fontSize:'1.3rem'}}><SuitHeart></SuitHeart></div>
                                            <span style={{ marginLeft:'5px'}}>Theo dõi</span>
                                        </a>
                                        <a href='#' style={{color:'black',display: 'flex', border: '1px solid grey',width: '7rem',justifyContent:'center',alignItems:'center', marginLeft:'7px'}}>
                                            <div style={{fontSize:'1.3rem'}}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAmVJREFUSA3tVEtrE1EUPufOjQEfYBKNYpuq8YUUwVVRCYgiiksRd+1CUOnGXyHoouBawZV0o+Bj46JacSNC0UU3PlBBFzbx0VgqxZjO3Pt57iQZM0mDCdZdz2Lmu+ee73znnLl3iFbsLxPg5v0vmwbyZhHHQd68x/TBwuxXSr0lY9eCVT8UPSFrDwuJtZd47Bv/qEBx62cgvwDllbaUP95vzhkTKKYGbgM4w8w3JSgvuMCsLoPsCIFyxOoiA1dBSGhWwwHsuEvGGsMIeFySBUmV3J75/v5TQ0Q1wGxmdx8Bp+rrR4IPOMyw7xjUF2JGFYzAYQNkZHfOYTK8lZhmQKSr8EdDX/0RCSyiMuoChFQFKVPDRNajOcFhHFuqMnEowEw7Jembep4T0vWdEAPnMTi4qiESCQB01jmFOClVD4WYZBZG16p0DkUV6eyXgzK+fnnUBMAHGTwR+gnZ4syPkw47k4rrxnyDCacl+RgrXTUwR4R0d+MGb6pUNg+kgGQS+mGFgksSNyJi1zz25o21e2T2TzcfG5ooTk7dknFmExrPG2lj73J6R24mlZuOObtcCG+slN4WTqGZEo3IOX0OdhF4b3NAt5hJrQFsNJoGLyYAls+4zBYXCP6zwDIXH6aLdSCnQw7EPxjkZrRYTEAObVtAS3zPyz/3IKTKZyZo+Sdd7zkToSCcV628mAAC94uwSm7ohdbAbtZSXdsdignQ6vQL/vn1nvwwDnVMKC0uvYdZab6t82jmn1P5fZb89UuTe/EytF43nf32csGxog4sB+fkEKV7SdUhFoFduCJ7rzvsr7jjE/gNt9njB8eLyN8AAAAASUVORK5CYII="></img></div>
                                            <span style={{ marginLeft:'5px'}}>Vào Shop</span>
                                        </a>
                                    </div>
                                </div>          
                            </div>
                           
                        </Col>
                        <Col md={8}>
                            <div style={{flex: '1 1', height:'20vh',paddingLeft: '2rem',display:'flex', alignItems:'center', justifyContent:'space-between', borderLeft: '1px solid rgb(232, 232, 232)',color:'grey'}}>
                                <div style={{ textAlign:'center', }}>
                                    <div style={{display:'flex'}}>
                                        <div><HouseFill/></div>
                                        <div style={{paddingLeft:'4px',color:'#4a90e2'}}>{productDetail && productDetail.data.shop_info.sale_on_sendo}</div>
                                    </div>
                                    <div>Bán ở Sendo</div>
                                </div>
                                <div style={{ textAlign:'center'}}>
                                    <div style={{display:'flex'}}>
                                        <div><BoxSeam/></div>
                                        <div style={{paddingLeft:'4px',color:'#4a90e2'}} >{productDetail && productDetail.data.shop_info.product_total}</div>
                                    </div>
                                    <div>Sản phẩm</div>
                                </div><div style={{ textAlign:'center'}}>
                                    <div style={{display:'flex'}}>
                                        <div><CartPlus/></div>
                                        <div style={{paddingLeft:'4px',color:'#4a90e2'}}>1 Ngày</div>
                                    </div>
                                    <div>Chuẩn bị hàng</div>
                                </div><div style={{ textAlign:'center'}}>
                                    <div style={{display:'flex'}}>
                                        <div><ChatLeftFill/></div>
                                        <div style={{paddingLeft:'4px',color:'#4a90e2'}}>{productDetail && productDetail.data.shop_info.percent_response}</div>
                                    </div>
                                    <div>Tỉ lệ phản hồi</div>
                                </div><div style={{ textAlign:'center'}}>
                                    <div style={{display:'flex'}}>
                                        <div><Stopwatch/></div>
                                        <div style={{paddingLeft:'4px',color:'#4a90e2'}}>{productDetail && productDetail.data.shop_info.response_time}</div>
                                    </div>
                                    <div>Shop phản hồi</div>
                                </div>
                                
                            </div>
                        </Col>
                    </Row>
            </Container>
        </div>
    )
}

export default ShopDetailPage