import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Content = () => {
    return (
        <Container fluid style={{ backgroundColor: 'green', marginTop: 61 }}>
            <Row style={{ backgroundColor: 'yellow' }}>
                <Col md={2} xs={12} style={{ backgroundColor: 'cyan' }}>
                    Left column
                </Col>
                <Col style={{ backgroundColor: 'purple' }}>
                    <Container>
                        <Row style={{ backgroundColor: 'green', height: 100 }}>
                            <Col>
                            <p>Row 1</p>
                            </Col>
                        </Row>
                        <Row style={{ backgroundColor: 'yellow', height: 150, marginTop: 10 }}>
                            <Col>
                            <p>Row 2</p>
                            </Col>
                        </Row>
                        <Row style={{ backgroundColor: 'red', height: 300, marginTop: 10  }}>
                            <Col>
                            <p>Row 3</p>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Content