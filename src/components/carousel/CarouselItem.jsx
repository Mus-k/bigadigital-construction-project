import React from 'react'

const CarouselItem = ({item, activeIndex, updateIndex}) => {
    
  return (
    <div className='carousel-item'>
        <div></div>
      <img className='carousel-img' src={item.imag} width="100%"/>
      <div className='carousel-text'>{item.description}</div>
      <div className='carousel-buttons'>
<button className='prevbutton'
onClick={()=>{
    updateIndex(activeIndex -1)
}}>prev</button>
<button

onClick={()=>{
    updateIndex(activeIndex -1)
}}>righ</button>
      </div>
    </div>
  )
}

export default CarouselItem
