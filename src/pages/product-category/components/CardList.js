import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { StarFill , TagFill} from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { getProductList, searchProductList } from '../../../redux/action'

const CardList = () => {
    const {slug} = useParams()
    const dispatch = useDispatch()
    const productList = useSelector ( state => state.productList)
    const searchedProductList = useSelector( state => state.searchedProductList)
    const filterList = useSelector(state => state.filterList)

    useEffect(()=>{
        if(slug==="thoi-trang-nu") dispatch(getProductList(8,1))
        else if(slug==='thoi-trang-nam') dispatch(getProductList(94,1))
        else dispatch(getProductList(1992,1))     
    },[dispatch])
    
    
    const formatter = new Intl.NumberFormat('vi-VN',{
        style:'currency',
        currency:'VND'
    })
    return(
        <div>
            <Container>
                
                <Row>
                    {    searchedProductList === undefined ? 
                        Array.isArray(productList) && 
                        productList.map( item => 
                        <Col md={3} key={item.id} style={{marginBottom:'1rem'}}>
                        <Link to={`/detail/${item.category_path}`} style={{width:'auto', height: 'auto',padding: '0', color:'black'}} >
                            
                            <div style={{display:'flex'}}>
                                <img style={{width:'14rem', height: '16rem', border:'2px solid grey', borderRadius:'5px'}}src={item.image}/> 
                                <div style={{position:'absolute', top:'1rem', left:'2.5rem', backgroundColor:'red', borderRadius:'50px', width:'3rem', textAlign:'center', color:'white', fontWeight:'500'}}>{item.sale_percent === 0 ? "" : item.sale_percent+'%'}</div>
                            </div>

                            
                            <div style={{display:'flex'}}>

                                <div style={{textOverflow:'ellipsis', whiteSpace:'nowrap', overflow:'hidden'}}>{item.name}</div>
                            </div>
                            <div style={{height:'2.5rem'}}>
                                <div style={{color:'red', fontWeight: 500}}>{formatter.format(item.sale_price_max)}
                                </div>
                                <div style={{color:'#828282', fontStyle:'italic', fontSize:'0.8rem', textDecoration:'line-through'}}>{item.sale_price_max === item.default_price_max ? "": formatter.format(item.default_price_max)}
                                </div>
                            </div>
                            <div style={{ display: 'flex' , justifyContent:'space-between'}}>
                                <div style={{ display: 'flex'}}>
                                <div style={{fontSize:'0.5rem', color: "red", }}> <StarFill/> <StarFill/> <StarFill/> <StarFill/> <StarFill/>  </div>
                                <div style={{fontSize: '0.7rem'}}>(181)</div>
                                </div>
                                <div style={{display: 'flex',fontSize: '0.7rem'}}>
                                    <div><TagFill/></div>
                                    <div>{item.sold}</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex' , justifyContent:'space-between'}}>
                                <div style={{ display: 'flex'}}>
                                <div style={{fontSize:'1rem', textOverflow:'ellipsis', whiteSpace:'nowrap', overflow:'hidden',width:'6rem' }}>{item.shop.name} </div>
                                </div>
                                <div style={{fontSize: '1rem', display:'flex'}}>
                                    <img style={{width:'1rem', height:'1.5rem'}} src="https://media3.scdn.vn/img4/2020/08_19/tvrzlilU8XpvJ4y0KLJk.png"/>

                                    <div>{item.shop.ware_house_region_name}</div>
                                </div>
                            </div>
                        </Link>
                    
                    </Col>

                        ): Array.isArray(searchedProductList) && 
                         (
                            searchedProductList.map( item => 
                            <Col md={3} key={item.id} style={{marginBottom:'1rem'}}>
                            <Link to={`/detail/${item.category_path}`} style={{width:'auto', height: 'auto',padding: '0', color:'black'}} >
                                
                                <div style={{display:'flex'}}>
                                    <img style={{width:'14rem', height: '16rem', border:'2px solid grey', borderRadius:'5px'}}src={item.image}/> 
                                    <div style={{position:'absolute', top:'1rem', left:'2.5rem', backgroundColor:'red', borderRadius:'50px', width:'3rem', textAlign:'center', color:'white', fontWeight:'500'}}>{item.sale_percent === 0 ? "" : item.sale_percent+'%'}</div>
                                </div>
    
                                
                                <div style={{display:'flex'}}>
    
                                    <div style={{textOverflow:'ellipsis', whiteSpace:'nowrap', overflow:'hidden'}}>{item.name}</div>
                                </div>
                                <div style={{height:'2.5rem'}}>
                                    <div style={{color:'red', fontWeight: 500}}>{formatter.format(item.sale_price_max)}
                                    </div>
                                    <div style={{color:'#828282', fontStyle:'italic', fontSize:'0.8rem', textDecoration:'line-through'}}>{item.sale_price_max === item.default_price_max ? "": formatter.format(item.default_price_max)}
                                    </div>
                                </div>
                                <div style={{ display: 'flex' , justifyContent:'space-between'}}>
                                    <div style={{ display: 'flex'}}>
                                    <div style={{fontSize:'0.5rem', color: "red", }}> <StarFill/> <StarFill/> <StarFill/> <StarFill/> <StarFill/>  </div>
                                    <div style={{fontSize: '0.7rem'}}>(181)</div>
                                    </div>
                                    <div style={{display: 'flex',fontSize: '0.7rem'}}>
                                        <div><TagFill/></div>
                                        <div>{item.sold}</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex' , justifyContent:'space-between'}}>
                                    <div style={{ display: 'flex'}}>
                                    <div style={{fontSize:'1rem', textOverflow:'ellipsis', whiteSpace:'nowrap', overflow:'hidden',width:'6rem' }}>{item.shop.name} </div>
                                    </div>
                                    <div style={{fontSize: '1rem', display:'flex'}}>
                                        <img style={{width:'1rem', height:'1.5rem'}} src="https://media3.scdn.vn/img4/2020/08_19/tvrzlilU8XpvJ4y0KLJk.png"/>
    
                                        <div>{item.shop.ware_house_region_name}</div>
                                    </div>
                                </div>
                            </Link>
                        
                        </Col>
    
                            ))
                    }    
                    
                    
                    
                </Row>
            </Container>
        </div>
    )
}

export default CardList
//                                <div><img style={{width:'3rem'}} src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png"></img></div>