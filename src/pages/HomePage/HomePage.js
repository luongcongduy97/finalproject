import React from 'react'
import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'
import image4 from './image4.gif'
import image5 from './image5.png'
import image6 from './image6.png'

const HomePage = () => {
    return (
        <div style={{width:'100vw'}}>
            <img style={{width: '100vw'}} src={image1}/>
            <img style={{width: '100vw'}} src={image2}/>
            <img  style={{width: '100vw'}}src={image3}/>
            <img  style={{width: '100vw'}} src={image4}/>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <img  src={image5}/>
            </div>
            
            <img style={{width: '100vw'}} src={image6}/>

        </div>
    )
        
}

export default HomePage