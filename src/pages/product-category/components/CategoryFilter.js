import React from 'react'


const CategoryFilter = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row'}}> 
            <a href="#" style={{width:'10rem',backgroundColor:'rgb(91, 189, 184)', display: 'flex', flexDirection:'row',borderRadius:'5px'}}>
                <img style={{width: '3.6rem' , height:'3.6rem'}} src="//media3.scdn.vn/img4/2021/01_13/Ndr4Sa2ytkZpqnWNSQ0z_simg_3a7818_100x100_maxb.png"/>
                <div style={{color: 'white',padding:'2px'}}>Áo sơ mi nam trơn</div>
            </a>  
            <a href="#" style={{width:'10rem',backgroundColor:'rgb(148, 193, 99)', display: 'flex', flexDirection:'row',borderRadius:'5px', marginLeft:'10px', borderLeft:'1px solid grey'}}>
                <img style={{width: '3.6rem' , height:'3.6rem'}} src="//media3.scdn.vn/img4/2021/01_13/GxKelxaih9baXbVUl6FX_simg_3a7818_100x100_maxb.png"/>
                <div style={{color: 'white',padding:'2px'}}>Áo sơ mi nam kẻ sọc</div>
            </a>
            <a href="#" style={{width:'10rem',backgroundColor:'rgb(196, 190, 76)', display: 'flex', flexDirection:'row',borderRadius:'5px', marginLeft:'10px', borderLeft:'1px solid grey'}}>
                <img style={{width: '3.6rem' , height:'3.6rem'}} src="//media3.scdn.vn/img4/2021/01_13/kcF7xuEcWAwqVFS1jNap_simg_3a7818_100x100_maxb.png"/>
                <div style={{color: 'white',padding:'2px'}}>Áo sơ mi nam caro</div>
            </a> 
            <a href="#" style={{width:'10rem',backgroundColor:'rgb(225, 184, 87)', display: 'flex', flexDirection:'row',borderRadius:'5px', marginLeft:'10px', borderLeft:'1px solid grey'}}>
                <img style={{width: '3.6rem' , height:'3.6rem'}} src="//media3.scdn.vn/img4/2021/01_13/u9tYKmUEdHYA4j6uyy07_simg_3a7818_100x100_maxb.png"/>
                <div style={{color: 'white',padding:'2px'}}>Áo sơ mi nam chấm</div>
            </a>         
        </div>
    )
}

export default CategoryFilter