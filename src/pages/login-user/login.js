import React, { useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {Link, Redirect, useHistory} from 'react-router-dom'
import { getProductList, login } from '../../redux/action'
const LoginUser = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.isLoggedIn)

    const emailRef = React.createRef()
    const handleSubmit = (event) => {
        event.preventDefault()

        const email = emailRef.current.value 
        const password = document.getElementById("password").value

        const formData = {
            email, password
        }
        dispatch(login(formData))
    }
    if (isLoggedIn) return <Redirect to='/profile' />
    return (
        <div style={{backgroundColor:'grey'}}>
            <div style={{marginTop:'9vh', display:'flex', justifyContent:'center', padding:'1rem'}}>
            
            <Form style={{width:'40vw', backgroundColor: 'white', padding: '10px', borderRadius:'5px'}} onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <div>ĐĂNG NHẬP</div>
                    <Form.Label>Nhập số điện thoại hoặc email</Form.Label>
                    <Form.Control id="email" placeholder="Enter email" name="email" type="email" ref={emailRef}/>
                    
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Mật khẩu</Form.Label>
                    <Form.Control id="password" type="password" name="password" placeholder="Password"  />
                    <Form.Text className="text-muted" style={{display:'flex', justifyContent:'center'}}>
                        Đăng nhập bằng &nbsp; <span style={{color:'blue'}}>Facebook</span> &nbsp; hoặc &nbsp; <span style={{color:'red'}}>Gmail</span>
                 </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" style={{width:'100%', backgroundColor:'red', border:'none'}}>
                    Đăng nhập
                </Button>
                <div style={{display:'flex', justifyContent:'space-between', paddingTop:'10px', color:'blue'}}>
                    <Link to="/cart">
                        Quên mật khẩu
                    </Link>
                    <Link to="cart">
                        Đăng ký
                    </Link>
                </div>
            </Form>
            </div>

        </div>
    )
}

export default LoginUser