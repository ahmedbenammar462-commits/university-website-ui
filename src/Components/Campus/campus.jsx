import React from 'react'
import './campus.css'
import gallery_1 from '../../assets/gallery-1-HP2uKW94.png'
import gallery_2 from '../../assets/gallery-2-DYatBGZh.png'
import gallery_3 from '../../assets/gallery-3-C4KpO1U2.png'
import gallery_4 from '../../assets/gallery-4-LJEJ329C.png'
import white_arrow from '../../assets/white-arrow.png'


const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery_1}></img>
            <img src={gallery_2}></img>
            <img src={gallery_3}></img>
            <img src={gallery_4}></img>
        </div>
        <button className='btn dark-btn'>See more here<img src={white_arrow} /></button>
      
    </div>
  )
}

export default Campus;
