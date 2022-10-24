import NavBar from "./components/NavBar/NavBar";
import SortFood from "./components/SortFood/SortFood";
import './App.css'
import ItemsList from "./components/itemsList/ItemsList";
import {items} from './data'
import { useState } from "react";

function App() {
  const [data, setData] = useState(items)
  const allCategory = ['All',...new Set(items.map(item=> item.category))]

  const filterData = (cat)=>{
    if(cat === 'All'){
      setData(items)
    }else{
      const newArr = items.filter(item=>item.category === cat)
      setData(newArr)
    }
  }
  const filterDataBySearch = (word)=>{
    if(word !== ''){
      const newArr = items.filter(item=>item.title === word)
      setData(newArr)
    }
  }
  return (
  <div>
    <NavBar onSearch={filterDataBySearch}/>
    <div className="container">
        <SortFood onCategory={filterData} allCategory={allCategory}/>
        <ItemsList data={data}/>
   </div>
  </div>
   
  );
}

export default App;
