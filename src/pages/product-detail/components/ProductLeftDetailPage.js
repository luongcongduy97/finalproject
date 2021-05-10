import React from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'
import FigureCaption from 'react-bootstrap/esm/FigureCaption'
import { ZoomIn, HeartFill, HandThumbsUpFill, Facebook } from 'react-bootstrap-icons'
import './ProductImage.css'
import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'


const ProductLeftDetailPage = ({ productDetail }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Select Image
    const [selectImage, setSelectedImage] = useState('')
    const setImage = (image) => () => {
        setSelectedImage(image)
    }

    return (
        <div style={{ height: 'auto' }}>
            <div style={{ padding: '1.2rem', height: 'auto' }}>
                <figure style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                    <img style={{ width: '24vw', height: '50vh' }} src={selectImage === '' ? productDetail && productDetail.data.media[0].image_500x500 : selectImage} onClick={handleShow}></img>
                    <figcaption style={{ display: 'flex', position: 'absolute', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.5)', width: '24vw', }}><ZoomIn /> Click de phong to </figcaption>
                </figure>
                <div style={{ height: '10vh', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        productDetail &&
                        productDetail.data.media.map(item =>
                            <button style={{ border: '1px solid white', marginRight: '0.5vw', marginBottom: '0.5vw' }} onClick={setImage(item.image_500x500)}>
                                <img style={{ height: '7vh' }} src={item.image_50x50} />
                            </button>
                        )
                    }
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button style={{ display: 'flex', border: 'none', backgroundColor: 'transparent' }}>
                            <div style={{ color: 'grey', marginRight: '0.5rem' }}><HeartFill /></div>
                            <div>Yeu thich</div>
                        </button>
                        <div style={{ display: 'flex' }}>
                            <Button style={{ display: 'flex', fontSize: '11px', fontWeight: 'bold', backgroundColor: '#1877f2', marginRight: '10px' }}>
                                <div><HandThumbsUpFill /></div>
                                <div style={{ marginLeft: '4px', marginRight: '4px' }}>Like</div>
                                <div>0</div>
                            </Button>
                            <Button style={{ display: 'flex', fontSize: '11px', fontWeight: 'bold', backgroundColor: '#1877f2' }}>
                                <div><Facebook /></div>
                                <div style={{ marginLeft: '4px', marginRight: '4px' }}>Share</div>
                                <div>0</div>
                            </Button>
                        </div>
                    </div>
                </div>

            </div>


            <Modal size='md' show={show} onHide={handleClose} > 
                <Modal.Header closeButton>
                    <Modal.Title><h5>{productDetail && productDetail.data.name}</h5></Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Container >
                        <Row >
                            
                                {/* <Carousel fade='true' indicators='false'>
                                    {
                                        productDetail && productDetail.data.media.map(item =>
                                            <Carousel.Item>
                                                <img style={{}} src={item.image_500x500}></img>
                                            </Carousel.Item>
                                        )
                                    }

                                </Carousel> */}
                                <Carousel thumbWidth={70} dynamicHeight={true} width={450}  >
                                    {
                                        productDetail && productDetail.data.media.map(item =>
                                            <div >
                                                <img src={item.image_500x500}></img>
                                            </div>
                                        )
                                    }     
                                </Carousel>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default ProductLeftDetailPage