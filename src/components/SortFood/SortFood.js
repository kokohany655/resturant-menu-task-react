import React from 'react'
import './Sortfood.css'

const SortFood = ({onCategory , allCategory}) => {
  return (
    <div className='sort'>
        <div className='head'>
            Food Menu
        </div>
        <div>
        {allCategory.map((cat, index)=>(
            <button onClick={()=>onCategory(cat)} key={index}>{cat}</button>
        ))}
        </div>
        
    </div>
  )
}

export default SortFood