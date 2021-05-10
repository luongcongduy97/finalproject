import React, { useEffect, useState } from 'react'
import { Form, FormControl, Nav, Image, NavDropdown } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import { Search, Cart4, Cart } from 'react-bootstrap-icons';
import {Redirect, Link, useHistory, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getProductList, resetAuthentication, searchProductList, updateProductList } from '../redux/action';
const TopNavigation = ({categoryList}) => {
    
    const dispatch = useDispatch()
    const productList = useSelector ( state => state.productList)
    const isLoggedIn = useSelector(state=> state.isLoggedIn)
    window.onload = () => {
        if(!isLoggedIn) {
            dispatch(resetAuthentication())
        }
    }
    const [searchTerm, setSearchTerm] = useState('')
   
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="/">
                <Image src="/logo.svg" rounded />
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <NavDropdown title="Category" id="collasible-nav-dropdown">
                {
                    Array.isArray(categoryList) &&
                    categoryList.map(item => <NavDropdown.Item><Link onClick={()=>dispatch(getProductList(item.id,1))} to={`/list/${item.slug}`} >{item.name}</Link></NavDropdown.Item>)
                }
                                
                </NavDropdown>
                <Form inline>

                    <div style={{width:'40vw'}}><FormControl type="text" placeholder="Search" className="mr-md-4"  style={{width:'32rem'}}  onChange={(e)=> dispatch(searchProductList(e.target.value))} /></div>
                    <Button variant="outline-light" ><Search /></Button>
                </Form>
                <Nav className="ml-auto">
                    <Nav.Link> <Link to="/cart"><Cart/></Link></Nav.Link>
                    {
                        isLoggedIn ?
                        <>
                        <Nav.Link><Link to="/profile">Profile</Link></Nav.Link> &nbsp;
                        <Nav.Link><Link to="/logout">Logout</Link></Nav.Link>
                        </>
                        :<Nav.Link><Link to="/login">Login</Link></Nav.Link>
                    } 
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default TopNavigation