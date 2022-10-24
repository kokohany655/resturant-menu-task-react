import React from 'react'
import './itemslist.css' 

const ItemsList = ({data}) => {
  return (
    <>
    {data.length ? data.map((d,index)=>(
        <div key={index} className='card'>
        <div className='photo'>
           <h3>Photo</h3> 
        </div>
        <div>

        </div>
        <div className='text'>
            <h3 style={{display:'flex' , justifyContent:'space-between' , marginRight:'25px' , width:'100%'}}><span>{d.title}</span> <span>{d.price}</span></h3>
            <p style={{color:'black' , opacity:'.5'}}>{d.description}</p>
        </div>
    </div>
    )):<h2>no food </h2>}
    
    </>
  )
}

export default ItemsList