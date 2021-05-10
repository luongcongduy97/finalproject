import {useEffect} from "react"
import { Col, Form, Row } from "react-bootstrap"
import {useDispatch, useSelector} from 'react-redux'
import { getProfile } from "../../redux/action"

const ProfilePage = () => {
    const dispatch = useDispatch()
    const profile = useSelector(state => state.profile)

    useEffect(()=> {
        dispatch(getProfile())
    }, [dispatch])
    return (
        <div style={{ marginTop:'4rem'}}>
            <h3>THÔNG TIN TÀI KHOẢN</h3>
            { profile && <div style={{justifyContent:'center', alignItems:'center'}}>
            <Form>
                <Form.Group as={Row} controlId = "formPlaintextEmail">
                    <Form.Label column sm="2">
                        <h5>Email:</h5>
                    </Form.Label>
                    <Col sm = "10">
                        <Form.Control plaintext readOnly defaultValue={profile.email}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId = "formPlaintextEmail">
                    <Form.Label column sm="2">
                        <h5>Phone:</h5>
                    </Form.Label>
                    <Col sm = "10">
                        <Form.Control plaintext readOnly defaultValue={profile.phone}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId = "formPlaintextEmail">
                    <Form.Label column sm="2">
                        <h5>Tên:</h5>
                    </Form.Label>
                    <Col sm = "10">
                        <Form.Control plaintext readOnly defaultValue={profile.fistName.toUpperCase()}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId = "formPlaintextEmail">
                    <Form.Label column sm="2">
                        <h5>Họ và tên đệm:</h5>
                    </Form.Label>
                    <Col sm = "10">
                        <Form.Control plaintext readOnly defaultValue={profile.lastName.toUpperCase()}/>
                    </Col>
                </Form.Group>
            </Form>
                
            </div>}
        </div>
    )
}

export default ProfilePage