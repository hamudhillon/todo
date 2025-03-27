import { useState,useRef,useEffect  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [listinp,setInp]=useState("")
  const [skip,setSkip]=useState(0)
  const [data,setData]=useState([])
  const limit=10

  // const res=await fetch('https://dummyjson.com/products')
  // const d=await res.json();
  // setData(d)
  useEffect(
   ()=>{
    fetch(`https://dummyjson.com/products?skip=${skip}&limit=${limit}&`)
    .then(res=>res.json())
    .then(data=>setData(data))
   },[skip]
  )


  

  console.log(skip)

  const inoutRef=useRef(null)
  function handleChange(event){
    setInp(event.target.value)
  }

  function handleInp(){
    console.log(inoutRef.current.value)
  }

  return (
    <>
    <div>
      <button onClick={()=>{setSkip(prevSkip => prevSkip - limit)}} disabled={skip===0}>Prev</button>
      <button onClick={()=>{setSkip(prevSkip => prevSkip + limit)}} >Next</button>
      {
      data.products &&
      data.products.map((pros)=>{
          
          return <div> 
            <img src={pros.images[0]} width={200}/>
            <h1>{pros.title}</h1>
            <p>{pros.price}</p>
            <p>{pros.description}</p>
          </div>
      })}
    </div>
    <input type="text" 
      // value={listinp}
      id='ListInp'
      ref={inoutRef}
      // onChange={handleChange}
    />
    <button onClick={handleInp}>Get Value</button>
    </>
  )
}

export default App
