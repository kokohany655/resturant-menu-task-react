import React, { useState } from 'react'
import './Navbar.css'
const NavBar = ({onSearch}) => {
  const [search, setSearch] = useState('')
  
  return (
    <div  style={{boxShadow:'1px 1px 4px rgba(0,0,0,0.3)'}}>
        <div className='header' >
        <div className='brand'>
            menu
        </div>
        <form>
            <input onChange={e=>setSearch(e.target.value)} value={search} type='text' placeholder='Search..' className='input'/>
            <button onClick={(e)=>{e.preventDefault();onSearch(search)}} type='submit' className='buttonSearch'>Go</button>
        </form>
        </div>
    </div>
  )
}

export default NavBar