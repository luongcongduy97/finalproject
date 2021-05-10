
import React, { useState } from 'react'
import { Breadcrumb, Button, Dropdown, OverlayTrigger, Popover } from 'react-bootstrap'
import { ChatLeftDots, Check2Square, StarFill, TagFill } from 'react-bootstrap-icons'
import './ProductRightDetailPage.css'
import { useDispatch, useSelector } from "react-redux"
import { addToCart, decreaseCount, getColor, getProductDetail, getSize, increaseCount } from "../../../redux/action"
import StarRatings from "react-star-ratings";
import { useParams } from 'react-router'

const ProductRightDetailPage = ({productDetail}) => {
    const popoverOne = (
        <Popover id="popover-one">
            <Popover.Title as="h3">Chính sách hoàn trả của SenMall</Popover.Title>
            <Popover.Content>
                <ul>
                    <li>Trả hàng hoàn tiền 100% trong vòng 7 ngày cho các sản phẩm bị lỗi kỹ thuật, bể vỡ, không đúng mô tả hoặc không đúng như đơn đặt hàng.</li>
                    <li>Hoàn tiền 100% nếu phát hiện hàng giả, hành nhái.</li>
                </ul>
            </Popover.Content>
        </Popover>
    )
    const popoverTwo = (
        <Popover id="popover-two">
            <Popover.Title as="h3">Kiểm hàng khi nhận</Popover.Title>
            <Popover.Content>
                <div>Shop hỗ trợ người mua được kiểm hàng khi nhận hàng</div>
            </Popover.Content>
        </Popover>
    )
    const popoverThree = (
        <Popover id="popover-three">
            <Popover.Title as="h3">Miễn phí hoàn trả</Popover.Title>
            <Popover.Content>
                <div>Sendo bảo vệ quyền lợi khách hàng hoàn trả sản phẩm miễn phí nếu lỗi của Shop (sản phẩm kém chất lượng, bị lỗi kỹ thuật, hư hỏng không sử dụng được, bể vỡ, không đúng mô tả, hoặc không đúng như đơn đặt hàng).</div>
            </Popover.Content>
        </Popover>
    )
    const dispatch = useDispatch()
    const count = useSelector(state => state.count)
    const size = useSelector(state => state.size)
    const color = useSelector(state => state.color)
    const cart = useSelector(state => state.cart)
  
    const formatter = new Intl.NumberFormat('vi-VN',{
        style:'currency',
        currency:'VND'
    })
    
        
    
    
   
    const handleCount = () => {
        // get value from input 
            const value = parseInt(document.getElementById("value").value);
        dispatch(increaseCount(value)) // { type: INCREASE_COUNT}
    }

    const handleCountDown = () => {if(count > 1) dispatch(decreaseCount())}
 
    
    const {path} = useParams()
    
    return (
        
        
        <div style={{borderLeft: '1px solid #e8e8e8', paddingLeft: '20px'}}>
            
            <div style={{paddingBottom:'10px', borderBottom: '1px dotted #e8e8e8' }}>
                <Breadcrumb style={{ backgroundColor: 'white', fontSize: '10px', marginTop: '10px' }}>
                    {
                        productDetail && 
                        productDetail.meta_data.breadcrumb.map(item=> <Breadcrumb.Item href="#">{item.title}</Breadcrumb.Item>)
                    }
                    
                </Breadcrumb>
                <div style={{ display: 'flex', }}>
                    {/* <div>
                        <img style={{ width: '4rem', height: '1.5rem', }} src='https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png'></img>
                    </div> */}
                    <div style={{ fontWeight: ' bold', fontSize: ' 20px' }}>
                   {productDetail && productDetail.data.name.toUpperCase()}
                </div>
                </div>
                <div>Thương hiệu: &nbsp;
                    <a href='#' style={{ color: 'grey', textDecoration: 'none' }} >
                        {
                            productDetail &&
                            productDetail.data.shop_info.shop_name
                        }
                    </a>
                </div>

            </div>
            <div style={{paddingBottom:'10px',borderBottom: '1px dotted #e8e8e8'}}>
                <div style={{ display: 'flex', marginTop: '1rem', alignItems: 'center', justifyContent: 'left' }}>
                    <div style={{ backgroundImage: 'linear-gradient(90deg,#b9081d,#f21a4c)', fontSize: '0.9rem', color: 'white', borderRadius: '3px', paddingLeft: '0.3rem', paddingRight: '0.3rem', marginRight: '0.6rem' }}>{productDetail && productDetail.data.promotion_percent === 0 ? "" : `Giảm ${productDetail && productDetail.data.promotion_percent} %`}</div>
                    <strong style={{ fontWeight: '500', fontSize: '1.5rem', color: '#e5101d', marginRight: '0.6rem' }}>{formatter.format(productDetail && productDetail.data.final_price)}</strong>
                    <div style={{ color: '#828282', textDecoration: 'line-through', fontSize: '1.2rem' }}>{productDetail && productDetail.data.final_price === productDetail.data.final_price_max ? "" : formatter.format(productDetail && productDetail.data.final_price_max)}</div>
                </div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ fontSize: '0.9rem', color: "#b9081d", }}> <StarRatings  rating={productDetail && productDetail.data.rating_info.percent_star}  starDimension="15px" starRatedColor="#b9081d" starSpacing="0" />  </div>
                        <div style={{ fontStyle: 'italic', color: '#007bff', marginLeft: '1rem', marginRight: '0.5rem' }}> {productDetail && productDetail.data.rating_info.total_rated}</div>
                        <a href='#' style={{ fontStyle: 'italic' }}>Lượt đánh giá</a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' ,color:'grey'}}>
                        <TagFill></TagFill>
                        <div style={{marginRight: '3px', marginLeft:'5px'}}>{productDetail && productDetail.data.order_count}</div>
                        <div>lượt mua</div>
                    </div>
                </div>
            </div>
            <div style={{paddingTop:'1rem', width: '50vw', borderBottom: '1px dotted #e8e8e8'}}>
                <div style={{display:'flex', alignItems:'baseline'}}>
                    <div style={{paddingRight: '2rem', maxWidth: '12rem', flex: '0 0 7rem'}}>
                        Màu sắc:
                    </div>
                    {
                        productDetail && 
                        productDetail.data.attribute[0] === undefined ? "" : (productDetail && productDetail.data.attribute[0].value.map(item => 
                            {
                                let isActive = item.name === color
                                return (
                                    <div>
                                        <button style={{ border: '1px solid white', marginRight: '1vw',borderRadius:'3px' ,width:'auto'}} className={isActive ? "borderSize":""} onClick={()=> dispatch(getColor(item.name))}>
                                            <div style={{ height: 'auto' }} >{item.name}</div>
                                        </button>
                                    </div> 
                                )
                            }
                            ))
                    }
                    
                </div>
                <div style={{display:'flex',alignItems: 'baseline', marginTop: '5px'}}>
                    <div style={{display:'flex'}}>
                        <div style={{paddingRight: '2rem', maxWidth: '20rem', flex: '0 0 7rem'}}>
                            Kích thước:
                        </div>
                        <div style={{display: 'flex'}}>
                            {
                                productDetail && 
                                productDetail.data.attribute[1] === undefined ? "" :  productDetail && productDetail.data.attribute[1].value.map(item=> 
                                    {
                                        let isActive = item.value === size
                                        return (
                                            <button style={{ border: 'none', width: 'auto', marginRight:'1vw'}} className={(isActive ? "borderSize":"")}  onClick={()=> dispatch(getSize(item.value))}>{item.value}</button>
                                        )
                                        
                                    } 
                                    )  
                                }
                            
                        </div>
                    </div>
                </div>
                <div style={{display:'flex', marginTop:'10px'}}>
                    <div style={{paddingRight: '2rem', maxWidth: '20rem', flex: '0 0 7rem'}}>
                        Số lượng: 
                    </div>
                    <div style={{alignItems:'baseline'}}>
                        <button style={{ border:'none', backgroundColor:'#c7c7cd', color:'white', width:'1.5vw', borderRadius:'3px', fontSize:'0.7rem'}} onClick={handleCountDown}>-</button>
                        <input type="number" style={{width:'3vw', textAlign:'center', border:'none' ,marginLeft:'3px', marginRight:'3px'}}  id="value" value={count}></input>
                        <button style={{ border:'none', backgroundColor:'#c7c7cd', color:'white', width:'1.5vw', borderRadius:'3px', fontSize:'0.7rem'}} onClick={handleCount}>+</button>
                    </div>
                </div>
                <div style={{maxWidth:'40vw'}}>
                    <div style={{display: 'flex', marginTop:'1rem'}}>
                        <button style={{ border: '1px solid red', color:'red', borderRadius:'3px', display: 'flex', alignItems:'baseline', padding: '7px',fontSize:'1rem'}}>
                            <ChatLeftDots/>
                            <div style={{marginLeft:'3px',}}>Chat ngay</div>
                        </button>
                        <button style={{ border:'none', backgroundColor:'#f7941d', marginLeft:'1rem', width:'14vw', fontWeight:'500', color:'white', borderRadius:'3px'}} onClick={()=> dispatch(addToCart(cart, productDetail, count, size, color))}>Thêm vào giỏ hàng</button>
                        <button style={{ border:'none', backgroundColor:'#e5101d', marginLeft:'1rem', width:'14vw', fontWeight:'500', color:'white', borderRadius:'3px'}}>Mua ngay</button>
                    </div>
                    <button style={{textAlign:'center', width: '38vw', fontWeight: '500', marginTop: '1rem', border: 'none', padding: '7px', borderRadius: '3px'}}>Mua trước trả sau</button>
                </div>
                <div style={{display: 'flex', marginTop: '1rem',borderBottom: '1px dotted #e8e8e8', paddingBottom: '1rem' }}>
                        <div>
                            <OverlayTrigger trigger="hover" placement='bottom-start' overlay={popoverOne}>
                                <div><Check2Square style={{color:'red'}}/> 7 ngày hoàn trả</div>
                            </OverlayTrigger>
                        </div>
                        <OverlayTrigger trigger="hover" placement='bottom-start' overlay={popoverTwo}>
                            <div style={{ marginLeft: '15px', color:'#c7c7cd'}}>
                                <Check2Square/> Kiểm hàng khi nhận
                            </div>
                        </OverlayTrigger>
                        
                </div>
                <OverlayTrigger trigger="hover" placement='bottom-start' overlay={popoverThree}>
                    <div style={{marginTop:'1rem'}}>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNMCAuMDQ3aDE3Ljk3OHYxOS44MzJIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzIDIuMDc0KSI+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHBhdGggZmlsbD0iI0U1MTAxRCIgZD0iTTEuMjA2IDUuMzU4Yy0uMDE3LjAwMS4wOSAxLjkyNS4yMTIgMi44NzguMjEyIDEuNjU1LjY4IDMuMjM2IDEuNDQgNC43MTggMS4yNDQgMi40MjggMy4xMjEgNC4xOSA1LjQ5NiA1LjQxNy43MzYuMzguNTguMzc2IDEuMjYzLS4wNSAyLjQ0MS0xLjUyMSA0LjMzLTMuNTYyIDUuNTUtNi4yMjNhMTUuOTQ1IDE1Ljk0NSAwIDAgMCAxLjM1NC00LjczYy4xMjYtMS4wMzEuMTc1LTIuMDczLjI1MS0zLjExMS4wMi0uMjY3LS4wNDUtLjMzMy0uMzEtLjM2NmEyNi43MyAyNi43MyAwIDAgMC0uOTM1LS4xMDYgMTIuMDQzIDEyLjA0MyAwIDAgMS0zLjktMS4wMzggMTMuNTkgMTMuNTkgMCAwIDEtMi4zNS0xLjM2NWMtLjE2My0uMTE4LS4zMS0uMTMzLS40NzQtLjAxMS0uMDg3LjA2NS0uMTgzLjExOS0uMjc0LjE4YTEzLjI1MyAxMy4yNTMgMCAwIDEtMy43MzMgMS43NTdjLTEuMDguMzE3LTIuMTg1LjQ5My0zLjMwMy41ODItLjIuMDE1LS4yODkuMTA3LS4yODguMzA4LjAwMy4zODYuMDAxLjc3My4wMDEgMS4xNm0xNi43Ny0uNTYxYy0uMDcyIDEuNTk1LS4yNjIgMy4xNzEtLjY0NiA0LjcyLTEuMTExIDQuNDgyLTMuNjUyIDcuODQ2LTcuNTYgMTAuMTRhMS40ODIgMS40ODIgMCAwIDEtMS40NTcuMDU4QzQuNDUgMTcuODYyIDEuODYgMTQuODg1LjY5IDEwLjY1Ny4yIDguODkyLjAxMiA3LjA4Ny4wMDMgNS4yNThjLS4wMDItLjQzOC0uMDE2LS44ODEuMDM0LTEuMzE1Qy4xMiAzLjIyLjU5IDIuNzgxIDEuMzAyIDIuNjgxYy43OC0uMTEgMS41NjMtLjE5NCAyLjMzNC0uMzQ4IDEuNDc4LS4yOTYgMi44NDYtLjg4NiA0LjExLTEuNzI4LjE1LS4xLjMwMS0uMTk5LjQ1NC0uMjkzLjU4NS0uMzYyIDEuMTY1LS4zNTkgMS43My4wNDIuOTYxLjY4MyAxLjk4MiAxLjI0NCAzLjA5MSAxLjYzOC45NzQuMzQ1IDEuOTc5LjUyMiAzLjAwMi42MTYuMjY3LjAyNC41MzguMDQuOC4wOTQuNjg1LjE0IDEuMTM5LjcxOCAxLjE1MyAxLjQ0Ni4wMDQuMjE2IDAgLjQzMyAwIC42NDkiIG1hc2s9InVybCgjYikiLz48L2c+PHBhdGggZmlsbD0iI0U1MTAxRCIgZD0iTTEzLjI3NyAxNC4xOTVsLS4wMzcuMDAyLTQuMTguMDFhLjU2Ny41NjcgMCAwIDEtLjA4NCAwaC0uMDU0bC4wMDEtLjAwNGMtLjAyMS0uMDA0LS4wNDItLjAwNi0uMDY0LS4wMTItLjI1OS0uMDctLjQyMS0uMjk0LS4zNjItLjUwMmwuNTQ5LTEuOTI5Yy4wNjEtLjExNi4yMDQtLjIzMy41NS0uMjMzaDIuNjUybC0uMzY0LjkwOEg5Ljg4N2wtLjIwNy42ODUgMy41NjEtLjAyNS4wMzYtLjAwNGMuNDQyLS4wNDEuODE1LS4yNzEuODE1LS42OTYgMC0uMzQtLjI2MS0uNTYzLS44MjEtLjg0OC0uNjUtLjM0OC0xLjI2NC0uODEyLTEuMjY0LTEuNTk3IDAtMS4xMTggMS4wMzEtMi4xMjYgMi4yMTktMi4xNyAwIDAgLjM0NS0uMDYxIDEuMTEuMTI4bC0uNDUgMS4wMDdhMy40ODUgMy40ODUgMCAwIDAtLjYwNy0uMDU2Yy0uNjA1IDAtLjkuNTY4LS45Ljg3NyAwIC4zNDcuMzcuNTYyLjg4NS44NDcuNzQuMzg0IDEuMjEuODc0IDEuMjEgMS41ODggMCAxLjI0Ni0uOTcyIDEuOTM1LTIuMTk3IDIuMDI0bS0uMjUgMi4xNmEuNzA3LjcwNyAwIDAgMS0uNjk5LS43MTZjMC0uMzk1LjMxMy0uNzE1LjY5OS0uNzE1LjM4NiAwIC42OTkuMzIuNjk5LjcxNWEuNzA3LjcwNyAwIDAgMS0uNy43MTVtLTMuNDkzIDBhLjcwNy43MDcgMCAwIDEtLjY5OS0uNzE1YzAtLjM5NS4zMTMtLjcxNS43LS43MTUuMzg1IDAgLjY5OC4zMi42OTguNzE1YS43MDcuNzA3IDAgMCAxLS42OTkuNzE1bTguODQ5LTkuMjEzYy0uMTgtLjA0MS0uMzY1LS4wNjEtLjU0OS0uMDgyLS45OS0uMTE0LTEuOTQ0LS4zNzYtMi44NzctLjcyNC0uOTgzLS4zNjctMS45MS0uODUtMi43OTQtMS40MjMtLjA4OS0uMDU3LS4xNTctLjA4NS0uMjYtLjAxOEM5Ljk3NSA2LjE0OCA3Ljg2IDYuODU1IDUuNiA3LjEzMmMtLjExLjAxMy0uMTQuMDY0LS4xNC4xNjQuMDAzLjE5LjAwMS4zOC4wMDEuNTctLjAxNC4wMDIuMTIxIDEuNzYyLjI1IDIuNjMzLjE3MyAxLjE2OS41MDIgMi4yOTcuOTg0IDMuMzc0IDEuMDY4IDIuMzgzIDIuNzc4IDQuMTMyIDUuMDM5IDUuMzM4LjE1Ny4wODQuMjcyLjA3OC40Mi0uMDE4IDIuNjczLTEuNzI2IDQuNTI1LTQuMTA4IDUuNTEyLTcuMTg5LjQ5LTEuNTMyLjcyLTMuMTEyLjgzMS00LjcxMy4wMDQtLjA1LS4wNjYtLjEzOS0uMTE1LS4xNSIvPjwvZz48L3N2Zz4K"/>
                        Sendo bảo trợ bởi
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjkiIGhlaWdodD0iMTgiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNMCAuNTFoMTAuNDk2VjEyLjFIMHoiLz48cGF0aCBpZD0iYyIgZD0iTS4yMTMuNjExaDExLjgzNFYxOEguMjEzeiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMwNDREQTEiIGQ9Ik0yNy43MDUgMTMuMzAxaC4xOTljLjEzMSAwIC4yNDYtLjAxOC4yNDYtLjE4IDAtLjE0NC0uMTI3LS4xNjgtLjI0NC0uMTY4aC0uMjAxdi4zNDh6bS0uMjI1LS41MmguNDVjLjI5MSAwIC40NDkuMTAyLjQ0OS4zNTcgMCAuMjA4LS4xMjEuMzEtLjMxOS4zMjdsLjMyNy41M2gtLjIzMWwtLjMxNi0uNTIzaC0uMTM1di41MjNoLS4yMjV2LTEuMjE0em0xLjIyMy42MTJjMC0uNS0uMzYzLS44NjQtLjgxMi0uODY0LS40NDggMC0uODExLjM2NC0uODExLjg2NCAwIC41MDIuMzYzLjg2NS44MTEuODY1LjQ0OSAwIC44MTItLjM2My44MTItLjg2NXptLTEuODgzIDBhMS4wNzIgMS4wNzIgMCAwIDEgMi4xNDMgMGMwIC41OS0uNDgxIDEuMDcyLTEuMDcyIDEuMDcyLS41OSAwLTEuMDcxLS40ODItMS4wNzEtMS4wNzJ6Ii8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAyLjM5KSI+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHBhdGggZmlsbD0iIzA0NERBMSIgZD0iTTUuNTUzLjUxYTMuNjIyIDMuNjIyIDAgMCAwLTMuNDM2IDIuNDgybC0uMDMxLjA5Ny0uMDguMzExTDAgMTIuMTAxaDUuMDU5QTMuNDk4IDMuNDk4IDAgMCAwIDguMzQ4IDkuOGwuMTkzLS44MjdMMTAuNDk2LjUxSDUuNTUzeiIgbWFzaz0idXJsKCNiKSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4IC0uNjEpIj48bWFzayBpZD0iZCIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYyIvPjwvbWFzaz48cGF0aCBmaWxsPSIjRjI2RjIxIiBkPSJNNy4xLjYxYTMuNjE4IDMuNjE4IDAgMCAwLTMuNTYxIDIuOTc2TC4yMTMgMThINS4xNWEzLjYxNyAzLjYxNyAwIDAgMCAzLjUwOC0yLjczNGguMDAzTDEyLjA0Ny42MTJINy4xeiIgbWFzaz0idXJsKCNkKSIvPjwvZz48cGF0aCBmaWxsPSIjNTBCNzQ4IiBkPSJNMjMuMzE0IDIuODk4YTMuNjE5IDMuNjE5IDAgMCAwLTMuMzggMi4zMzNjLS4wMjguMDctLjExOC4zNTctLjExOC4zNTdsLTIuMDU1IDguOTAyaDQuOTRhMy42MiAzLjYyIDAgMCAwIDMuNTEzLTIuNzQ3YzAgLjAwMi0uMDAyLjAwMi0uMDAyLjAwMmguMDAybDIuMDQxLTguODQ2aC00Ljk0eiIvPjxwYXRoIGZpbGw9IiNGRUZFRkUiIGQ9Ik0zLjM1IDYuMTA5Yy0uMjguMjMtLjQ2LjUxLS41MS43MzVsLTEuMDQ1IDQuNzE5LjA1OS0uMDAxYy4zMjQgMCAuNjMzLS4xMTYuOTEtLjM0NGExLjQ1IDEuNDUgMCAwIDAgLjUyNS0uODMybC4yNy0xLjE5OGgyLjI0Yy4zMjYgMCAuNjMzLS4xMTUuOTE0LS4zNDUuMjgyLS4yMy40NjMtLjUxLjUzMi0uODM2bC4wMTMtLjA1OUgzLjgzNGwuMjA5LS45NDRoMy4yNDNjLjMyNiAwIC42MzItLjExNS45MTItLjM0My4yNzUtLjIyOC40NDktLjUxNC41MjMtLjgzNmwuMDE2LS4wNjFINC4yNmMtLjMyNiAwLS42MzMuMTE2LS45MS4zNDVtMjIuODQ1LS4wNjVhLjk1NC45NTQgMCAwIDAtLjY5OS0uMjcxaC00LjQ3M2wtLjAxLjA0YTEuNDQzIDEuNDQzIDAgMCAwLS4wMjMuMjQ1Ljk0Ljk0IDAgMCAwIC4yNy42ODNjLjE4LjE4MS40MTUuMjcyLjcuMjcyaC45NjdsLS45NzIgNC41NWguMDZjLjMyNSAwIC42My0uMTE2LjkwNy0uMzQyLjI3NS0uMjI4LjQ1MS0uNTA4LjUxNy0uODMybC43MjEtMy4zNzZoMi4yNzFsLjAxLS4wNGMuMDE2LS4wODMuMDIyLS4xNjkuMDIyLS4yNTRhLjkyNC45MjQgMCAwIDAtLjI2OC0uNjc1bS0xMy4xMDcuOTYxaDIuOTk0bC0uMjA1Ljk0OGgtMi45OThsLjIwOS0uOTQ4em0zLjI5LTEuMjQxaC0zLjAyNGwuMDA0LS4wMDNoLTEuMjQ1bC0xLjIzNCA1LjgwMmguMDYzYy4zMjQgMCAuNjI4LS4xMTYuOTA2LS4zNDRhMS40MyAxLjQzIDAgMCAwIC41MTctLjgzM2wuMjUyLTEuMTkxaDMuMDUzYy4zMjQgMCAuNjI5LS4xMTUuOTA2LS4zNDIuMjc2LS4yMjYuNDUtLjUwOC41MjYtLjgzOWwuMjMtMS4wNDljLjAxNi0uMDgyLjAyNi0uMTY4LjAyNi0uMjU1YS44OTkuODk5IDAgMCAwLS4yNzYtLjY3NC45NjMuOTYzIDAgMCAwLS43MDMtLjI3MnoiLz48L2c+PC9zdmc+Cg=="/>
                        Bảo vệ quyền lợi khách hàng: Miễn phí hoàn trả
                    </div>
                </OverlayTrigger>
            </div>
        
        </div>
        
    )
}

export default ProductRightDetailPage